#!/usr/bin/env node
/**
 * Registry source generator.
 *
 * Scans the registry source tree (`registry/default`) and the site data files
 * (`data/componentsData.tsx`, `data/blocksData.tsx`) to emit the declarative
 * registry JSON files consumed by the shadcn CLI (`shadcn build`):
 *
 * Emitting:
 *   registry.json                                  → root registry, composes sub-registries via `include`
 *   registry/default/registry.json                 → `registry:component` items (declared one level up
 *                                                      so their core `ui/*.tsx` references stay inversion-free)
 *   registry/default/lib/registry.json             → `registry:lib` (utils)
 *   registry/default/ui/registry.json              → standalone `registry:ui` primitives
 *   registry/default/blocks/registry.json          → `registry:block` items
 *
 * Design rules:
 *  - Each component item INLINES its core `ui/*.tsx` file plus its demo files,
 *    so one `shadcn add <url>` installs everything the component needs and item
 *    names in `public/r/*` never collide between primitives and components.
 *  - Shared primitives (button, input, …) stay standalone `registry:ui` items
 *    and are referenced across items via full-URL `registryDependencies`.
 *  - `dependencies` / `registryDependencies` are derived by scanning real
 *    `import` statements, so the JSON can never drift from the source code.
 *  - Item names equal the site's public URL slugs (utils/slugify.tsx).
 *
 * Run via the `registry:build` package script, then `shadcn build`.
 */

import fs from "node:fs/promises";
import fsSync from "node:fs";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const REGISTRY_DIR = path.join(ROOT, "registry", "default");
const SITE_URL = (process.env.NEXT_PUBLIC_BASE_URL ?? "https://ui.voxletstudio.com").replace(/\/+$/, "");

/** react / next are the implicit platform; they are never listed as dependencies. */
const IGNORED_PACKAGES = new Set(["react", "react-dom", "next"]);

const REGISTRY_TYPES = {
    lib: "registry:lib",
    ui: "registry:ui",
    component: "registry:component",
    block: "registry:block",
};

/** Kept in sync with utils/slugify.tsx — the site's public slugs. */
function slugify(text) {
    return text
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]+/g, "")
        .replace(/-+/g, "-")
        .replace(/^-+|-+$/g, "");
}

/** `circularNavigation.tsx` → `circular-navigation`, `input.tsx` → `input`. */
function kebabCase(value) {
    return value
        .replace(/\.tsx?$/, "")
        .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
        .toLowerCase();
}

const registryItemUrl = (name) => `${SITE_URL}/r/${name}.json`;

/* ------------------------------------------------------------------ */
/* Data extraction                                                     */
/* ------------------------------------------------------------------ */

const readDataFile = async (file) => fs.readFile(path.join(ROOT, file), "utf8");

/**
 * The data files are plain, consistently formatted object literals, so we
 * segment them on `name:` anchors. This avoids pulling a TS toolchain into a
 * script. Anchors order matches the array order of the data file.
 */
function segmentOnNameAnchor(source) {
    const anchors = [...source.matchAll(/name:\s*"([^"]+)"/g)];
    return anchors.map((anchor, index) => {
        const segment = source.slice(
            anchor.index,
            index + 1 < anchors.length ? anchors[index + 1].index : source.length,
        );
        return { name: anchor[1], segment };
    });
}

async function readComponentsData() {
    return segmentOnNameAnchor(await readDataFile("data/componentsData.tsx")).map(
        ({ name, segment }) => ({
            name,
            description: segment.match(/supportLine:\s*"([^"]+)"/)?.[1],
            code: segment.match(/code:\s*"([^"]+)"/)?.[1],
            demoFiles: [...(segment.match(/demo:\s*\[([\s\S]*?)\]/)?.[1] ?? "")
                .matchAll(/"([^"]+)"/g)]
                .map((match) => match[1]),
        }),
    );
}

function readBlocksData(source) {
    return [...source.matchAll(/name:\s*'([^']+)',\s*path:\s*'([^']+)'/g)].map(
        ({ 1: name, 2: filePath }) => ({ name, path: filePath }),
    );
}

/* ------------------------------------------------------------------ */
/* Ownership & import analysis                                         */
/* ------------------------------------------------------------------ */

/**
 * Maps every registry source file path (`"ui/button.tsx"`) to the name of the
 * registry item that owns it. Components own their core ui file and demos;
 * blocks own their single file; primitives that no component inlines become
 * standalone items named after their kebab-cased file.
 */
async function buildOwnershipMap(components, blocks) {
    const ownerByFilePath = new Map();

    for (const component of components) {
        ownerByFilePath.set(`ui/${component.code}`, slugify(component.name));
        for (const demo of component.demoFiles) {
            ownerByFilePath.set(`components/${demo}`, slugify(component.name));
        }
    }
    for (const block of blocks) {
        ownerByFilePath.set(`blocks/${block.path}`, slugify(block.name));
    }

    const uiFiles = (await fs.readdir(path.join(REGISTRY_DIR, "ui")))
        .filter((file) => file.endsWith(".tsx") && !ownerByFilePath.has(`ui/${file}`));

    for (const file of uiFiles) {
        ownerByFilePath.set(`ui/${file}`, kebabCase(file));
    }

    return { ownerByFilePath, sharedUiFiles: uiFiles.sort() };
}

/** Extracts every `from "…"`, `import "…"` and `import("…")` specifier. */
function collectImportSpecifiers(content) {
    return [...content.matchAll(/(?:\bfrom\s+|\bimport\s*\(\s*)['"]([^'"]+)['"]/g)].map(
        (match) => match[1],
    );
}

/**
 * Classifies one import specifier:
 *  - `@/registry/default/…` → the owning item becomes a registryDependency
 *  - external package       → becomes a (package) dependency, excluding react/next
 *  - relative / aliased app imports / `next/*` → ignored
 */
function classifyImport(specifier, ownerByFilePath, dependencies, registryDependencies) {
    const internalMatch = specifier.match(/^@\/registry\/default\/(lib|ui|components|blocks)\/(.+)$/);

    if (internalMatch) {
        const [, kind, rawFilePath] = internalMatch;
        // Import specifiers from registry files omit the source extension;
        // ownership map keys carry it.
        const filePath = /\.[tj]sx?$/.test(rawFilePath) ? rawFilePath : `${rawFilePath}.tsx`;
        const ownerKey = `${kind}/`;
        const owner = kind === "lib" ? "utils" : ownerByFilePath.get(ownerKey + filePath);

        if (!owner) {
            throw new Error(`Unmapped registry import "${specifier}" — no item owns "${ownerKey}${filePath}"`);
        }
        registryDependencies.add(owner);
        return;
    }

    if (specifier.startsWith(".") || specifier.startsWith("@/")) return; // site-internal, never shipped
    if (IGNORED_PACKAGES.has(specifier) || specifier.startsWith("next/")) return; // platform: react, next

    const isScoped = specifier.startsWith("@");
    const packageName = isScoped
        ? specifier.split("/").slice(0, 2).join("/") // @radix-ui/react-slot
        : specifier.split("/")[0]; // framer-motion

    dependencies.add(packageName);
}

/* ------------------------------------------------------------------ */
/* Item construction                                                   */
/* ------------------------------------------------------------------ */

function itemFile(registryPath, type) {
    return { path: registryPath, type };
}

/**
 * Registry paths are DECLARED relative to the registry.json that contains the
 * item (a hard requirement of `shadcn build`), while ownership/analysis keys
 * are repo-relative (`"ui/button.tsx"`). This converts between the two.
 */
function declaredPath(repoRelativePath, declaringDir) {
    return path.posix.relative(path.posix.join(declaringDir, ""), path.posix.join("registry/default/", repoRelativePath));
}

function buildItem({ type, name, description, files, ownerByFilePath, declaringDir }) {
    const dependencies = new Set();
    const registryDependencies = new Set();

    for (const file of files) {
        const absolute = path.join(REGISTRY_DIR, file.path);
        if (!fsSync.existsSync(absolute)) {
            throw new Error(`Item "${name}" declares missing source file "${file.path}"`);
        }
        for (const specifier of collectImportSpecifiers(fsSync.readFileSync(absolute, "utf8"))) {
            classifyImport(specifier, ownerByFilePath, dependencies, registryDependencies);
        }
    }

    // Imports resolving to a file that this item inlines are internal — the
    // shadcn CLI rewrites them within the item itself; they must not be
    // advertised as cross-item dependencies (which would create a self-URL).
    registryDependencies.delete(name);

    return {
        name,
        type,
        ...(description ? { title: name, description } : {}),
        files: files.map((file) => ({
            path: path.posix.normalize(declaredPath(file.path, declaringDir)),
            type: file.type,
        })),
        ...(dependencies.size ? { dependencies: [...dependencies].sort() } : {}),
        ...(registryDependencies.size
            ? { registryDependencies: [...registryDependencies].sort().map(registryItemUrl) }
            : {}),
    };
}

/* ------------------------------------------------------------------ */
/* Entry point                                                         */
/* ------------------------------------------------------------------ */

async function main() {
    const [components, blocksSource] = await Promise.all([
        readComponentsData(),
        readDataFile("data/blocksData.tsx"),
    ]);
    const blocks = readBlocksData(blocksSource);

    const { ownerByFilePath, sharedUiFiles } = await buildOwnershipMap(components, blocks);

    const libItems = [
        buildItem({
            type: REGISTRY_TYPES.lib,
            name: "utils",
            files: [itemFile("lib/utils.ts", REGISTRY_TYPES.lib)],
            ownerByFilePath,
            declaringDir: "registry/default/lib",
        }),
    ];

    const uiItems = sharedUiFiles.map((file) =>
        buildItem({
            type: REGISTRY_TYPES.ui,
            name: kebabCase(file),
            files: [itemFile(`ui/${file}`, REGISTRY_TYPES.ui)],
            ownerByFilePath,
            declaringDir: "registry/default/ui",
        }),
    );

    const componentItems = components.map((component) =>
        buildItem({
            type: REGISTRY_TYPES.component,
            name: slugify(component.name),
            description: component.description,
            files: [
                itemFile(`ui/${component.code}`, REGISTRY_TYPES.ui),
                ...component.demoFiles.map((demo) =>
                    itemFile(`components/${demo}`, REGISTRY_TYPES.component),
                ),
            ],
            ownerByFilePath,
            declaringDir: "registry/default",
        }),
    );

    const blockItems = blocks.map((block) =>
        buildItem({
            type: REGISTRY_TYPES.block,
            name: slugify(block.name),
            files: [itemFile(`blocks/${block.path}`, REGISTRY_TYPES.block)],
            ownerByFilePath,
            declaringDir: "registry/default/blocks",
        }),
    );

    const registries = {
        "registry.json": {
            $schema: "https://ui.shadcn.com/schema/registry.json",
            name: "Voxlet UI",
            homepage: SITE_URL,
            include: [
                "registry/default/registry.json",
                "registry/default/lib/registry.json",
                "registry/default/ui/registry.json",
                "registry/default/blocks/registry.json",
            ],
        },
        "registry/default/lib/registry.json": {
            items: libItems,
        },
        "registry/default/ui/registry.json": {
            items: uiItems,
        },
        "registry/default/registry.json": {
            items: componentItems,
        },
        "registry/default/blocks/registry.json": {
            items: blockItems,
        },
    };

    for (const [file, registry] of Object.entries(registries)) {
        const destination = path.join(ROOT, file);
        await fs.mkdir(path.dirname(destination), { recursive: true });
        await fs.writeFile(destination, `${JSON.stringify(registry, null, 4)}\n`);
        console.log(`Wrote ${file}`);
    }

    const counts = {
        lib: libItems.length,
        ui: uiItems.length,
        components: componentItems.length,
        blocks: blockItems.length,
    };
    console.log(
        `Registry composed: ${counts.lib} lib, ${counts.ui} ui, ${counts.components} components, ${counts.blocks} blocks — ${Object.values(counts).reduce((sum, count) => sum + count, 0)} items.`,
    );
}

await main();

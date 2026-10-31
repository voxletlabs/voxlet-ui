import { promises as fs } from "fs";
import path from "path";

export type RegistryKind = "components" | "ui" | "blocks" | "lib";

/** Statically scoped per kind so Turbopack can trace the fs paths. */
const KIND_ABSOLUTE_BASE_PATH: Record<RegistryKind, string> = {
    components: path.join(process.cwd(), "registry", "default", "components"),
    ui: path.join(process.cwd(), "registry", "default", "ui"),
    blocks: path.join(process.cwd(), "registry", "default", "blocks"),
    lib: path.join(process.cwd(), "registry", "default", "lib"),
};

/**
 * Rewrites registry-internal aliases (`@/registry/default/…`) into the
 * consumer-facing aliases for code display in the docs.
 */
export function convertRegistryPaths(content: string): string {
    return content
        .replace(/@\/registry\/default\/ui/g, "@/components/ui")
        .replace(/@\/registry\/default\/components/g, "@/components")
        .replace(/@\/registry\/default\/hooks/g, "@/hooks")
        .replace(/@\/registry\/default\/lib/g, "@/lib");
}

/**
 * Reads a registry source file from disk (server-side only). Returns `null`
 * instead of throwing so callers can degrade gracefully.
 */
export async function readRegistrySource(kind: RegistryKind, filePath: string) {
    // turbopackIgnore: this read is intentionally dynamic (registry sources are
    // not a build input), so opt the runtime path out of project-wide fs tracing.
    const absolute = path.join(/*turbopackIgnore: true*/ KIND_ABSOLUTE_BASE_PATH[kind], filePath);

    try {
        return await fs.readFile(absolute, "utf8");
    } catch (error) {
        console.error(`Error reading registry source "${kind}/${filePath}":`, error);
        return null;
    }
}

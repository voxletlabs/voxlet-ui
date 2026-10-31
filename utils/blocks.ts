import { BlocksData } from "@/data/blocksData";
import { slugify } from "@/utils/slugify";

export interface BlockCategorySummary {
    name: string;
    slug: string;
    supportLine: string;
    imageUrl: string;
    blockCount: number;
}

export interface BlockSummary {
    name: string;
    slug: string;
    /** File path inside registry/default/blocks, e.g. `authentication/login-page-five.tsx`. */
    path: string;
    category: string;
    categorySlug: string;
    /** Showcase image: per-block when set, otherwise the category image. */
    imageUrl: string;
}

/** Blocks with `featured: true` always render ahead of the randomized rest. */
type OrderableBlock = BlockSummary & { featured?: boolean; dataOrderIndex?: number };

export interface BlockDetailSummary extends BlockSummary {
    /** Other blocks from the same category, excluding this one. */
    relatedBlocks: BlockSummary[];
}

/** Category chips for the blocks explorer: name, slug and block count. */
export function getBlockCategories(): BlockCategorySummary[] {
    return BlocksData.map((category) => ({
        name: category.categoryName,
        slug: slugify(category.categoryName),
        supportLine: category.supportLine,
        imageUrl: category.imageUrl,
        blockCount: category.blocks.length,
    }));
}

/**
 * Flat catalog of every block across categories, resolved to card data, in
 * display order: featured blocks first (data order), the rest deterministically
 * shuffled so the grid looks natural on every render — See
 * `orderBlocksForDisplay` for the ordering rules.
 *
 * Block names are unique across categories, so the block slug alone is
 * unambiguous — but URLs always carry the category for context.
 */
export function getAllBlocks(): BlockSummary[] {
    const catalog: OrderableBlock[] = BlocksData.flatMap((category) =>
        category.blocks.map((block) => ({
            name: block.name,
            slug: slugify(block.name),
            path: block.path,
            category: category.categoryName,
            categorySlug: slugify(category.categoryName),
            imageUrl: block.imageUrl ?? category.imageUrl,
            featured: block.featured,
            dataOrderIndex: BlocksData.indexOf(category) * 1000 + category.blocks.indexOf(block),
        })),
    );
    return orderBlocksForDisplay(catalog);
}

/** Resolves a block by its (globally unique) slug — used by the preview routes. */
export function findBlockBySlug(blockSlug: string): BlockSummary | undefined {
    return getAllBlocks().find((block) => block.slug === blockSlug);
}

/**
 * Resolves a URL pair (`categorySlug`/`blockSlug`) to the block detail plus
 * its related-blocks set (same category, excluding itself).
 */
export function findBlockDetail(categorySlug: string, blockSlug: string): BlockDetailSummary | undefined {
    const category = BlocksData.find((entry) => slugify(entry.categoryName) === categorySlug);
    if (!category) {
        return undefined;
    }

    const categoryIndex = BlocksData.indexOf(category);
    const toSummary = (block: { name: string; path: string; imageUrl?: string; featured?: boolean }): OrderableBlock => ({
        name: block.name,
        slug: slugify(block.name),
        path: block.path,
        category: category.categoryName,
        categorySlug,
        imageUrl: block.imageUrl ?? category.imageUrl,
        featured: block.featured,
        dataOrderIndex: categoryIndex * 1000 + category.blocks.indexOf(block),
    });

    const detail = category.blocks.map(toSummary).find((block) => block.slug === blockSlug);

    if (!detail) {
        return undefined;
    }

    return {
        ...detail,
        relatedBlocks: orderBlocksForDisplay(
            category.blocks.map(toSummary).filter((block) => block.slug !== detail.slug),
        ),
    };
}

export function getBlockHref(block: Pick<BlockSummary, "categorySlug" | "slug">): string {
    return `/blocks/${block.categorySlug}/${block.slug}`;
}

/**
 * Display ordering for card grids: featured blocks first (in data order), then
 * everything else in a shuffled order. The shuffle is seeded by the current UTC
 * date, so it changes daily but stays identical between the server render and
 * client hydration (a per-request random seed would break hydration).
 */
export function orderBlocksForDisplay<T extends OrderableBlock>(blocks: T[]): BlockSummary[] {
    const featured = blocks
        .filter((block) => block.featured === true)
        .sort(compareDataOrder);
    const rest = shuffleDeterministic(
        blocks.filter((block) => block.featured !== true).sort(compareDataOrder),
        getUtcDateSeed(),
    );

    return [...featured, ...rest].map(stripOrderMetadata);
}

function compareDataOrder(a: Pick<OrderableBlock, "dataOrderIndex">, b: Pick<OrderableBlock, "dataOrderIndex">) {
    return (a.dataOrderIndex ?? 0) - (b.dataOrderIndex ?? 0);
}

function stripOrderMetadata<T extends OrderableBlock>(block: T): BlockSummary {
    const { featured: _featured, dataOrderIndex: _index, ...summary } = block;
    return summary;
}

/** Stable seed derived from the UTC date, e.g. 2026-10-31 → 20261031. */
function getUtcDateSeed(): number {
    const now = new Date();
    return now.getUTCFullYear() * 10000 + (now.getUTCMonth() + 1) * 100 + now.getUTCDate();
}

function hashSeed(seed: number): number {
    let h = seed | 0;
    h = Math.imul(h ^ (h >>> 16), 2246822507);
    h = Math.imul(h ^ (h >>> 13), 3266489909);
    return (h ^= h >>> 16) >>> 0;
}

/** mulberry32 PRNG — small, fast, and fully deterministic for a given seed. */
function mulberry32(seed: number) {
    let state = seed >>> 0;
    return () => {
        state = (state + 0x6d2b79f5) | 0;
        let t = Math.imul(state ^ (state >>> 15), 1 | state);
        t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
}

/** Fisher-Yates shuffle driven by the seeded PRNG — never mutates the input. */
function shuffleDeterministic<T>(items: T[], seed: number): T[] {
    const shuffled = [...items];
    const random = mulberry32(hashSeed(seed));
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

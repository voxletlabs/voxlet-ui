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
    /** Showcase image — shared with the category as placeholder until dedicated block art exists. */
    imageUrl: string;
}

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
 * Flat catalog of every block across categories, resolved to card data.
 * Block names are unique across categories, so the block slug alone is
 * unambiguous — but URLs always carry the category for context.
 */
export function getAllBlocks(): BlockSummary[] {
    return BlocksData.flatMap((category) =>
        category.blocks.map((block) => ({
            name: block.name,
            slug: slugify(block.name),
            path: block.path,
            category: category.categoryName,
            categorySlug: slugify(category.categoryName),
            imageUrl: category.imageUrl,
        })),
    );
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

    const toSummary = (block: { name: string; path: string }): BlockSummary => ({
        name: block.name,
        slug: slugify(block.name),
        path: block.path,
        category: category.categoryName,
        categorySlug,
        imageUrl: category.imageUrl,
    });

    const detail = category.blocks.map(toSummary).find((block) => block.slug === blockSlug);

    if (!detail) {
        return undefined;
    }

    return {
        ...detail,
        relatedBlocks: category.blocks.map(toSummary).filter((block) => block.slug !== detail.slug),
    };
}

export function getBlockHref(block: Pick<BlockSummary, "categorySlug" | "slug">): string {
    return `/blocks/${block.categorySlug}/${block.slug}`;
}

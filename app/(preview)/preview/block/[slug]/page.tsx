import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlocksData } from "@/data/blocksData";
import { slugify } from "@/utils/slugify";
import PreviewBlockLoader from "@/components/block-preview-loader/server";

interface PreviewBlockPageProps {
    params: Promise<{ slug: string }>;
}

/**
 * Resolves a block slug (e.g. `login-page-five`) to its source path
 * (e.g. `authentication/login-page-five.tsx`). Block names are unique across
 * categories, so the slug alone is unambiguous.
 */
export function findBlockBySlug(slug: string) {
    return BlocksData.flatMap((category) => category.blocks)
        .find((block) => slugify(block.name) === slug);
}

export async function generateMetadata({ params }: PreviewBlockPageProps): Promise<Metadata> {
    const { slug } = await params;
    const block = findBlockBySlug(slug);

    return {
        title: block ? block.name : "Block Not Found",
        description: block ? `Full-page preview of the ${block.name} block.` : undefined,
        robots: { index: false, follow: false },
    };
}

/**
 * Full-page, chrome-free preview of a single block.
 */
export default async function PreviewBlockPage({ params }: PreviewBlockPageProps) {
    const { slug } = await params;

    const block = findBlockBySlug(slug);

    if (!block) {
        notFound();
    }

    return <PreviewBlockLoader blockName={block.path} />;
}

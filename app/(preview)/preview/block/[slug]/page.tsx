import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PreviewBlockLoader from "@/components/block-preview-loader/server";
import { findBlockBySlug } from "@/utils/blocks";

interface PreviewBlockPageProps {
    params: Promise<{ slug: string }>;
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

import { notFound } from "next/navigation";
import type { Metadata } from "next";
import BlockLoader from "@/components/blocks-loader/server";
import BlockCard from "@/components/block-card";
import { Badge } from "@/registry/default/ui/badge";
import { findBlockDetail } from "@/utils/blocks";

interface BlockDetailPageProps {
    params: Promise<{ slug: string; block: string }>;
}

export async function generateMetadata({ params }: BlockDetailPageProps): Promise<Metadata> {
    const { slug: categorySlug, block: blockSlug } = await params;
    const detail = findBlockDetail(categorySlug, blockSlug);

    if (!detail) {
        return {
            title: "Block Not Found - Voxlet UI Blocks",
            description: "The requested block does not exist in Voxlet UI Blocks.",
        };
    }

    return {
        title: `${detail.name} - Voxlet UI Blocks`,
        description: `Preview and grab the ${detail.name} block from the Voxlet UI ${detail.category} collection and ship it in your project.`,
    };
}

/**
 * Dedicated page for a single block: its Preview / Code loader, plus the
 * sibling blocks of the same category as "Related Blocks".
 */
export default async function BlockDetailPage({ params }: BlockDetailPageProps) {
    const { slug: categorySlug, block: blockSlug } = await params;

    const detail = findBlockDetail(categorySlug, blockSlug);

    if (!detail) {
        notFound();
    }

    return (
        <main className="px-4 max-w-[89rem] mx-auto pt-[6rem]">
            <header className="mb-6">
                <div className="flex flex-wrap items-center gap-3">
                    <h1 className="text-3xl font-bold">{detail.name}</h1>
                    <Badge variant="secondary">{detail.category}</Badge>
                </div>
            </header>

            <div className="mb-16">
                <BlockLoader blockName={detail.path} registryName={detail.slug} />
            </div>

            {detail.relatedBlocks.length > 0 && (
                <section className="pb-40">
                    <h2 className="text-2xl font-semibold mb-6">Related Blocks</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-12 items-start">
                        {detail.relatedBlocks.map((related) => (
                            <BlockCard key={related.slug} block={related} />
                        ))}
                    </div>
                </section>
            )}
        </main>
    );
}

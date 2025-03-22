import { notFound } from "next/navigation";
import { slugify } from "@/utils/slugify";
import BlockLoader from "@/components/blocks-loader/server";
import { BlocksData } from "@/data/blocksData";
import { Separator } from "@/registry/default/ui/separator";
import { Metadata } from "next";

interface BlocksPageProps {
    params: { slug: string };
}

export async function generateMetadata({ params }: BlocksPageProps): Promise<Metadata> {
    const { slug } = params;
    const category = BlocksData.find((category) => slugify(category.categoryName) === slug);

    if (!category) {
        return {
            title: "Category Not Found - Voxlet UI Blocks",
            description: "The requested category does not exist in Voxlet UI Blocks.",
        };
    }

    return {
        title: `${category.categoryName} Blocks - Voxlet UI Components`,
        description: `Explore a variety of ${category.categoryName} blocks in Voxlet UI Components to enhance your web development projects.`,
    };
}

export default function BlocksPage({ params }: BlocksPageProps) {
    const { slug } = params;

    const category = BlocksData.find((category) => slugify(category.categoryName) === slug);

    if (!category) {
        return notFound();
    }

    return (
        <main className="px-4 max-w-[85rem] mx-auto pt-[6rem]">
            <h1 className="text-3xl font-bold mb-3">{category.categoryName}</h1>
            <p className="text-lg mb-6 text-muted-foreground">
                A growing collection of {category.categoryName} Blocks.
            </p>
            <Separator className="mb-8" />

            <div className="flex flex-col gap-8 w-full">
                {category.blocks.map((block) => (
                    <div key={block.name} className="mb-8">
                        {/* <h2 className="text-2xl font-semibold mb-4">{block.name}</h2> */}
                        <BlockLoader blockName={block.path} />
                    </div>
                ))}
            </div>
        </main>
    );
}

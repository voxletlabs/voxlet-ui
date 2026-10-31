import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/registry/default/ui/badge";
import { BlockSummary, getBlockHref } from "@/utils/blocks";

interface BlockCardProps {
    block: BlockSummary;
}

/**
 * Catalog card for a single block: showcase image, name and a category badge.
 * Visually matches the block-category cards on the same page.
 */
export default function BlockCard({ block }: BlockCardProps) {
    return (
        <Link href={getBlockHref(block)} className="antialiased group" aria-label={`${block.name} block`}>
            <div className="relative dark:border rounded-lg dark:border-white/[0.1] overflow-hidden group-hover:shadow-xl transition duration-200 aspect-video flex items-center justify-center">
                <Image
                    alt={block.name}
                    loading="lazy"
                    width={720}
                    height={1024}
                    decoding="async"
                    className="transition duration-200 blur-0 rounded-md group-hover:scale-[1.02] object-cover h-full w-full"
                    src={block.imageUrl}
                    style={{ color: "transparent" }}
                />
            </div>
            <div className="mt-4 flex items-center justify-between gap-3">
                <p className="text-lg font-semibold dark:text-neutral-100 text-neutral-700">{block.name}</p>
                <Badge variant="secondary" className="shrink-0">
                    {block.category}
                </Badge>
            </div>
        </Link>
    );
}

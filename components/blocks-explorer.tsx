"use client";

import { useMemo, useState } from "react";
import { ScrollArea, ScrollBar } from "@/registry/default/ui/scroll-area";
import { Button } from "@/registry/default/ui/button";
import BlockCard from "@/components/block-card";
import { getAllBlocks, getBlockCategories } from "@/utils/blocks";

const ALL_FILTER = "all" as const;

interface FilterOption {
    slug: string;
    name: string;
    blockCount: number;
}

/**
 * The blocks catalog: a horizontally scrollable row of category filters,
 * followed by every matching block as a card. Defaults to all categories.
 */
export default function BlocksExplorer() {
    const filterOptions = useMemo<FilterOption[]>(
        () => [
            { slug: ALL_FILTER, name: "All", blockCount: getAllBlocks().length },
            ...getBlockCategories().map((category) => ({
                slug: category.slug,
                name: category.name,
                blockCount: category.blockCount,
            })),
        ],
        [],
    );

    const [activeFilter, setActiveFilter] = useState<string>(ALL_FILTER);

    const visibleBlocks = useMemo(
        () =>
            getAllBlocks().filter(
                (block) => activeFilter === ALL_FILTER || block.categorySlug === activeFilter,
            ),
        [activeFilter],
    );

    return (
        <div className="flex flex-col gap-8">
            <ScrollArea className="w-full whitespace-nowrap relative z-40 pb-1">
                <div className="flex gap-2 py-0.5">
                    {filterOptions.map((filter) => (
                        <Button
                            key={filter.slug}
                            variant={activeFilter === filter.slug ? "default" : "outline"}
                            size="sm"
                            className="rounded-full shrink-0"
                            aria-pressed={activeFilter === filter.slug}
                            onClick={() => setActiveFilter(filter.slug)}
                        >
                            {`${filter.name} (${filter.blockCount})`}
                        </Button>
                    ))}
                </div>
                <ScrollBar orientation="horizontal" />
            </ScrollArea>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12 items-start relative z-40">
                {visibleBlocks.map((block) => (
                    <BlockCard key={block.slug} block={block} />
                ))}

                {/* Kept from the original catalog: works as filler across all filter states. */}
                <ComingSoonCard />
            </div>
        </div>
    );
}

function ComingSoonCard() {
    return (
        <div className="antialiased h-full">
            <div className="aspect-video py-10 flex-col h-72 md:h-full w-full relative overflow-hidden rounded-lg dark:bg-black dark:border-white/[0.1] border border-transparent bg-gray-50 bg-dot-slate-200 dark:bg-dot-white/[0.1] flex items-center justify-center">
                <div className="text-4xl font-bold dark:text-neutral-200 text-neutral-700">
                    <span>Coming Soon</span>
                    <div className="opacity-20 absolute left-1/2 top-20 h-[1026px] w-[1026px] -translate-x-1/3 stroke-gray-300/70 [mask-image:linear-gradient(to_bottom,white_20%,transparent_45%)] sm:-translate-x-1/2 lg:ml-12 xl:ml-0">
                        <svg
                            viewBox="0 0 1026 1026"
                            fill="none"
                            aria-hidden="true"
                            className="absolute inset-0 h-full w-full animate-spin-slow"
                        >
                            <path
                                d="M1025 513c0 282.77-229.23 512-512 512S1 795.77 1 513 230.23 1 513 1s512 229.23 512 512Z"
                                stroke="#D4D4D4"
                                strokeOpacity="0.7"
                            ></path>
                            <path
                                d="M513 1025C230.23 1025 1 795.77 1 513"
                                stroke="url(#HjHDBiwesSxOeoLsWwT1b-gradient-1)"
                                strokeLinecap="round"
                            ></path>
                            <defs>
                                <linearGradient
                                    id="HjHDBiwesSxOeoLsWwT1b-gradient-1"
                                    x1="1"
                                    y1="513"
                                    x2="1"
                                    y2="1025"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#06b6d4"></stop>
                                    <stop offset="1" stopColor="#06b6d4" stopOpacity="0"></stop>
                                </linearGradient>
                            </defs>
                        </svg>
                        <svg
                            viewBox="0 0 1026 1026"
                            fill="none"
                            aria-hidden="true"
                            className="absolute inset-0 h-full w-full animate-spin-reverse-slower"
                        >
                            <path
                                d="M913 513c0 220.914-179.086 400-400 400S113 733.914 113 513s179.086-400 400-400 400 179.086 400 400Z"
                                stroke="#D4D4D4"
                                strokeOpacity="0.7"
                            ></path>
                            <path
                                d="M913 513c0 220.914-179.086 400-400 400"
                                stroke="url(#HjHDBiwesSxOeoLsWwT1b-gradient-2)"
                                strokeLinecap="round"
                            ></path>
                            <defs>
                                <linearGradient
                                    id="HjHDBiwesSxOeoLsWwT1b-gradient-2"
                                    x1="913"
                                    y1="513"
                                    x2="913"
                                    y2="913"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#06b6d4"></stop>
                                    <stop offset="1" stopColor="#06b6d4" stopOpacity="0"></stop>
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                </div>
                <p className="mt-2 text-base font-normal dark:text-neutral-300 text-neutral-600 px-8 text-center">
                    We are working hard to bring you more blocks. Bookmark this page to stay tuned!
                </p>
            </div>
        </div>
    );
}

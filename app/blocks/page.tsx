
import React from "react";
import Link from "next/link";
import { Separator } from "@/registry/default/ui/separator"
import { BlocksData } from "@/data/blocksData";
import Image from "next/image";
import { slugify } from "@/utils/slugify";


export default function BlocksPage() {
  return (
    <>
      <div className="px-4 max-w-[85rem] mx-auto pt-[4rem]">
        <section className="mx-auto flex flex-col items-start gap-2 py-8 md:py-12 md:pb-8 lg:py-12 lg:pb-10">
          <Link
            className="group inline-flex items-center px-0.5 text-sm font-medium"
            href="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-pie-chart h-4 w-4"
            >
              <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
              <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
            </svg>
            <div
              data-orientation="vertical"
              role="none"
              className="shrink-0 bg-border w-[1px] mx-2 h-4"
            ></div>
            <span className="underline-offset-4 group-hover:underline">
              Voxlet UI Blocks
            </span>
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-1 h-4 w-4"
            >
              <path
                d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>
          <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:leading-[1.1]">
            Building Blocks for the Web
          </h1>
          <p className="max-w-2xl text-lg font-light text-foreground">
            Beautifully designed. Copy and paste into your apps. Open Source.
          </p>
          <div className="flex w-full items-center justify-start gap-2 py-2">
            <Link
              href="/templates"
              className="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-8 rounded-md px-3 text-xs"
            >
              Browse Templates
            </Link>
            <Link
              href="/components"
              className="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs"
            >
              Browse Components
            </Link>
          </div>
        </section>
        <Separator className="mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-20 lg:gap-10 pb-40 items-start relative z-40">
          {BlocksData.map((blockCategory) => (
            <Link
              key={blockCategory.categoryName}
              href={`/blocks/${slugify(blockCategory.categoryName)}`}
              className="antialiased group"
            >
              <div className="relative dark:border rounded-lg dark:border-white/[0.1] overflow-hidden group-hover:shadow-xl transition duration-200 aspect-video flex items-center justify-center">
                <Image
                  alt={blockCategory.categoryName}
                  loading="lazy"
                  width={720}
                  height={1024}
                  decoding="async"
                  className="transition duration-300 blur-0 rounded-md group-hover:scale-105 object-cover h-full w-full"
                  src={blockCategory.imageUrl}
                  style={{ color: "transparent" }}
                />
              </div>
              <p className="text-xl font-bold mt-4 mb-2 dark:text-neutral-100 text-neutral-700">
                {blockCategory.categoryName}
              </p>
              <p className="mt-2 text-sm font-normal dark:text-neutral-300 text-neutral-500">
                {blockCategory.supportLine}
              </p>
            </Link>
          ))}
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
                        <stop
                          offset="1"
                          stopColor="#06b6d4"
                          stopOpacity="0"
                        ></stop>
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
                        <stop
                          offset="1"
                          stopColor="#06b6d4"
                          stopOpacity="0"
                        ></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
              <p className="mt-2 text-base font-normal dark:text-neutral-300 text-neutral-600 px-8 text-center">
                We are working hard to bring you more blocks. Bookmark
                this page to stay tuned!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
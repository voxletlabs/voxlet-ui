import React from "react";
import Link from "next/link";
import FadeAnimation from "@/components/ui/animations/fade";
import { Button } from "@/registry/default/ui/button";
import { Spotlight } from "@/components/ui/spotlight";
import { BorderTrail } from "@/components/ui/borderTrail";
import { templates } from "@/data/templatesData";
import { TemplateCard } from "@/components/TemplateCard";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: '🚀 Free Next.js & Tailwind CSS Templates | Voxlet UI',
    description: 'Get free, high-quality Next.js and Tailwind CSS templates from Voxlet UI. Speed up your web development with modern, responsive, and fully customizable templates. 🚀 Start building today!',
};

export default function TemplatesPage() {
    return (
        <>
            <div className='relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5'>
                <div>
                    <Spotlight
                        className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
                        fill="white"
                    />
                    <Spotlight
                        className="h-[80vh] w-[50vw] top-10 left-full"
                        fill="white"
                    />
                    <Spotlight className="left-80 top-28 h-[80vh] w-[50vw] scale-x-[-1]" fill="white" />
                </div>

                <div className="absolute bottom-[7rem] left-[50%] -translate-x-[50%] w-[200%] sm:w-full sm:max-w-[85rem] mx-auto">
                    <div className='relative w-full h-full rounded-full border-4 pointer-events-none aspect-square'>
                        <BorderTrail
                            style={{
                                boxShadow:
                                    "0px 0px 60px 30px rgb(255 255 255 / 50%), 0 0 100px 60px rgb(0 0 0 / 50%), 0 0 140px 90px rgb(0 0 0 / 50%)",
                            }}
                            size={100}
                            className="hidden dark:block"
                        />
                    </div>
                </div>

                <div className='absolute bottom-0 w-full h-16 bg-gradient-to-t from-background to-transperant pointer-events-none' />

                <div className='pt-[6rem] max-2xl:min-h-screen flex flex-col items-center jusity-center gap-5 z-[50] max-w-7xl mx-auto px-4'>
                    <FadeAnimation direction='fadeIn'>
                        <div className='relative border rounded-full'>
                            <BorderTrail
                                style={{
                                    boxShadow:
                                        "0px 0px 60px 30px rgb(255 255 255 / 50%), 0 0 100px 60px rgb(0 0 0 / 50%), 0 0 140px 90px rgb(0 0 0 / 50%)",
                                }}
                                size={100}
                                className="hidden dark:block"
                            />
                            <p className='px-4 py-1 text-center'>🚀 Voxlet UI Templates</p>
                        </div>
                    </FadeAnimation>
                    <FadeAnimation direction='fadeIn'>
                        <h1 className="text-4xl md:text-6xl max-w-2xl leading-snug font-semibold text-center">
                            Jumpstart with <br /> Voxlet Templates
                        </h1>
                    </FadeAnimation>
                    <FadeAnimation direction='fadeIn'>
                        <p className='text-md md:text-lg max-w-xl text-muted-foreground text-center'>
                            A collection of professionally designed templates to help you launch faster and build with confidence.
                        </p>
                    </FadeAnimation>
                    <FadeAnimation direction='fadeUp'>
                        <Link href={'#templates'}>
                            <Button className='rounded-lg md:scale-[1.1] my-1' size={'lg'}>
                                Browse Templates
                            </Button>
                        </Link>
                    </FadeAnimation>
                </div>
            </div>
            <div id="templates" className="mb-8 max-w-7xl mx-auto">
                <div className="px-4 py-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {templates.map((template) => (
                            <TemplateCard
                                key={template.slug}
                                template={template}
                            />
                        ))}
                    </div>
                </div>
                {/* <ComingSoon /> */}
            </div>
        </>
    );
}

// function ComingSoon() {

//     return (
//         <div className="flex shrink-0 items-center justify-center rounded-md border border-dashed h-[30vh] md:h-[50vh]">
//             <div className="mx-auto flex w-full flex-col items-center justify-center text-center">
//                 <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     className="h-10 w-10 text-muted-foreground"
//                     viewBox="0 0 24 24"
//                 >
//                     <circle cx="12" cy="11" r="1" />
//                     <path d="M11 17a1 1 0 0 1 2 0c0 .5-.34 3-.5 4.5a.5.5 0 0 1-1 0c-.16-1.5-.5-4-.5-4.5ZM8 14a5 5 0 1 1 8 0" />
//                     <path d="M17 18.5a9 9 0 1 0-10 0" />
//                 </svg>
//                 <h3 className="mt-4 text-lg font-semibold">Coming Soon</h3>
//                 <p className="mb-4 mt-2 text-sm text-muted-foreground max-w-md mx-auto">Templates will be available soon! 🚀 Bookmark this tab to stay tuned and be the first to explore them.</p>
//             </div>
//         </div>
//     );
// }
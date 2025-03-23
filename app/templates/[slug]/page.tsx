import { getTemplateBySlug, getOtherTemplates } from "@/data/templatesData"
import { Button } from "@/registry/default/ui/button"
import { TemplateCard } from "@/components/TemplateCard"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Clock, User, Award, MousePointerClick } from 'lucide-react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
} from "@/registry/default/ui/accordion"
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
import { CTA } from "@/components/Cta"
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const template = getTemplateBySlug(params.slug);

    if (!template) {
        return {
            title: "Template Not Found - Voxlet UI",
            description: "The template you are looking for does not exist.",
        };
    }

    return {
        title: `${template.name} – ${template.title} | Voxlet UI`,
        description: template.description,
        openGraph: {
            title: `${template.name} – ${template.title}`,
            description: template.description,
            url: `https://yourwebsite.com/templates/${template.slug}`,
            siteName: "Voxlet UI",
            images: template.images.length > 0 ? [{ url: template.images[0], width: 1200, height: 630, alt: template.name }] : [],
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: `${template.name} – ${template.title}`,
            description: template.description,
            images: template.images.length > 0 ? [template.images[0]] : [],
        },
    };
}


export default function TemplatePage({ params }: { params: { slug: string } }) {
    const template = getTemplateBySlug(params.slug)
    const otherTemplates = getOtherTemplates(params.slug)

    if (!template) {
        notFound()
    }

    return (
        <div className="min-h-screen">
            <div className="max-w-[85rem] mx-auto px-4 py-[6rem]">

                <nav className="flex items-center gap-2 text-sm font-semibold text-muted-foreground mb-8">
                    <Link href="/" className="hover:text-primary">Voxlet UI</Link>
                    <span>/</span>
                    <Link href="/templates" className="hover:text-primary">Templates</Link>
                    <span>/</span>
                    <span className="font-medium cursor-pointer hover:text-primary">{template.name}</span>
                </nav>

                <div className="max-w-3xl mb-6">
                    <h1 className="text-[2rem] font-[550] mb-4">{template.name} — {template.title}</h1>
                    <p className="text-muted-foreground text-[1.2rem]">{template.supportLine}</p>
                </div>

                <div className="flex gap-[0.625rem] mb-12">
                    {template.type === "free" && (
                        <Link href={template.githubUrl || ""} target="_blank">
                            <Button className="relative flex items-center justify-center gap-1.5 h-[34px] px-3 py-2 text-sm font-semibold leading-none text-white bg-[#09f] hover:bg-[#006EFF] border-none rounded-lg transition-colors duration-300 focus:outline-transparent focus:outline-2 focus:outline-offset-2 disabled:pointer-events-none disabled:cursor-auto disabled:opacity-50">
                                {template.githubUrl ? "View Github" : "Get for Free"}
                            </Button>
                        </Link>
                    )}
                    {template.type === "paid" && (
                        <Link href={template.paymentLink || ""} target="_blank">
                            <Button className="relative flex items-center justify-center gap-1.5 h-[34px] px-3 py-2 text-sm font-semibold leading-none text-white bg-[#09f] hover:bg-[#006EFF] border-none rounded-lg transition-colors duration-300 focus:outline-transparent focus:outline-2 focus:outline-offset-2 disabled:pointer-events-none disabled:cursor-auto disabled:opacity-50">
                                Purchase for {template.price}
                            </Button>
                        </Link>
                    )}
                    <Link href={template.previewUrl} target="_blank">
                        <Button className="relative flex items-center justify-center gap-1.5 h-[34px] px-3 py-2 text-sm font-semibold leading-none text-black bg-black/10 hover:bg-black/15 dark:text-white dark:bg-white/10 border-none rounded-lg transition-colors duration-300 dark:hover:bg-white/15 focus:outline-transparent focus:outline-2 focus:outline-offset-2 disabled:pointer-events-none disabled:cursor-auto disabled:opacity-50">
                            Preview
                        </Button>
                    </Link>
                </div>

                <div className="mx-auto max-w-[1440px] mt-10">
                    <div className="flex justify-between gap-5 border-t py-10 px-5">
                        <Link
                            href={template.creator.url}
                            target="_blank"
                            className="w-full md:max-w-[160px] transition-opacity hover:opacity-60"
                        >
                            <div className="flex flex-col items-center gap-3">
                                <div className="relative size-5 overflow-hidden rounded-[4px] bg-background">
                                    <Image
                                        alt={template.creator.name}
                                        loading="lazy"
                                        width={20}
                                        height={20}
                                        src={template.creator.avatar}
                                        className="absolute inset-0 z-10 size-full rounded-[4px] border border-white/10"
                                    />
                                </div>
                                <div className="text-[1rem] line-clamp-1 text-center font-[550] leading-[1.1]">
                                    {template.creator.name}
                                </div>
                                <div className="text-[0.85rem] font-medium leading-none text-muted-foreground">Creator</div>
                            </div>
                        </Link>

                        <div className="w-full md:max-w-[160px] cursor-default">
                            <div className="flex flex-col items-center gap-3">
                                <Clock className="size-5" />
                                <div className="text-[1rem] line-clamp-1 text-center font-[550] leading-[1.1]">
                                    <span className="">{template.releaseDate}</span>
                                </div>
                                <div className="text-[0.85rem] font-medium leading-none text-muted-foreground">Released</div>
                            </div>
                        </div>

                        <div className="w-full md:max-w-[160px] cursor-default">
                            <div className="flex flex-col items-center gap-3">
                                <MousePointerClick className="size-5" />
                                <div className="text-[1rem] line-clamp-1 text-center font-[550] leading-[1.1]">
                                    {template.usage}
                                </div>
                                <div className="text-[0.85rem] font-medium leading-none text-muted-foreground">Usage</div>
                            </div>
                        </div>

                        <Link href={template.license?.termsUrl || "#"} target={template.license?.termsUrl ? "_blank" : ""} className="w-full md:max-w-[160px] transition-opacity hover:opacity-60 hidden md:block">
                            <div className="flex flex-col items-center gap-3">
                                <Award className="size-5" />
                                <div className="text-[1rem] line-clamp-1 text-center font-[550] leading-[1.1]">
                                    {template.license?.type}
                                </div>
                                <div className="text-[0.85rem] font-medium leading-none text-muted-foreground">License</div>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
                    {template.images.map((image, index) => (
                        <div key={index} className="relative aspect-video rounded-lg overflow-hidden bg-muted-foreground">
                            <Image
                                src={image}
                                alt={`${template.title} preview ${index + 1}`}
                                fill
                                className="object-cover"
                            />
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-[1fr,300px] gap-12 lg:gap-20 mb-20">
                    <div>
                        <div className="mb-12">
                            <p className="text-muted-foreground text-lg max-w-3xl">
                                {template.description}
                            </p>
                        </div>

                        <div className="mb-12">
                            <h2 className="text-xl font-semibold mb-6">Features</h2>
                            <Accordion type="single" collapsible className="w-full space-y-4">
                                <Accordion type="single" collapsible className="w-full space-y-2">
                                    {template.features.map((feature) => (
                                        <AccordionItem
                                            value={feature.title}
                                            key={feature.title}
                                            className="rounded-lg border bg-background px-4 py-1"
                                        >
                                            <AccordionPrimitive.Header className="flex">
                                                <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between py-2 text-left text-[15px] font-semibold leading-6 transition-all [&>svg>path:last-child]:origin-center [&>svg>path:last-child]:transition-all [&>svg>path:last-child]:duration-200 [&[data-state=open]>svg>path:last-child]:rotate-90 [&[data-state=open]>svg>path:last-child]:opacity-0 [&[data-state=open]>svg]:rotate-180">
                                                    {feature.title}
                                                    <Plus
                                                        size={16}
                                                        strokeWidth={2}
                                                        className="shrink-0 opacity-60 transition-transform duration-200"
                                                        aria-hidden="true"
                                                    />
                                                </AccordionPrimitive.Trigger>
                                            </AccordionPrimitive.Header>
                                            <AccordionContent className="pb-2 text-muted-foreground">
                                                {feature.description}
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </Accordion>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div>
                            <h3 className="text-sm font-bold mb-4">Categories</h3>
                            <div className="flex flex-wrap gap-2">
                                {template.categories.map((category, index) => (
                                    <Button key={index} size={'sm'} variant={'secondary'} className="flex select-none items-center space-x-1.5 whitespace-nowrap rounded-md px-2 py-1 text-sm font-semibold leading-[1.6] shadow-[rgba(0,0,0,0.05)0px_2px_8px_0px] transition-all duration-300 hover:opacity-80 md:text-sm dark:bg-secondary/70 dark:hover:bg-secondary/60">
                                        {category}
                                    </Button>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-sm font-bold mb-4">Pages</h3>
                            <div className="flex flex-wrap gap-1">
                                {template.pages.map((page, index) => (
                                    <p key={index} className="text-sm text-muted-foreground capitalize">
                                        {page}
                                        {index < template.pages.length - 1 && ','}
                                    </p>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-sm font-bold mb-4">Tech Stack</h3>
                            <div className="flex flex-wrap gap-2">
                                {template.techStack.map((item, index) => (
                                    <Button key={index} size={'sm'} variant={'secondary'} className="flex select-none items-center space-x-1.5 whitespace-nowrap rounded-md px-2 py-1 text-sm font-semibold leading-[1.6] shadow-[rgba(0,0,0,0.05)0px_2px_8px_0px] transition-all duration-300 hover:opacity-80 md:text-sm dark:bg-secondary/70 dark:hover:bg-secondary/60">
                                        {item}
                                    </Button>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-sm font-bold mb-4">Support</h3>
                            <div className="space-y-4">
                                <a href="mailto:contact.voxlet@gmail.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:opacity-80">
                                    <User className="w-4 h-4" />
                                    Email Us
                                </a>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-sm font-bold mb-4">Need a custom website?</h3>
                            <p className="text-sm text-muted-foreground">
                                <Link href="https://voxlet.vercel.app" target="_blank" className="underline font-medium hover:text-black dark:hover:text-white">
                                    Voxlet
                                </Link>{" "}
                                specializes in crafting innovative, scalable, and high-performance digital solutions tailored to your unique needs.{" "}
                                <Link href="https://cal.com/muhammadkaifnazeer/video-call-meeting" target="_blank" className="underline font-medium hover:text-black dark:hover:text-white">
                                    Book a Call
                                </Link>{" "}
                                today to discuss your project!
                            </p>
                        </div>

                    </div>
                </div>

                {otherTemplates.length > 0 && (
                    <div className="border-t pt-16">
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-2xl font-semibold">More Templates</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {otherTemplates.map((template) => (
                                <TemplateCard
                                    key={template.slug}
                                    template={template}
                                />
                            ))}
                        </div>
                    </div>
                )}

                <CTA />
            </div>
        </div>
    )
}

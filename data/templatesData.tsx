import { Template } from "@/types/template"

export const templates: Template[] = [
    {
        slug: "voxlet-ui-docs",
        name: "Voxlet UI Docs",
        title: "Documentation Template",
        supportLine: "Voxlet UI Docs is a premium, fully customizable template for building beautiful and functional documentation websites. Perfect for products, APIs, or personal projects, it offers a sleek, modern design and user-friendly interface.",
        description: "Voxlet UI Docs is a premium, fully customizable documentation template designed to help you build beautiful and functional documentation websites. Perfect for products, APIs, or personal projects, this template offers a sleek, modern design with a user-friendly interface. It’s built with Next.js, TypeScript, and Tailwind CSS, ensuring fast performance, scalability, and responsiveness across all devices.",
        type: "free",
        images: [
            "https://github.com/voxletlabs/voxlet-ui-docs/blob/main/public/ScreenShots/docs-page.png?raw=true",
            "https://github.com/voxletlabs/voxlet-ui-docs/blob/main/public/ScreenShots/landing-page.png?raw=true",
            "https://github.com/voxletlabs/voxlet-ui-docs/blob/main/public/ScreenShots/searching.png?raw=true",
            "https://github.com/voxletlabs/voxlet-ui-docs/blob/main/public/ScreenShots/search.png?raw=true",
            "https://github.com/voxletlabs/voxlet-ui-docs/blob/main/public/ScreenShots/installation.png?raw=true",
            "https://github.com/voxletlabs/voxlet-ui-docs/blob/main/public/ScreenShots/button.png?raw=true",
            "https://github.com/voxletlabs/voxlet-ui-docs/blob/main/public/ScreenShots/button-code.png?raw=true",
        ],
        creator: {
            name: "Muhammad Kaif Nazeer",
            avatar: "https://avatars.githubusercontent.com/u/122388541?v=4",
            url: "https://muhammadkaifnazeer.vercel.app",
        },
        categories: [
            "Documentation",
            "Frontend",
        ],
        usage: "Documentation",
        pages: [
            "Landing Page", "Dynamic Documentation Pages",
        ],
        features: [
            {
                title: "Lightning-Fast Setup",
                description:
                    "Get started in minutes with a streamlined setup process designed to jumpstart your documentation.",
            },
            {
                title: "Fully Customizable Design",
                description:
                    "Tailor every detail with ease—Voxlet UI Docs adapts to your brand’s unique style and needs.",
            },
            {
                title: "Built with Next.js and TypeScript",
                description:
                    "Leverage modern frameworks for a fast, scalable, and reliable documentation experience.",
            },
            {
                title: "Responsive and Mobile-Friendly",
                description:
                    "Enjoy seamless usability across all devices, so your docs look great on any screen size.",
            },
            {
                title: "Optimized for SEO",
                description:
                    "Boost discoverability with SEO-ready pages to make your documentation easy to find and access.",
            },
            {
                title: "Fuma Docs Integration",
                description:
                    "Effortlessly organize and navigate content with Fuma Docs—built to make complex docs simple.",
            },
        ],
        techStack: [
            "React", "Next.js", "TypeScript", "Tailwind CSS", "Fuma Docs",
        ],
        releaseDate: "22 March 2025",
        license: {
            type: "MIT License",
            termsUrl: "https://github.com/voxletlabs/voxlet-ui-docs/blob/main/LICENSE",
        },
        previewUrl: "https://voxlet-ui-docs.vercel.app/",
        githubUrl: "https://github.com/voxletlabs/voxlet-ui-docs"
    },
]

export function getTemplateBySlug(slug: string): Template | undefined {
    return templates.find(template => template.slug === slug)
}

export function getOtherTemplates(currentSlug: string): Template[] {
    return templates.filter(template => template.slug !== currentSlug)
}

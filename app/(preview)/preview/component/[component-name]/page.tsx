import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ComponentsData } from "@/data/componentsData";
import { slugify } from "@/utils/slugify";
import PreviewComponentLoader from "@/components/component-preview-loader/server";

interface PreviewComponentPageProps {
    params: Promise<{ "component-name": string }>;
}

/**
 * Renders metadata for the full-page preview of a single component. Previews are
 * utility pages and must never be indexed.
 */
export async function generateMetadata({ params }: PreviewComponentPageProps): Promise<Metadata> {
    const { "component-name": componentSlug } = await params;
    const component = ComponentsData.find((item) => slugify(item.name) === componentSlug);

    return {
        title: component ? component.name : "Component Not Found",
        description: component?.supportLine,
        robots: { index: false, follow: false },
    };
}

/**
 * Full-page, chrome-free preview of a component. Stacks every registered demo
 * of the component so power users can inspect it without site chrome.
 */
export default async function PreviewComponentPage({ params }: PreviewComponentPageProps) {
    const { "component-name": componentSlug } = await params;

    const component = ComponentsData.find((item) => slugify(item.name) === componentSlug);

    if (!component) {
        notFound();
    }

    const demoFiles = Array.isArray(component.demo) ? component.demo : [];

    if (demoFiles.length === 0) {
        return <p className="text-sm text-muted-foreground">No demo registered for this component.</p>;
    }

    return <PreviewComponentLoader demoFiles={demoFiles} />;
}

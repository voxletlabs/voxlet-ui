import { notFound } from "next/navigation";
import { slugify } from "@/utils/slugify";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/registry/default/ui/table";
import { ComponentsData } from "@/data/componentsData";
import ComponentLoader from "@/components/component-loader/server";
import InstallationTabs from "@/components/installation-tabs";
import { convertRegistryPaths, readRegistrySource } from "@/utils/registry-source";
import { getComponentPreviewUrl } from "@/utils/site";
import Link from "next/link";
import { Metadata } from "next";

interface ComponentPageProps {
    params: Promise<{ "component-name": string }>;
}

const findComponentBySlug = (slug: string) => ComponentsData.find(
    (component) => slugify(component.name) === slug
);

export async function generateMetadata({ params }: { params: Promise<{ 'component-name': string }> }): Promise<Metadata> {
    const { 'component-name': componentNameSlug } = await params;

    const component = findComponentBySlug(componentNameSlug);

    if (!component) {
        return {
            title: 'Component Not Found - Voxlet UI',
            description: 'The requested component could not be found in the Voxlet UI library.',
        };
    }

    return {
        title: `${component.name} - Voxlet UI`,
        description: component.supportLine,
    };
}

const UTILS_FILE_CODE = `import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}`;

export default async function ComponentPage({ params }: ComponentPageProps) {
    const { "component-name": componentNameSlug } = await params;

    const component = findComponentBySlug(componentNameSlug);

    if (!component) {
        return notFound();
    }

    const sourceContent = await readRegistrySource("ui", component.code);

    if (!sourceContent) {
        return notFound();
    }

    const demoComponents = Array.isArray(component.demo) ? component.demo : [];
    const previewHref = getComponentPreviewUrl(componentNameSlug);

    return (
            <main className="flex flex-col items-start justify-center min-h-screen pt-[2rem]">
                <h1 className="text-3xl font-bold mb-2">{component.name}</h1>

                <p className="text-lg mb-4 text-muted-foreground">{component.supportLine}</p>

                {demoComponents.map((path) => (
                    <div className="mb-4 w-full" key={path}>
                        <ComponentLoader componentName={path} previewHref={previewHref} />
                    </div>
                ))}

                <section className="mb-8 w-full">
                    <h2 className="text-2xl font-semibold mb-4">Installation</h2>
                    <InstallationTabs
                        itemName={componentNameSlug}
                        importPath={`@/components/ui/${component.code}`}
                        sourceCode={convertRegistryPaths(sourceContent)}
                        dependencies={component.dependencies}
                        utilsFileCode={component.cnUtilsFIle ? UTILS_FILE_CODE : undefined}
                    />
                </section>

                <section className="w-full">
                    {component.typesTable?.length && component.typesTable.length > 1 && (
                        <h2 className="text-2xl font-semibold mb-4">Props</h2>
                    )}
                    {component.typesTable?.map((typeTable, index) => (
                        <div key={index} className="mb-8">
                            <h2 className="text-xl font-semibold mb-4">{typeTable.title}</h2>
                            <Table>
                                <TableHeader>
                                    <TableRow className="*:border-border md:*:p-4 hover:bg-transparent [&>:not(:last-child)]:border-r">
                                        <TableHead className="w-[150px]">Prop</TableHead>
                                        <TableHead>Type</TableHead>
                                        <TableHead>Default</TableHead>
                                        <TableHead>Description</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody className="[&_td:first-child]:rounded-l-lg [&_td:last-child]:rounded-r-lg">
                                    {typeTable.table.map((row, rowIndex) => (
                                        <TableRow key={rowIndex} className="*:border-border hover:bg-transparent [&>:not(:last-child)]:border-r md:*:p-4">
                                            <TableCell className="font-medium">{row.prop}</TableCell>
                                            <TableCell>{row.type}</TableCell>
                                            <TableCell>{row.default}</TableCell>
                                            <TableCell>{row.description}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    ))}
                </section>
                {component.credit && (
                    <div className="mt-4 mb-12">
                        <p className="text-md">{component.credit.message} <Link href={component.credit.link.url} target="_blank" className="underline font-bold">{component.credit.link.text}</Link></p>
                    </div>
                )}
            </main>
        );
}

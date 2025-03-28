import { notFound } from "next/navigation";
import { slugify } from "@/utils/slugify";
import { CodeBlock } from "@/components/code-block";
import CopyButton from "@/components/copy-button";
import { readComponentCoreCode } from "@/components/read-source";
import { Step, Steps } from "@/registry/default/ui/steps";
import { ComponentsData } from "@/data/componentsData";
import ComponentLoader from "@/components/component-loader/server";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/registry/default/ui/table";
import Link from "next/link";
import { Metadata } from "next";

interface ComponentPageProps {
    params: { "component-name": string };
}

export async function generateMetadata({ params }: { params: { 'component-name': string } }): Promise<Metadata> {
    const { 'component-name': componentNameSlug } = params;

    const component = ComponentsData.find(
        (component) => slugify(component.name) === componentNameSlug
    );

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

const convertRegistryPaths = (content: string): string => {
    return content
        .replace(/@\/registry\/default\/ui/g, "@/components/ui")
        .replace(/@\/registry\/default\/components/g, "@/components")
        .replace(/@\/registry\/default\/hooks/g, "@/hooks")
        .replace(/@\/registry\/default\/lib/g, "@/lib");
};

export default async function ComponentPage({ params }: ComponentPageProps) {
    const { "component-name": componentNameSlug } = params;

    const component = ComponentsData.find(
        (component) => slugify(component.name) === componentNameSlug
    );

    if (!component) {
        return notFound();
    }

    const source = convertRegistryPaths((await readComponentCoreCode(component.code)) || "");
    const utilFileCode = `import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
    
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}`
    try {
        return (
            <main className="flex flex-col items-start justify-center min-h-screen pt-[2rem]">
                <h1 className="text-3xl font-bold mb-2">{component.name}</h1>

                <p className="text-lg mb-4 text-muted-foreground">{component.supportLine}</p>

                {component.demo.map((path) => (
                    <div className="mb-4 w-full" key={path}>
                        <ComponentLoader componentName={path} />
                    </div>
                ))}

                <section className="mb-8 w-full">
                    <h2 className="text-2xl font-semibold mb-4">Installation</h2>
                    <Steps>

                        {component.dependencies?.map((dep, index) => (
                            <Step key={index} title={dep.title}>
                                <div className="relative min-w-full mt-4">
                                    <CodeBlock lang="bash">{dep.command}</CodeBlock>
                                    <CopyButton componentSource={dep.command} />
                                </div>
                            </Step>
                        ))}
                        {component.cnUtilsFIle ? (
                            <Step title="lib/utils.ts">
                                <div className="relative min-w-full mt-4">
                                    <CodeBlock lang="tsx">{utilFileCode}</CodeBlock>
                                    <CopyButton componentSource={utilFileCode} />
                                </div>
                            </Step>
                        ) : null}
                        <Step title="Copy the source code">
                            <code className="bg-muted text-primary text-md py-1 px-2 mt-4 rounded-md">@/components/ui/{component.code}</code>
                            <div className="relative min-w-full mt-4">
                                <CodeBlock lang="tsx">{source}</CodeBlock>
                                <CopyButton componentSource={source} />
                            </div>
                        </Step>
                    </Steps>
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
    } catch (error) {
        console.log(error)
        return notFound();
    }
}

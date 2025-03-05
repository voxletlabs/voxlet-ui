import { ComponentType } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/registry/default/ui/tabs";
import { CodeBlock } from "@/components/code-block";
import CopyButton from "@/components/copy-button";
import { readBlockSource, readComponentSource } from "@/components/read-source";
import { cn } from "@/registry/default/lib/utils";
import ClientBlockLoader from "./client";

interface BlockLoaderProps {
    blockName: string;
    className?: string;
}

const convertRegistryPaths = (content: string): string => {
    return content
        .replace(/@\/registry\/default\/ui/g, "@/components/ui")
        .replace(/@\/registry\/default\/components/g, "@/components")
        .replace(/@\/registry\/default\/hooks/g, "@/hooks")
        .replace(/@\/registry\/default\/lib/g, "@/lib");
};

export default async function BlockLoader({ blockName, className }: BlockLoaderProps) {
    try {
        const source = convertRegistryPaths((await readBlockSource(blockName)) || "");

        let Block: ComponentType<any> | null = null;
        try {
            Block = (await import(`@/registry/default/blocks${blockName}`)).default as ComponentType<any>;
        } catch (error) {
            console.warn(`Failed to load ${blockName} as a server block. Using client loader instead.`);
        }

        return (
            <div className={cn("group/item", className)}>
                <Tabs defaultValue="preview" className="w-full">
                    <TabsList>
                        <TabsTrigger value="preview">Preview</TabsTrigger>
                        <TabsTrigger value="code">Code</TabsTrigger>
                    </TabsList>
                    <TabsContent value="preview">
                        <div className="p-4 border rounded-lg">
                            {Block ? <Block /> : <ClientBlockLoader blockName={blockName} />}
                        </div>
                    </TabsContent>
                    <TabsContent value="code" className="w-full max-w-[85rem] mx-auto">
                        <div className="relative w-full">
                            <CodeBlock lang="tsx">{source}</CodeBlock>
                            <CopyButton componentSource={source} />
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        );
    } catch (error) {
        console.error(`Error loading block ${blockName}:`, error);
        return null;
    }
}

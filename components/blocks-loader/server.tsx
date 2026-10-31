import { ComponentType } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/registry/default/ui/tabs";
import { CodeBlock } from "@/components/code-block";
import CopyButton from "@/components/copy-button";
import PreviewButton from "@/components/preview-button";
import { convertRegistryPaths, readRegistrySource } from "@/utils/registry-source";
import { getBlockPreviewUrl, getRegistryAddCommand } from "@/utils/site";
import { cn } from "@/registry/default/lib/utils";
import ClientBlockLoader from "./client";

interface BlockLoaderProps {
    blockName: string;
    className?: string;
    /** Registry slug of the block, e.g. `login-page-five`. Opt-in flow: CLI command + preview button. */
    registryName?: string;
}

export default async function BlockLoader({ blockName, className, registryName }: BlockLoaderProps) {
    const sourceContent = await readRegistrySource("blocks", blockName);

    if (!sourceContent) {
        return null;
    }

    const source = convertRegistryPaths(sourceContent);
    const cliCommand = registryName ? getRegistryAddCommand(registryName) : null;

    let Block: ComponentType<unknown> | null = null;
    try {
        Block = (await import(`@/registry/default/blocks/${blockName}`)).default as ComponentType<unknown>;
    } catch (error) {
        console.warn(`Failed to load ${blockName} as a server block. Using client loader instead. Error: ${error}`);
    }

    return (
        <div className={cn("group/item", className)}>
            <Tabs defaultValue="preview" className="w-full">
                <div className="flex w-full items-center justify-between">
                    <TabsList>
                        <TabsTrigger value="preview">Preview</TabsTrigger>
                        <TabsTrigger value="code">Code</TabsTrigger>
                    </TabsList>
                    {registryName ? <PreviewButton href={getBlockPreviewUrl(registryName)} /> : null}
                </div>
                <TabsContent value="preview">
                    <div className="p-4 border rounded-lg">
                        {Block ? <Block /> : <ClientBlockLoader blockName={blockName} />}
                    </div>
                </TabsContent>
                <TabsContent value="code" className="w-full max-w-[85rem] mx-auto">
                    {cliCommand ? (
                        <div className="mb-6">
                            <p className="text-sm font-medium mb-2">Install with CLI</p>
                            <div className="relative w-full">
                                <CodeBlock lang="bash">{cliCommand}</CodeBlock>
                                <CopyButton componentSource={cliCommand} />
                            </div>
                        </div>
                    ) : null}
                    <p className="text-sm font-medium mb-2">Manual</p>
                    <div className="relative w-full">
                        <CodeBlock lang="tsx">{source}</CodeBlock>
                        <CopyButton componentSource={source} />
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );
}

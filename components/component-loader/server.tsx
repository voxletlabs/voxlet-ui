import { ComponentType } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/registry/default/ui/tabs";
import { CodeBlock } from "@/components/code-block";
import CopyButton from "@/components/copy-button";
import PreviewButton from "@/components/preview-button";
import { convertRegistryPaths, readRegistrySource } from "@/utils/registry-source";
import { cn } from "@/registry/default/lib/utils";
import ClientComponentLoader from "./client";

interface ComponentLoaderProps {
  componentName: string;
  className?: string;
  /** URL of the chrome-free full-page preview; renders the maximize button when provided. */
  previewHref?: string;
}

export default async function ComponentLoader({ componentName, className, previewHref }: ComponentLoaderProps) {
  const sourceContent = await readRegistrySource("components", componentName);

  if (!sourceContent) {
    return null;
  }

  const source = convertRegistryPaths(sourceContent);

  let Component: ComponentType<unknown> | null = null;
  try {
    Component = (await import(`@/registry/default/components/${componentName}`)).default as ComponentType<unknown>;
  } catch (error) {
    console.warn(`Failed to load ${componentName} as a server component. Using client loader instead. Error: ${error}`);
  }

  return (
    <div className={cn("group/item", className)}>
      <Tabs defaultValue="preview" className="w-full">
        <div className="flex w-full items-center justify-between">
          <TabsList>
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
          </TabsList>
          {previewHref ? <PreviewButton href={previewHref} /> : null}
        </div>
        <TabsContent value="preview">
          <div className="p-4 border rounded-lg">
            {Component ? <Component /> : <ClientComponentLoader componentName={componentName} />}
          </div>
        </TabsContent>
        <TabsContent value="code">
          <div className="relative min-w-[40rem]">
            <CodeBlock lang="tsx">{source}</CodeBlock>
            <CopyButton componentSource={source} />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

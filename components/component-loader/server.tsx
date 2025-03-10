import { ComponentType } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/registry/default/ui/tabs";
import { CodeBlock } from "@/components/code-block";
import CopyButton from "@/components/copy-button";
import { readComponentSource } from "@/components/read-source";
import { cn } from "@/registry/default/lib/utils";
import ClientComponentLoader from "./client";

interface ComponentLoaderProps {
  componentName: string;
  className?: string;
}

const convertRegistryPaths = (content: string): string => {
  return content
    .replace(/@\/registry\/default\/ui/g, "@/components/ui")
    .replace(/@\/registry\/default\/components/g, "@/components")
    .replace(/@\/registry\/default\/hooks/g, "@/hooks")
    .replace(/@\/registry\/default\/lib/g, "@/lib");
};

export default async function ComponentLoader({ componentName, className }: ComponentLoaderProps) {
  try {
    const source = convertRegistryPaths((await readComponentSource(componentName)) || "");

    let Component: ComponentType<unknown> | null = null;
    try {
      Component = (await import(`@/registry/default/components/${componentName}`)).default as ComponentType<unknown>;
    } catch (error) {
      console.warn(`Failed to load ${componentName} as a server component. Using client loader instead. Error: ${error}`);
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
  } catch (error) {
    console.error(`Error loading component ${componentName}:`, error);
    return null;
  }
}

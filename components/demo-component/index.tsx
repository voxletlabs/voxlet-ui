import { cn } from "@/registry/default/lib/utils";
import { ComponentType } from "react";
import { CodeBlock } from "@/components/code-block";
import CopyButton from "@/components/copy-button";
import { readComponentSource } from "@/components/read-source";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/registry/default/ui/tabs";

const convertRegistryPaths = (content: string): string => {
  return content
    .replace(/@\/registry\/default\/ui/g, "@/components/ui")
    .replace(/@\/registry\/default\/components/g, "@/components")
    .replace(/@\/registry\/default\/hooks/g, "@/hooks")
    .replace(/@\/registry\/default\/lib/g, "@/lib");
};

interface DemoComponentBaseProps {
  componentName: string;
  className?: string;
}

export default async function DemoComponent<TProps extends object>({
  componentName,
  className,
  ...props
}: DemoComponentBaseProps & TProps) {
  const Component = (await import(`@/registry/default/components/${componentName}`))
    .default as ComponentType<TProps>;
  const source = convertRegistryPaths((await readComponentSource(componentName)) || "");

  return (
    <div className={cn("group/item", className)}>
      <Tabs defaultValue="preview" className="w-full">
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
        <TabsContent value="preview">
          <div className="p-4 border rounded-lg">
            <Component {...(props as TProps)} />
          </div>
        </TabsContent>
        <TabsContent value="code">
          <div className="relative min-w-[40rem]">
            <CodeBlock lang="tsx">{source}</CodeBlock>
            <CopyButton componentSource={source} />
          </div>
        </TabsContent>
      </Tabs>

      {/* <div className="absolute right-2 top-2 flex gap-2">
        <ComponentDetails name={componentName}>
          
        </ComponentDetails>
      </div> */}
    </div>
  );
}

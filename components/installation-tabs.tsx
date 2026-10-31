import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/registry/default/ui/tabs";
import { CodeBlock } from "@/components/code-block";
import CopyButton from "@/components/copy-button";
import { Step, Steps } from "@/registry/default/ui/steps";
import { getRegistryAddCommand } from "@/utils/site";

interface InstallationTabsProps {
    /** Registry slug of the item, e.g. `magic-wand`. */
    itemName: string;
    /** Consumer-facing import path shown in the Manual tab, e.g. `@/components/ui/magic-wand`. */
    importPath: string;
    /** Converted source code displayed in the Manual tab. */
    sourceCode: string;
    /** Manual dependency steps, straight from the component data. */
    dependencies?: { title: string; command: string }[];
    /** Content of the optional `lib/utils.ts` step shown in the Manual tab. */
    utilsFileCode?: string;
}

/**
 * The Installation section of a component page: a CLI tab with the one-shot
 * `shadcn` command backed by this site's registry, and a Manual tab with the
 * classic copy-the-source flow.
 */
export default function InstallationTabs({
    itemName,
    importPath,
    sourceCode,
    dependencies,
    utilsFileCode,
}: InstallationTabsProps) {
    const cliCommand = getRegistryAddCommand(itemName);

    return (
        <Tabs defaultValue="cli" className="w-full">
            <TabsList>
                <TabsTrigger value="cli">CLI</TabsTrigger>
                <TabsTrigger value="manual">Manual</TabsTrigger>
            </TabsList>

            <TabsContent value="cli">
                <p className="text-sm text-muted-foreground mb-3">
                    Install this component and its dependencies with a single command.
                </p>
                <div className="relative min-w-full">
                    <CodeBlock lang="bash">{cliCommand}</CodeBlock>
                    <CopyButton componentSource={cliCommand} />
                </div>
                <p className="mt-3 text-xs text-muted-foreground">
                    Once your project registers the{" "}
                    <code className="bg-muted rounded px-1 py-0.5">@voxlet</code> namespace, this also
                    works: <code className="bg-muted rounded px-1 py-0.5">npx shadcn@latest add @voxlet/{itemName}</code>
                </p>
            </TabsContent>

            <TabsContent value="manual">
                <Steps>
                    {dependencies?.map((dependency, index) => (
                        <Step key={`${dependency.command}-${index}`} title={dependency.title}>
                            <div className="relative mt-4 min-w-full">
                                <CodeBlock lang="bash">{dependency.command}</CodeBlock>
                                <CopyButton componentSource={dependency.command} />
                            </div>
                        </Step>
                    ))}
                    {utilsFileCode ? (
                        <Step title="lib/utils.ts">
                            <div className="relative mt-4 min-w-full">
                                <CodeBlock lang="tsx">{utilsFileCode}</CodeBlock>
                                <CopyButton componentSource={utilsFileCode} />
                            </div>
                        </Step>
                    ) : null}
                    <Step title="Copy the source code">
                        <code className="bg-muted text-primary text-md py-1 px-2 rounded-md">{importPath}</code>
                        <div className="relative mt-4 min-w-full">
                            <CodeBlock lang="tsx">{sourceCode}</CodeBlock>
                            <CopyButton componentSource={sourceCode} />
                        </div>
                    </Step>
                </Steps>
            </TabsContent>
        </Tabs>
    );
}

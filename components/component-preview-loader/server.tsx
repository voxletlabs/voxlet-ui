import { ComponentType } from "react";
import RegistryItemError from "@/components/registry-item-error";

interface PreviewComponentLoaderProps {
  /** Demo file references, as listed in the component data, e.g. `magic-wand/usage.tsx`. */
  demoFiles: string[];
}

/**
 * Renders the actual demo components of a registry item, chrome-free.
 *
 * Each demo section spans the full viewport width and centers its content
 * vertically, so widgets (navbars, buttons, ...) sit where they would on a
 * real site while the page itself stays 100% wide.
 */
export default async function PreviewComponentLoader({ demoFiles }: PreviewComponentLoaderProps) {
  const items = await Promise.all(
    demoFiles.map(async (demoFile) => {
      try {
        const Demo = (await import(`@/registry/default/components/${demoFile}`)).default as ComponentType<unknown>;
        return { id: demoFile, Demo, importError: null as Error | null };
      } catch (error) {
        return { id: demoFile, Demo: null, importError: error as Error };
      }
    }),
  );

  const loaded = items.filter((item) => item.Demo !== null);

  if (loaded.length === 0) {
    return <RegistryItemError />;
  }

  return (
    <div className="flex w-full flex-col">
      {loaded.map(({ id, Demo }) => (
        <section key={id} className="flex w-full min-h-dvh items-center justify-center py-12">
          <Demo />
        </section>
      ))}
    </div>
  );
}

import { ComponentType } from "react";
import RegistryItemErrorState from "@/components/registry-item-error";

interface PreviewComponentLoaderProps {
  /** Demo file references, as listed in the component data, e.g. `magic-wand/usage.tsx`. */
  demoFiles: string[];
}

/**
 * Renders the actual demo components of a registry item, stacked and chrome-free.
 * Used by the full-page preview routes in app/(preview).
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
    return <RegistryItemErrorState />;
  }

  return (
    <div className="flex w-full flex-col items-center gap-16 py-8">
      {loaded.map(({ id, Demo }) => (
        <section key={id} className="flex w-full items-center justify-center">
          <Demo />
        </section>
      ))}
    </div>
  );
}

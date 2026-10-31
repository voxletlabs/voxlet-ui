import { ComponentType } from "react";
import RegistryItemError from "@/components/registry-item-error";

interface PreviewBlockLoaderProps {
  /** Block file reference, e.g. `authentication/login-page-five.tsx`. */
  blockName: string;
}

/**
 * Renders a registry block full-page and chrome-free.
 * Used by the full-page preview routes in app/(preview).
 */
export default async function PreviewBlockLoader({ blockName }: PreviewBlockLoaderProps) {
  let Block: ComponentType<unknown> | null = null;

  try {
    Block = (await import(`@/registry/default/blocks/${blockName}`)).default as ComponentType<unknown>;
  } catch (error) {
    console.warn(`Failed to load block "${blockName}" for full-page preview.`, error);
  }

  if (!Block) {
    return <RegistryItemError itemName={blockName} />;
  }

  // Blocks are self-contained compositions and span the full page width.
  return (
    <div className="w-full">
      <Block />
    </div>
  );
}

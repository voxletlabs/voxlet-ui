interface RegistryItemErrorProps {
  /** Human-readable name of the item that failed to render. */
  itemName?: string;
}

/**
 * Minimal failure state used by full-page previews when a registry item cannot
 * be loaded or rendered.
 */
export default function RegistryItemError({ itemName }: RegistryItemErrorProps) {
  return (
    <div className="flex min-h-dvh w-full flex-col items-center justify-center gap-2 px-4 text-center">
      <p className="text-lg font-semibold">Preview unavailable</p>
      <p className="text-sm text-muted-foreground">
        {itemName
          ? `"${itemName}" could not be loaded. It may have been removed from the registry.`
          : "This item could not be loaded from the registry."}
      </p>
    </div>
  );
}

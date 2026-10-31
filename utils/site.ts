/**
 * Central site & registry constants.
 * Used by sitemap, robots, metadata and the CLI install commands that we render in the docs UI.
 */
export const SITE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? "https://ui.voxletstudio.com";

export const REGISTRY_BASE_PATH = "/r";

/** URL of a single registry item's JSON payload served from this site. */
export function getRegistryItemUrl(itemName: string): string {
  return `${SITE_URL}${REGISTRY_BASE_PATH}/${itemName}.json`;
}

/** The `shadcn add` command a user runs to install a registry item of this site. */
export function getRegistryAddCommand(itemName: string): string {
  return `npx shadcn@latest add ${getRegistryItemUrl(itemName)}`;
}

/** Fluid full-page preview URLs (rendered in app/(preview)). */
export function getComponentPreviewUrl(itemName: string): string {
  return `/preview/component/${itemName}`;
}

export function getBlockPreviewUrl(itemName: string): string {
  return `/preview/block/${itemName}`;
}

import Link from "next/link";
import { Maximize2Icon } from "lucide-react";
import { Button } from "@/registry/default/ui/button";

interface PreviewButtonProps {
    /** Full-page (chrome-free) preview URL of the item. */
    href: string;
}

/**
 * Opens the full-page preview of a registry item in a new tab. Rendered at the
 * opposite side of the Preview / Code tabs triggers.
 */
export default function PreviewButton({ href }: PreviewButtonProps) {
    return (
        <Button
            asChild
            variant="ghost"
            size="icon"
            className="size-8 text-muted-foreground hover:text-foreground"
            title="Open full-page preview"
        >
            <Link href={href} target="_blank" rel="noopener noreferrer">
                <Maximize2Icon aria-hidden />
                <span className="sr-only">Open full-page preview</span>
            </Link>
        </Button>
    );
}

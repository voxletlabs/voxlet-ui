"use client";

import React from "react";
import {
  SearchIcon,
} from "lucide-react";
import { Button } from "../../registry/default/ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/registry/default/ui/command";
import { ScrollArea } from "@/registry/default/ui/scroll-area";
import Navigation from "@/data/Navigation";
import { useRouter } from "next/navigation";
import { cn } from "@/registry/default/lib/utils";

export function SearchCommand() {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
        if (
          (e.target instanceof HTMLElement && e.target.isContentEditable) ||
          e.target instanceof HTMLInputElement ||
          e.target instanceof HTMLTextAreaElement ||
          e.target instanceof HTMLSelectElement
        ) {
          return;
        }

        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false);
    command();
  }, []);

  return (
    <>
      {/* Search bar for larger screens */}
      <Button
        variant="outline"
        className={cn(
          "hidden md:flex relative h-8 my-auto w-full items-center justify-start rounded-[0.5rem] bg-muted/50 text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-40 lg:w-56 xl:w-64"
        )}
        onClick={() => setOpen(true)}
      >
        <span className="hidden lg:inline-flex">Search documentation...</span>
        <span className="inline-flex lg:hidden">Search...</span>
        <kbd className="pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>

      {/* Search icon for mobile screens */}
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden"
        onClick={() => setOpen(true)}
      >
        <SearchIcon className="w-4 h-4" />
      </Button>

      {/* Command dialog */}
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search..." />
        <CommandList>
          <ScrollArea className="h-[18.5rem]">
            <CommandEmpty>No results found.</CommandEmpty>
            {Navigation.map((group, index) => (
              <React.Fragment key={group.title}>
                <CommandGroup heading={group.title}>
                  {group.links.map((link) => (
                    <CommandItem
                      key={link.title}
                      onSelect={() => {
                        runCommand(() => router.push(link.href as string));
                      }}
                    >
                      <group.icon className="mr-2" />
                      <span>{link.title}</span>
                    </CommandItem>
                  ))}
                </CommandGroup>
                {index !== Navigation.length - 1 && <CommandSeparator />}
              </React.Fragment>
            ))}
          </ScrollArea>
        </CommandList>
      </CommandDialog>
    </>
  );
}

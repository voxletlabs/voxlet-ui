"use client";

import dynamic from "next/dynamic";
import { LoaderCircleIcon } from "lucide-react";
import { ComponentType } from "react";

interface ClientBlockLoaderProps {
  blockName: string;
}

export default function ClientBlockLoader({ blockName }: ClientBlockLoaderProps) {
  const Block = dynamic(() => import(`@/registry/default/blocks/${blockName}`).catch(() => () => null), {
    loading: () => (
      <div className="flex min-h-20 items-center justify-center">
        <LoaderCircleIcon className="animate-spin" size={24} />
      </div>
    ),
    ssr: false,
  }) as ComponentType<unknown>;

  return <Block />;
}

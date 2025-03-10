"use client";

import dynamic from "next/dynamic";
import { LoaderCircleIcon } from "lucide-react";
import { ComponentType } from "react";

interface ClientComponentLoaderProps {
  componentName: string;
}

export default function ClientComponentLoader({ componentName }: ClientComponentLoaderProps) {
  const Component = dynamic(() => import(`@/registry/default/components/${componentName}`).catch(() => () => null), {
    loading: () => (
      <div className="flex min-h-20 items-center justify-center">
        <LoaderCircleIcon className="animate-spin" size={24} />
      </div>
    ),
    ssr: false,
  }) as ComponentType<unknown>;

  return <Component />;
}

import type { ReactNode } from "react";
import Sidebar from "@/components/Sidebar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="bg-background pt-[5rem]">
        <div className="max-w-[100rem] mx-auto px-4 flex-1 items-start lg:grid lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
          <Sidebar />
          <div>{children}</div>
        </div>
      </div>
    </>
  );
}
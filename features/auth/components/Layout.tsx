import React from "react";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto flex h-dvh">
      <div className="hidden w-[50%] bg-dark xmd:block"></div>
      <div className="mx-auto flex items-center justify-center">
        <div className=" rounded-md border-2 p-8 xmd:border-none">
          {children}
        </div>
      </div>
    </div>
  );
}

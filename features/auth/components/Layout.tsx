import React from "react";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto flex h-full">
      <div className="bg-dark xmd:block hidden w-[50%]"></div>
      <div className="mx-auto flex w-[50%] items-center justify-center">
        <div className=" xmd:border-none rounded-md border-2 p-8">
          {children}
        </div>
      </div>
    </div>
  );
}

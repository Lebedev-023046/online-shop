"use client";

import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";

import { SearchAreaProvider } from "@/contexts/SearctArea";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <SearchAreaProvider>
        <Toaster position="bottom-center" />
        {children}
      </SearchAreaProvider>
    </SessionProvider>
  );
}

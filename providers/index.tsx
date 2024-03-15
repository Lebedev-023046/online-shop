"use client";

import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";

import { HeaderExpandProvider } from "@/contexts/ExpandHeader";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <HeaderExpandProvider>
        <Toaster position="bottom-center" />
        {children}
      </HeaderExpandProvider>
    </SessionProvider>
  );
}

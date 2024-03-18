"use client";

import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";

import { CartProvider } from "@/contexts/CartContext";
import { SearchAreaProvider } from "@/contexts/SearctAreaContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <CartProvider>
        <SearchAreaProvider>
          <Toaster position="bottom-center" />
          {children}
        </SearchAreaProvider>
      </CartProvider>
    </SessionProvider>
  );
}

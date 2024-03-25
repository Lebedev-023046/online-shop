"use client";

import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";

import { CartProvider } from "@/contexts/CartContext";
import { OrderProvider } from "@/contexts/OrderContext";
import { SearchAreaProvider } from "@/contexts/SearctAreaContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <CartProvider>
        <OrderProvider>
          <SearchAreaProvider>
            <Toaster position="bottom-center" />
            {children}
          </SearchAreaProvider>
        </OrderProvider>
      </CartProvider>
    </SessionProvider>
  );
}

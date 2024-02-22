"use client";

import { BackgroundProvider } from "@/contexts/background";
import { ThemeProvider } from "@material-tailwind/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <BackgroundProvider>{children}</BackgroundProvider>
    </ThemeProvider>
  );
}

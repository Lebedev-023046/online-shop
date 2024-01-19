import { ThemeProvider } from "@material-tailwind/react";

export function Provider({ children }: { children: React.ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}

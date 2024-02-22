"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useBackgroundContext } from "@/contexts/background";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isBackgroundActive } = useBackgroundContext();
  return (
    <div
      className={`flex min-h-full flex-col ${isBackgroundActive ? "overflow-hidden" : "overflow-auto"}`}
    >
      <Header />
      <main className="grow">{children}</main>
      <Footer />
    </div>
  );
}

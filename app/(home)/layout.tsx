"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-full flex-col">
      <Header />
      <main className="grow">{children}</main>
      <Footer />
    </div>
  );
}

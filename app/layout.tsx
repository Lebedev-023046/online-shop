import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Providers } from "@/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MAZY | Главная страница",
  description:
    "MAZY - ваш новый любимый интернет-магазин модной одежды! У нас вы найдете лучший выбор стильной и качественной одежды для всех возрастов и размеров.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-full flex-col">
          <Providers>
            <Header />
            <main className="mx-auto my-[2%] w-[95%] grow">{children}</main>
            <Footer />
          </Providers>
        </div>
      </body>
    </html>
  );
}

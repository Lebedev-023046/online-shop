import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";

import { Providers } from "@/providers";
import "./globals.css";

const Open_Sans_font = Open_Sans({
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
  weight: ["300", "400", "500", "700"],
});

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
      <body className={`${Open_Sans_font.className} h-full`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

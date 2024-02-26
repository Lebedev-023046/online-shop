"use client";

import { ContentRaws, Hero } from "@/features/home";

export default function Home() {
  return (
    <div className="mx-auto">
      <Hero />
      <ContentRaws />
    </div>
  );
}

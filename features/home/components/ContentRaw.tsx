import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Card } from "@/components/Card";

export function ContentRaw() {
  return (
    <div className="my-8">
      <div className="mb-3 flex justify-between">
        <div>Костюмы</div>
        <Link href={`/categories`} className="relative flex gap-1">
          <div className="pseudo-underline before:duration-0">
            Все{" "}
            <Image
              className="inline"
              src="/right-stroke.svg"
              width={8}
              height={8}
              alt="stroke"
            />
          </div>
        </Link>
      </div>
      <div className="content-raw-children grid items-center gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {Array(4)
          .fill(null)
          .map((_, i) => (
            <Card key={i} />
          ))}
      </div>
    </div>
  );
}

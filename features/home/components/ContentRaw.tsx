import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Card } from "@/components/Card";
import { Product } from "@/prisma/generated";

import { CategoryHref, CategoryName } from "../constants";

interface Props {
  headerInfo: {
    categoryName: CategoryName;
    categoryHref: CategoryHref;
  };
  products: Product[];
}

export function ContentRaw({ headerInfo, products }: Props) {
  const { categoryName, categoryHref } = headerInfo;

  console.log("products", products);

  return (
    <div className="my-8">
      <div className="mb-3 flex justify-between">
        <div>{categoryName}</div>
        <Link
          href={`/category/${categoryHref}`}
          className="relative flex gap-1"
        >
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
      <div className="content-raw-children grid items-start gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product, i) => (
          <Card product={product} key={i} />
        ))}
      </div>
    </div>
  );
}

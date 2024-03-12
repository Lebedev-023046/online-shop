"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Product } from "@/prisma/generated";

interface Props {
  product: Product;
}

export function Card({ product }: Props) {
  const { id, name, price, productImage } = product;

  return (
    <div className="card relative mx-auto w-full overflow-hidden rounded-lg">
      <Link href={`/products/${id}`}>
        <button
          title="Добавить в корзину"
          className="absolute right-3 top-3 z-10"
        >
          <Image
            className="img"
            src="/card-bag.svg"
            alt="card-bag-icon"
            width={24}
            height={24}
          />
        </button>

        <div className="relative">
          <Image
            className="aspect-[3/4]  w-full  object-cover"
            src={productImage}
            alt="product-img"
            width={225}
            height={300}
          />
        </div>

        <div className="p-2 text-center">
          <div className="mb-1 font-medium">{name}</div>
          <div className="font-bold">{price}</div>
        </div>
      </Link>
    </div>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

import { useCartContext } from "@/contexts/CartContext";
import { useSearchAreaContext } from "@/contexts/SearctAreaContext";
import { Product } from "@/prisma/generated";

interface Props {
  product: Product;
  isSearchArea?: boolean;
}

export function Card({ product, isSearchArea }: Props) {
  const { id, name, price, productImage } = product;

  const { updateShouldSearchAreaOpen } = useSearchAreaContext();

  const placeholderImage = "/default-product-img.webp";

  const onImageError = (e: any) => {
    e.target.src = placeholderImage;
  };

  return (
    <div
      onClick={() => updateShouldSearchAreaOpen(false)}
      className={`card text-dark ${isSearchArea ? "text-xs" : "text-base"} relative mx-auto w-full overflow-hidden rounded-lg`}
    >
      <Link href={`/products/${id}`}>
        <div className="relative">
          <Image
            className="aspect-[3/4] w-full object-cover"
            src={productImage}
            alt="product-img"
            width={225}
            height={300}
            onError={onImageError}
          />
        </div>

        <div className="p-4 text-center">
          <div className="mb-1 font-medium">
            {/* First letter with upper case */}
            {name[0].toUpperCase() + name.slice(1)}
          </div>
          <div className="mb-1 font-bold">{price} BYN</div>
          {/* {isSearchArea ? null : (
            <button className="rounded-md bg-soft px-3 py-2 duration-200 hover:bg-pink-50">
              Добавить в корзину
            </button>
          )} */}
        </div>
      </Link>
    </div>
  );
}

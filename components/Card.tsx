"use client";

import { Tooltip } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export function Card() {
  return (
    <div className="card relative mx-auto w-full overflow-hidden rounded-lg">
      <Link href="/products/1">
        <Tooltip
          className="bg-soft text-dark"
          content="Добавить в корзину"
          placement="left-start"
        >
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
        </Tooltip>

        <div className="relative">
          <Image
            className="aspect-[3/4] w-full"
            src="/hero-image.jpg"
            alt="hero-img"
            width={225}
            height={300}
          />
        </div>
        <div className="p-2 text-center">
          <div className="mb-1 font-medium">Костюм женский серый</div>
          <div className="font-bold">148 BYN</div>
        </div>
      </Link>
    </div>
  );
}

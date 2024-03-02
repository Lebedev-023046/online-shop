"use client";

import Image from "next/image";
import React, { useState } from "react";

import { Select } from "@/components/Select";

export function CartItem() {
  const [amountOfProductItems, setAmountOfProductItems] = useState<string>("1");

  return (
    <div className="py-8">
      <div className="grid auto-rows-auto grid-cols-cart-content justify-items-end gap-4 md:grid-cols-cart-content-md [&>div:nth-child(1)]:mr-auto [&>div:nth-child(2)]:mr-auto [&>div:nth-child(4)]:hidden md:[&>div:nth-child(4)]:block">
        <Image
          className="w-full"
          src="/hero-image.jpg"
          alt="product-image"
          width={100}
          height={100}
        />
        <div className="flex w-full max-w-40 flex-col justify-between p-2">
          <div className="font-medium">Коричневый костюм</div>
          <div>
            Размер: <span className="font-bold text-dark">S</span>
          </div>
          <button className="text-nowrap text-left text-gray-700">
            Удалить из корзины
          </button>
        </div>

        <div>
          <Select
            options={["1", "2", "3", "4"]}
            value={amountOfProductItems}
            updateValue={setAmountOfProductItems}
          />
        </div>
        <div>148 BYN</div>
        <div>{+amountOfProductItems * 148} BYN</div>
      </div>
    </div>
  );
}

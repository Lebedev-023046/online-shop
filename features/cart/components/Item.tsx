"use client";

import Image from "next/image";
import React, { useCallback, useState } from "react";

import { Select } from "@/components/Select";
import { OptionType } from "@/types/Select";
import { toReactSelectOption } from "@/utils";

export function CartItem() {
  const [amountOfProductItems, setAmountOfProductItems] = useState<OptionType>(
    toReactSelectOption<string>("1"),
  );

  const updateProductNumber = useCallback(
    (value: OptionType) => setAmountOfProductItems(value),
    [],
  );

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

        <div className="">
          <Select
            value={amountOfProductItems}
            updateValue={updateProductNumber}
            options={["1", "2", "3", "4"]}
          />
        </div>
        <div>148 BYN</div>
        <div>{+amountOfProductItems.value * 148} BYN</div>
      </div>
    </div>
  );
}

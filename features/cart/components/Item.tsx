"use client";

import { Option, Select } from "@material-tailwind/react";
import Image from "next/image";
import React, { useState } from "react";

export function CartItem() {
  const [amountOfProductItems, setAmountOfProductItems] = useState<string>("1");

  return (
    <div className="py-8">
      <div className="grid-cols-cart-content md:grid-cols-cart-content-md grid auto-rows-auto justify-items-end gap-4 [&>div:nth-child(1)]:mr-auto [&>div:nth-child(2)]:mr-auto [&>div:nth-child(4)]:hidden md:[&>div:nth-child(4)]:block">
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
            containerProps={{
              className: "min-w-[4rem]",
            }}
            value={amountOfProductItems}
            onChange={value => setAmountOfProductItems(value ?? "1")}
          >
            {["1", "2", "3", "4"].map((amount, i) => (
              <Option value={amount} key={i}>
                {amount}
              </Option>
            ))}
          </Select>
        </div>
        <div>148 BYN</div>
        <div>{+amountOfProductItems * 148} BYN</div>
      </div>
    </div>
  );
}

"use client";

import { Option, Select } from "@material-tailwind/react";
import Image from "next/image";
import React from "react";

export function CartItem() {
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
            defaultValue="1"
            className="min-w-4"
          >
            {["1", "2", "3", "4"].map((size, i) => (
              <Option key={i}>{size}</Option>
            ))}
          </Select>
        </div>
        <div>148 BYN</div>
        <div>148 BYN</div>
      </div>
    </div>
  );
}

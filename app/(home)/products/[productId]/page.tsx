"use client";

import { Option, Select } from "@material-tailwind/react";
import Image from "next/image";
import React, { useState } from "react";

export default function ProductDetails() {
  const [selectedSize, setSelectedSize] = useState<string>("S");

  return (
    <div className="mx-auto w-[95%] py-8">
      <div className="mx-auto flex w-[80%]  flex-col justify-center gap-8 md:w-full md:flex-row">
        <div className="order-2 md:order-none">
          <Image
            className="img mx-auto"
            src="/hero-image.jpg"
            width={400}
            height={600}
            alt="product-details-image"
          />
        </div>
        <section className="">
          <h1 className="text-2xl font-bold">Серый костюм женский</h1>
          <p className="text-gray-500">Артикул: BY2022M</p>
          <p className="mt-4 text-2xl font-bold">148 BYN</p>
          <Select
            containerProps={{ className: "mt-6" }}
            value={selectedSize}
            label="Размер"
            onChange={val => setSelectedSize(val ?? "S")}
          >
            {["XS", "S", "M", "L"].map((size, i) => (
              <Option value={size} key={i}>
                {size}
              </Option>
            ))}
          </Select>
          <button className="button mt-8 bg-dark text-soft">
            Добавить в корзину
          </button>
        </section>
      </div>
    </div>
  );
}

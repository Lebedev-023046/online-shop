"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

import { useCartContext } from "@/contexts/CartContext";

import { CartItem } from "./Item";

export function Items() {
  const { cart } = useCartContext();
  return (
    <div className="p-8">
      {cart.length !== 0 ? (
        <>
          <div className="text-nowrap grid  grid-cols-cart-content justify-items-end gap-4 text-gray-600 md:grid-cols-cart-content-md [&>div:nth-child(1)]:mr-auto [&>div:nth-child(4)]:hidden md:[&>div:nth-child(4)]:block">
            <div className="">Детали продукта</div>
            <div></div>
            <div>Количество</div>
            <div>Цена</div>
            <div>Всего</div>
          </div>
          {cart.map(item => (
            <CartItem item={item} key={item.id} />
          ))}
        </>
      ) : (
        <>
          <div className="text-2xl font-medium">Корзина пуста</div>

          <div className="mt-2 flex gap-1">
            <Image
              className="w-2 rotate-180"
              src="/right-stroke.svg"
              alt="arrow-left"
              width={16}
              height={16}
            />

            <Link className="pseudo-underline relative" href="/">
              Вернуться в каталог
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

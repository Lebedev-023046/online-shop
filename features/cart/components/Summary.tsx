"use client";

import Link from "next/link";
import React from "react";

import { useCartContext } from "@/contexts/CartContext";

export function Summary() {
  const { cart } = useCartContext();

  const totalPrice = cart.reduce((acc, item) => {
    return (acc += item.qty_in_cart * item.product.price);
  }, 0);

  return (
    <div className="">
      <div className="border-b-2 px-4 py-8 text-2xl font-bold">Итог</div>
      <section className="w-full px-4 py-8">
        <div className="flex">
          <div>Количество товаров:</div>
          <div className="ml-auto">{cart.length}</div>
        </div>
        <div className="flex">
          <div>Общая цена:</div>
          <div className="ml-auto">{totalPrice} BYN</div>
        </div>
        <Link
          className="mt-8 block overflow-hidden rounded-md  bg-dark  px-6 py-2"
          href="/order"
        >
          <button className="w-full  text-soft outline-none">
            Перейти к оформлению заказа
          </button>
        </Link>
      </section>
    </div>
  );
}

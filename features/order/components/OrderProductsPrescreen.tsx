"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import { useCartContext } from "@/contexts/CartContext";
import { CartItem } from "@/features/cart";

export function OrderProductsPrescreen() {
  const { cart } = useCartContext();
  const [cartState, setCartState] = useState<CartItem[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    const price = cart.reduce((acc, item) => {
      return acc + item.product.price * item.qty_in_cart;
    }, 0);
    setTotalPrice(price);
  }, [cart]);

  useEffect(() => {
    setCartState(cart);
  }, [cart]);

  return (
    <div>
      <div className="border-b-2">
        <section className="mb-6 h-64 overflow-y-auto [&>div+div]:pt-4">
          {cartState.length !== 0 ? (
            cartState.map(item => (
              <section key={item.id} className="mb-4 flex gap-4">
                <div className="w-1/3">
                  <Image
                    className="img"
                    src={item.product.productImage}
                    alt="order-image"
                    width={200}
                    height={300}
                  />
                </div>
                <section className="flex w-2/3 flex-col">
                  <h1 className="text-xl font-medium tracking-wider">
                    {item.product.name}
                  </h1>
                  <p className="font-medium text-gray-700">
                    {item.product.color}{" "}
                    <span className="font-bold">&middot;</span> {item.size}{" "}
                    <span className="font-bold">&middot;</span> x
                    {item.qty_in_cart}{" "}
                  </p>
                  <p className="pt-4 font-bold">
                    {item.product.price * item.qty_in_cart} BYN
                  </p>
                </section>
              </section>
            ))
          ) : (
            <>
              <div className="text-xl font-medium">Корзина пуста</div>

              <Link className="pseudo-underline relative" href="/">
                Вернуться в каталог
              </Link>
            </>
          )}
        </section>
      </div>
      <div className="pt-4">
        Стоимость всего заказа: <span className="font-bold">{totalPrice}</span>{" "}
        BYN
      </div>
    </div>
  );
}

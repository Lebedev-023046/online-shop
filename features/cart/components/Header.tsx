"use client";

import React, { useEffect, useState } from "react";

import { useCartContext } from "@/contexts/CartContext";

import { morph } from "../utils/morph";

export function Header() {
  const { cart } = useCartContext();

  const [itemsInCart, setItemsInCart] = useState<number>(0);

  useEffect(() => {
    const itemsQty = cart.reduce((acc, item) => acc + item.qty_in_cart, 0);
    setItemsInCart(itemsQty);
  }, [cart]);
  return (
    <header className="flex justify-between gap-4 border-b-2 p-8">
      <div className="text-2xl font-bold">Корзина</div>
      <div className="text-2xl font-bold">{morph(itemsInCart)}</div>
    </header>
  );
}

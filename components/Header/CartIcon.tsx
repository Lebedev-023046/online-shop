"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import { useCartContext } from "@/contexts/CartContext";

export function CartIcon() {
  const { cart } = useCartContext();

  const [itemsInCart, setItemsInCart] = useState<number>(0);

  useEffect(() => {
    const itemsQty = cart.reduce((acc, item) => acc + item.qty_in_cart, 0);
    setItemsInCart(itemsQty);
  }, [cart]);

  return (
    <button
      className={`relative rounded-[50%] px-1.5 transition duration-300 ease-in-out  hover:bg-soft`}
    >
      <div className="h-6 w-6">
        <Link href="/cart">
          <Image
            src="/header/cart.svg"
            alt="cart-icon"
            width={24}
            height={24}
          />
        </Link>
      </div>
      <div className="absolute top-0 right-0 h-4 w-4 rounded-full bg-soft text-xs">
        {itemsInCart}
      </div>
    </button>
  );
}

import React from "react";

import { morph } from "../utils/morph";

export function Header() {
  const productsInCart = 5;
  return (
    <header className="flex justify-between gap-4 border-b-2 p-8">
      <div className="text-2xl font-bold">Корзина</div>
      <div className="text-2xl font-bold">{morph(productsInCart)}</div>
    </header>
  );
}

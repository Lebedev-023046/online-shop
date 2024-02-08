import React from "react";

import { CartItem } from "./Item";

export function Items() {
  return (
    <div className="p-8">
      <div className="grid-cols-cart-content md:grid-cols-cart-content-md  grid justify-items-end gap-4 text-nowrap text-gray-600 [&>div:nth-child(1)]:mr-auto [&>div:nth-child(4)]:hidden md:[&>div:nth-child(4)]:block">
        <div className="">Детали продукта</div>
        <div></div>
        <div>Количество</div>
        <div>Цена</div>
        <div>Всего</div>
      </div>
      {Array(5)
        .fill(null)
        .map((_, i) => (
          <CartItem key={i} />
        ))}
    </div>
  );
}

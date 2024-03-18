"use client";

import Image from "next/image";
import React, { useCallback, useState } from "react";

import { Select } from "@/components/Select";
import { useCartContext } from "@/contexts/CartContext";
import { formatTitle } from "@/features/product/helpers/formatTitle";
import { OptionType } from "@/types/Select";
import { toReactSelectOption } from "@/utils";

import { CartItem } from "../types";

interface Props {
  item: CartItem;
}

export function CartItem({ item }: Props) {
  const { id: itemId, size, qty_in_stock, qty_in_cart } = item;
  const { name, price, productImage } = item.product;

  const qtyOptions = Array.from({ length: qty_in_stock }, (_, i) =>
    String(i + 1),
  );

  const { updateCartItem, deleteCartItem } = useCartContext();

  const updateProductQty = useCallback(
    (size: OptionType) => {
      updateCartItem({ ...item, qty_in_cart: +size.value });
    },
    [item, updateCartItem],
  );

  const deleteProduct = () => {
    deleteCartItem(itemId);
  };

  return (
    <div className="py-8">
      <div className="grid auto-rows-auto grid-cols-cart-content justify-items-end gap-4 md:grid-cols-cart-content-md [&>div:nth-child(1)]:mr-auto [&>div:nth-child(2)]:mr-auto [&>div:nth-child(4)]:hidden md:[&>div:nth-child(4)]:block">
        <Image
          priority
          className="w-full"
          src={productImage}
          alt="product-image"
          width={100}
          height={100}
        />
        <div className="max-w-40 flex w-full flex-col justify-between p-2">
          <div className="text-base font-medium xmd:text-xl">
            {formatTitle(name)}
          </div>
          <div>
            Размер: <span className="font-bold text-dark">{size}</span>
          </div>
          <button
            onClick={deleteProduct}
            className="text-nowrap relative w-full text-left text-gray-700"
          >
            Удалить из корзины
          </button>
        </div>

        <div className="min-w-[5rem]">
          <Select
            value={toReactSelectOption<string>(qty_in_cart.toString())}
            updateValue={updateProductQty}
            options={qtyOptions}
          />
        </div>
        <div>{price} BYN</div>
        <div>{qty_in_cart * price} BYN</div>
      </div>
    </div>
  );
}

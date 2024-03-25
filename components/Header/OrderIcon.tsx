"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import { useCartContext } from "@/contexts/CartContext";
import { useOrderContext } from "@/contexts/OrderContext";
import { Icon } from "@/shared/Icon";

export function OrderIcon() {
  const { order } = useOrderContext();

  const [orderId, setOrderId] = useState<number | null>(null);
  useEffect(() => {
    if (order.id) {
      setOrderId(order.id);
    }
  }, [order.id]);

  return (
    <>
      {orderId ? (
        <button
          title="Детали вашего заказа"
          className={`rounded-[50%] align-middle transition duration-300 ease-in-out  hover:bg-soft`}
        >
          <div className="">
            <Link href={`/order/${orderId}`}>
              <Icon src="/header/order.svg" alt="order-icon" />
            </Link>
          </div>
        </button>
      ) : null}
    </>
  );
}

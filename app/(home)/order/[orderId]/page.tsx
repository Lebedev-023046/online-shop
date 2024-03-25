import React from "react";

import { OrderSummary } from "@/features/order";
import { DBOrder } from "@/features/order";

export default async function page({
  params,
}: {
  params: { orderId: string };
}) {
  const response = await fetch(
    `${process.env.NEXTAUTH_URL}/api/order/${params.orderId}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    },
  );

  const order: DBOrder = await response.json();

  return (
    <div className="mx-auto w-[95%]">
      <OrderSummary order={order} />
    </div>
  );
}

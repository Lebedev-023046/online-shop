import sha256 from "crypto-js/sha256";
import { NextRequest, NextResponse } from "next/server";

import { CartItem } from "@/features/cart";
import { logger } from "@/lib/logger";
import prisma from "@/lib/prisma";
import { Address, Order, OrderLine, OrderStatus } from "@/prisma/generated";

export async function POST(req: NextRequest) {
  const formData = await req.json();

  const { phone_number, payment_method, delivering_method, ...address } =
    formData.orderForm;

  const cart: CartItem[] = formData.cart;

  const dbAddress: Address = {
    user_id: null,
    ...address,
  };

  //* DONE: create address
  const newAddress = await prisma.address.create({
    data: dbAddress,
  });
  logger.debug("address created", {
    newAddress,
  });

  //* DONE: create Order

  const order = {
    user_id: null,
    phone_number,
    payment_method,
    delivering_method,
    order_status: "Pending" as OrderStatus,
    address_id: newAddress.id,
    total_order_price: cart.reduce(
      (acc, item) => acc + item.product.price * item.qty_in_cart,
      0,
    ),
  };

  const newOrder = await prisma.order.create({
    data: order,
  });

  logger.debug("order created", {
    newOrder,
  });

  //* DONE: create OrderLine

  const orderLine = cart.map(item => {
    return prisma.orderLine.create({
      data: {
        qty_ordered: item.qty_in_cart,
        price: item.product.price,
        product_item_id: item.id,
        order_id: newOrder.id,
        productImage: item.product.productImage,
      },
    });
  });

  await Promise.all(orderLine);

  return NextResponse.json(newOrder.id, { status: 200 });
}

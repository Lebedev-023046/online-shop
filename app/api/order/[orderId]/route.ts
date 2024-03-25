import { NextRequest, NextResponse } from "next/server";

import prisma from "@/lib/prisma";

export async function GET(
  req: NextRequest,
  { params }: { params: { orderId: string } },
) {
  const order = await prisma.order.findUnique({
    where: {
      id: parseInt(params.orderId),
    },
    include: {
      address: true,
      order_line: {
        include: {
          product_item: {
            include: {
              product: true,
            },
          },
        },
      },
    },
  });
  return NextResponse.json(order, { status: 200 });
}

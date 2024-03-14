import { NextRequest, NextResponse } from "next/server";

import prisma from "@/lib/prisma";

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const query = url.searchParams.get("query");
  const products = await prisma.product.findMany({
    take: 4,
    select: {
      id: true,
      name: true,
      price: true,
      productImage: true,
    },
    where: {
      name: {
        contains: query?.toLowerCase(),
      },
    },
  });

  return NextResponse.json(products, { status: 200 });
}

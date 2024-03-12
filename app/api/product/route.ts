import { NextRequest, NextResponse } from "next/server";

import prisma from "@/lib/prisma";
import { Prisma, ProductCategory } from "@/prisma/generated";

type Category =
  | Prisma.EnumProductCategoryFilter<"Product">
  | ProductCategory
  | undefined;

export async function GET() {
  const categories: Category[] = ["SUIT", "HOODIE", "T_SHIRT", "PALAZZO"];

  const promiseArr = categories.map((category: Category) => {
    return prisma.product.findMany({
      take: 4,
      where: { category_name: category },
      select: {
        id: true,
        name: true,
        price: true,
        productImage: true,
      },
    });
  });

  const productArr = await Promise.all(promiseArr);

  console.log("productArr", productArr);

  return NextResponse.json(JSON.stringify(productArr), { status: 200 });
}

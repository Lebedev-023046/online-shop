import { NextRequest, NextResponse } from "next/server";

import { logger } from "@/lib/logger";
import prisma from "@/lib/prisma";
import { Prisma, ProductCategory } from "@/prisma/generated";

export type CategoryHref = "suit" | "hoodie" | "t-shirt" | "palazzo";

const categoryMap: Record<
  CategoryHref,
  Prisma.EnumProductCategoryFilter<"Product"> | ProductCategory | undefined
> = {
  suit: "SUIT",
  hoodie: "HOODIE",
  "t-shirt": "T_SHIRT",
  palazzo: "PALAZZO",
};

export async function GET(
  req: NextRequest,
  { params }: { params: { categoryName: CategoryHref } },
) {
  const { categoryName } = params;

  const categoryProducts = await prisma.product.findMany({
    where: { category_name: categoryMap[categoryName] },
    select: {
      id: true,
      name: true,
      price: true,
      productImage: true,
    },
  });

  logger.debug("getting category products", { categoryProducts });

  // console.log("categoryName", categoryName);
  return NextResponse.json(JSON.stringify(categoryProducts), { status: 200 });
}

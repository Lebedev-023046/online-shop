import { NextRequest, NextResponse } from "next/server";

import { logger } from "@/lib/logger";
import prisma from "@/lib/prisma";

export async function GET(
  req: NextRequest,
  { params }: { params: { productId: string } },
) {
  const { productId } = params;

  // console.log({ productId });

  const productInfo = await prisma.product.findUnique({
    where: { id: +productId },
    include: {
      product_items: true,
    },
  });

  // console.log({ productInfo });

  logger.debug("getting product info", { productInfo });

  // console.log("categoryName", categoryName);
  if (productInfo) {
    return NextResponse.json(productInfo, { status: 200 });
  } else {
    return NextResponse.json({ message: "Page Not Found" }, { status: 404 });
  }
}

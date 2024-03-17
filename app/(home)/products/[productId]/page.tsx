import { redirect } from "next/navigation";

import { ProductDetails } from "@/features/product";
import { Product, ProductItem } from "@/prisma/generated";

interface ProductDetails extends Product {
  product_item: ProductItem[];
}

export default async function ProductDetailsPage({
  params,
}: {
  params: { productId: string };
}) {
  const response = await fetch(
    `${process.env.NEXTAUTH_URL}/api/product/${params.productId}`,
  );

  // console.log(response);

  if (response.status !== 200) {
    return redirect("/");
  }

  const productDetails = await response.json();

  return <ProductDetails productDetails={productDetails} />;
}

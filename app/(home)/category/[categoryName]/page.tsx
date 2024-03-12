import { Products, Title } from "@/features/category";
import { Product } from "@/prisma/generated";

// export const

export default async function CategoryPage({
  params,
}: {
  params: { categoryName: string };
}) {
  const { categoryName } = params;

  const response = await fetch(
    `${process.env.NEXTAUTH_URL}/api/product/category/${categoryName}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
      // cache: "no-cache",
      // next: { revalidate: 3600 },
    },
  );

  const products: Product[] = JSON.parse(await response.json());
  console.log("products", products);

  return (
    <div className="mx-auto w-[95%]">
      <Title categoryName={categoryName} />
      <Products products={products} />
    </div>
  );
}

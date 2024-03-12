import React from "react";

import { Card } from "@/components/Card";
import { Product } from "@/prisma/generated";

interface Props {
  products: Product[];
}

export function Products({ products }: Props) {
  // console.log({ products });
  return (
    <div className="grid items-center gap-6 pb-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product, i) => (
        <Card product={product} key={i} />
      ))}
    </div>
  );
}

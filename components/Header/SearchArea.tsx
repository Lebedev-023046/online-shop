// "use client";

import Image from "next/image";
import React, { useEffect } from "react";
import useSWR from "swr";
import { useDebounceValue } from "usehooks-ts";

import { fetcher } from "@/lib/swr";
import { Product } from "@/prisma/generated";
import { Icon } from "@/shared/Icon";

import { Card } from "../Card";

interface Props {
  query: string;
}

export function SearchArea({ query }: Props) {
  const [debouncedValue] = useDebounceValue(query, 500);

  const {
    data: searchedProducts,
    error,
    isLoading,
  } = useSWR<Product[]>(`/api/product/search?query=${debouncedValue}`, fetcher);

  useEffect(() => {
    console.log({ searchedProducts, error, isLoading });
  }, [searchedProducts, error, isLoading]);

  return (
    <div>
      {isLoading ? (
        <div className="pt-8 text-center">Поиск...</div>
      ) : searchedProducts && searchedProducts.length === 0 ? (
        <div className="pt-8 text-center">Ничего не найдено</div>
      ) : (
        <div className="content-raw-children mx-auto grid h-full w-2/3 items-start gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {searchedProducts?.map((product, i) => (
            <Card isSearchArea product={product} key={i} />
          ))}
        </div>
      )}
    </div>
  );
}

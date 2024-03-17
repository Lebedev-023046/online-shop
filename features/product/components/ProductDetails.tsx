"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import ContentLoader from "react-content-loader";
import useSWR from "swr";

import { Select } from "@/components/Select";
import { formatTitle } from "@/features/product/helpers/formatTitle";
import { getChosenProductItem } from "@/features/product/helpers/getChosenProductItem";
import { fetcher } from "@/lib/swr";
import { $Enums, Product, ProductItem } from "@/prisma/generated";
import { OptionType } from "@/types/Select";
import { toReactSelectOption } from "@/utils";

interface ProductDetails extends Product {
  product_item: ProductItem[];
}

interface Props {
  productDetails: ProductDetails;
}

export function ProductDetails({ productDetails }: Props) {
  // const { productDetails, isLoading, error } = useSWR<ProductDetails>(
  //   `/api/product/${params?.productId ?? "1"}`,
  //   fetcher,
  // );

  const [itemSize, setItemSize] = useState<OptionType>(
    toReactSelectOption<$Enums.Size>(
      productDetails?.product_item[0].size ?? "XS",
    ),
  );

  const chosenProductItem = getChosenProductItem({
    productItems: productDetails?.product_item ?? [],
    size: itemSize.value,
  });
  const options = productDetails?.product_item.map(item => item.size) ?? [];

  useEffect(() => {
    console.log({ chosenProductItem });
  }, [chosenProductItem]);

  // const { name, price, productImage } = productDetails as Product;

  useEffect(() => {
    console.log(productDetails);
  }, [productDetails]);

  const updateItemSize = useCallback(
    (value: OptionType) => setItemSize(value),
    [],
  );

  return (
    <div className="mx-auto w-[95%] py-8">
      <div className="mx-auto flex w-[60%] flex-col justify-center  gap-8 md:w-[80%] md:flex-row">
        <section className="order-2 md:order-none">
          <Image
            priority
            className="img mx-auto h-full w-full rounded-lg"
            src={productDetails.productImage}
            width={400}
            height={600}
            alt="product-details-image"
          />
        </section>
        <section className=" md:max-w-[40%]">
          <h1 className="text-2xl font-bold">
            {formatTitle(productDetails.name)}
          </h1>
          <p className="mt-2 text-gray-500">
            Артикул: {chosenProductItem?.article ?? "Н/Д"}
          </p>
          <p className="mt-2 text-gray-500">
            Осталось на складе: {chosenProductItem?.qty_in_stock ?? "0"}
          </p>
          <p className="mt-4 text-2xl font-bold">{productDetails.price} BYN</p>

          <div className="relative mt-4">
            <label
              htmlFor="countries"
              className="block pb-2 font-medium text-gray-900 dark:text-gray-400"
            >
              Размер
            </label>
            <Select
              value={itemSize}
              updateValue={updateItemSize}
              options={options}
            />
            <Image
              priority
              className="absolute right-4 top-[55%] -z-10 h-auto rotate-90"
              src="/right-stroke.svg"
              alt="select-icon"
              width={10}
              height={10}
            />
          </div>

          <p className="mt-4 text-justify text-sm">
            {productDetails.description}
          </p>

          <button className="mt-8 w-full rounded-md bg-soft py-2 px-2 text-dark duration-300 hover:bg-pink-50">
            Добавить в корзину
          </button>
        </section>
      </div>
    </div>
  );
}

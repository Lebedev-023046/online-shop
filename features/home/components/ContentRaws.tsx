import React from "react";

import { IProductPreview } from "@/types";

import { ContentRaw } from "./ContentRaw";
import { RAW_ORDER_INFO } from "../constants";

export function ContentRaws(props: IProductPreview) {
  const { productPreviews } = props;
  // console.log("client", productPreviews);
  return (
    <div className="mx-auto w-[95%]">
      {RAW_ORDER_INFO.map((headerInfo, i) => (
        <ContentRaw
          products={productPreviews[i]}
          headerInfo={headerInfo}
          key={i}
        />
      ))}
    </div>
  );
}

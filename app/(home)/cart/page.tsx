import React from "react";

import { Header, Items, Summary } from "@/features/cart";

export default function Cart() {
  return (
    <div className="mx-auto w-[95%] overflow-hidden rounded-md md:w-[95%] lg:flex">
      <div className="bg-gray-50 lg:w-[70%]">
        <Header />
        <Items />
      </div>
      <div className="bg-gray-100 lg:w-[30%]">
        <Summary />
      </div>
    </div>
  );
}

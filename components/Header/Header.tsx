import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Navigation } from "./Navigation";
import { Search } from "./Search";

export default function Header() {
  return (
    <div className=" h-[5rem] w-full  bg-soft">
      <div className="m-auto flex h-full w-[95%] items-center gap-10 ">
        {/* left side */}
        <div className="flex items-center gap-6">
          <h1 className="flex-center h-full text-center indent-1.5 font-bold tracking-[0.375rem] sm:text-2xl lg:text-4xl">
            <Link href="/">MAZY</Link>
          </h1>
          <Navigation />
        </div>
        {/* right side */}
        <div className="ml-auto flex gap-4">
          <Search />
          <button className="rounded-[50%] px-1.5  transition duration-300 ease-in-out hover:bg-deep-orange-50">
            <Image src="/cart.svg" alt="cart-icon" width={24} height={24} />
          </button>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Navigation } from "./Navigation";
import { Search } from "./Search";

export default function Header() {
  return (
    <header className="h-[5rem] w-full">
      <div className="m-auto flex h-full w-[95%] items-center ">
        {/* left side */}
        <div className="flex items-center gap-6">
          <h1 className="h-full text-center indent-1.5 font-bold tracking-[0.375rem] sm:text-2xl lg:text-4xl">
            <Link href="/">
              <Image
                className="h-full w-full"
                src="/header/logo.svg"
                alt="logo-icon"
                width={24}
                height={24}
              />
            </Link>
          </h1>
          <Navigation />
        </div>
        {/* right side */}
        <div className="ml-auto flex gap-4">
          <Search />
          <button className="rounded-[50%] px-1.5  transition duration-300 ease-in-out hover:bg-deep-orange-50">
            <Image
              src="/header/cart.svg"
              alt="cart-icon"
              width={24}
              height={24}
            />
          </button>
        </div>
      </div>
    </header>
  );
}

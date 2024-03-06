import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";
import React from "react";

import { Navigation } from "./Navigation";
import { Profile } from "./Profile";
import { Search } from "./Search";

export default function Header() {
  const { data } = useSession();

  console.log({ data });

  return (
    <header className="w-full py-5">
      <div className="m-auto flex h-full w-[95%] items-center">
        {/* left side */}
        <div className="flex items-center gap-6 md:gap-12">
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
          <button className="hover:bg-deep-orange-50 rounded-[50%] px-1.5 transition duration-300 ease-in-out">
            <div className="h-6 w-6">
              <Link href="/cart">
                <Image
                  src="/header/cart.svg"
                  alt="cart-icon"
                  width={24}
                  height={24}
                />
              </Link>
            </div>
          </button>
        </div>
        <Profile user={data?.user} />
      </div>
    </header>
  );
}

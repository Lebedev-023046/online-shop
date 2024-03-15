"use client";

import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";
import React, { useCallback, useState } from "react";

import { Navigation } from "./Navigation";
import { Profile } from "./Profile";
import { Search } from "./Search";
import { SearchArea } from "./SearchArea";
import { ExpandHeader } from "@/shared/ExpandHeader";

export default function Header() {
  const { data } = useSession();
  // console.log({ data });
  const [query, setQuery] = useState<string>("");

  const updateQuery = useCallback(
    (e: React.ChangeEvent<HTMLInputElement> | string) => {
      if (typeof e === "string") return setQuery(e);
      setQuery(e.target.value);
    },
    [],
  );

  return (
    <header className="relative">
      <div className="w-full py-5">
        <div className="m-auto flex h-full w-[95%] items-center">
          {/* left side */}
          <div className="flex items-center gap-4 pr-4 md:gap-12">
            <h1 className="h-6 w-24">
              <Link className="block" href="/">
                <Image
                  className="block h-[25px] w-[100px]"
                  src="/header/logo.svg"
                  alt="logo-icon"
                  width={100}
                  height={25}
                />
              </Link>
            </h1>
            <Navigation />
          </div>
          {/* right side */}
          <div className="ml-auto flex gap-4">
            <Search query={query} updateQuery={updateQuery} />
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
      </div>

      {/* <ExpandHeader type="menu">
        <Navigation />
      </ExpandHeader> */}

      <ExpandHeader type="search">
        <SearchArea query={query} />
      </ExpandHeader>
    </header>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";
import React, { useCallback, useState } from "react";

import { CartIcon } from "./CartIcon";
import { Navigation } from "./Navigation";
import { Profile } from "./Profile";
import { Search } from "./Search";
import { SearchArea } from "./SearchArea";

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
            <Search query={query} updateQuery={updateQuery} />
            <CartIcon />
          </div>
          <Profile user={data?.user} />
        </div>
      </div>

      <SearchArea query={query} />
    </header>
  );
}

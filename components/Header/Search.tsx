"use client";

import Image from "next/image";
import React, { useState } from "react";

import { useSearchAreaContext } from "@/contexts/SearctAreaContext";

interface Props {
  query: string;
  updateQuery: (e: React.ChangeEvent<HTMLInputElement> | string) => void;
}

export function Search({ query, updateQuery }: Props) {
  const { updateShouldSearchAreaOpen } = useSearchAreaContext();

  return (
    <div className="relative">
      <span className="absolute inset-y-0 left-0 flex items-center pl-3">
        <Image
          src="/header/search.svg"
          alt="search-icon"
          width={24}
          height={24}
        />
      </span>
      <input
        type="text"
        value={query}
        onChange={updateQuery}
        onFocus={() => updateShouldSearchAreaOpen(true)}
        onBlur={() => updateQuery("")}
        className="rounded-md border border-gray-300  bg-white py-2 pl-10 pr-3 leading-5 placeholder-gray-500 focus:border-dark focus:outline-none focus:ring-1 focus:ring-dark sm:text-sm xmd:w-60"
        placeholder="Найти"
      />
    </div>
  );
}

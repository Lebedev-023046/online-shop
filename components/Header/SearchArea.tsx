// "use client";

import Image from "next/image";
import React, { useEffect } from "react";
import useSWR from "swr";
import { useDebounceValue } from "usehooks-ts";

import { useSearchAreaContext } from "@/contexts/SearctAreaContext";
import { fetcher } from "@/lib/swr";
import { Product } from "@/prisma/generated";
import { Icon } from "@/shared/Icon";

import { Card } from "../Card";

interface Props {
  query: string;
}

export function SearchArea({ query }: Props) {
  const shadow = "0px 200px 30px 15px rgba(0, 0, 0, 0.3)";

  const { shouldSearchAreaOpen, updateShouldSearchAreaOpen } =
    useSearchAreaContext();

  const searchAreaRef = React.useRef<HTMLDivElement>(null);

  const [debouncedValue] = useDebounceValue(query, 500);

  const {
    data: searchedProducts,
    error,
    isLoading,
  } = useSWR<Product[]>(`/api/product/search?query=${debouncedValue}`, fetcher);

  // useEffect(() => {
  //   console.log({ searchedProducts, error, isLoading });
  // }, [searchedProducts, error, isLoading]);

  useEffect(() => {
    // Close modal on outside click
    function handleClickOutside(event: MouseEvent) {
      if (
        searchAreaRef.current &&
        !searchAreaRef.current.contains(event.target as Node) &&
        !["INPUT", "TEXTAREA"].includes((event.target as HTMLElement).tagName)
      ) {
        updateShouldSearchAreaOpen(false);
      }
    }
    // Add event listeners
    document.addEventListener("mousedown", handleClickOutside);
    // Cleanup function
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [updateShouldSearchAreaOpen]);

  return (
    <div
      ref={searchAreaRef}
      className={`absolute left-0 right-0 z-10 h-auto overflow-hidden bg-white shadow-[0px_200px_30px_15px_rgba(0,0,0,0.3)] duration-300`}
      style={{
        height: shouldSearchAreaOpen ? "25rem" : "0",
        boxShadow: shouldSearchAreaOpen ? shadow : "none",
      }}
    >
      <div className="relative mx-auto max-w-[95%] overflow-hidden">
        <div className="absolute right-0 top-0">
          <Icon
            src="/close.svg"
            alt="cross-icon"
            small
            onClose={() => updateShouldSearchAreaOpen(false)}
          />
        </div>
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
      </div>
    </div>
  );
}

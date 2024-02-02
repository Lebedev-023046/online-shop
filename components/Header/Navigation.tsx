import Link from "next/link";
import React from "react";

import { navigation } from "@/constants/navigation";

export function Navigation() {
  return (
    <nav>
      <div className="flex h-full space-x-3">
        {navigation.map((navItem, index) => (
          <Link
            key={index}
            href={navItem.link}
            className="relative rounded-md py-1 font-medium before:absolute before:bottom-0 before:block before:h-[2px] before:w-0 before:bg-black before:transition-all before:duration-300 hover:border-black before:hover:w-full"
          >
            {navItem.item}
          </Link>
        ))}
      </div>
    </nav>
  );
}

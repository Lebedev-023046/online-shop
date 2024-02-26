import Link from "next/link";
import React from "react";

import { navigation } from "@/constants/navigation";

export function Navigation() {
  return (
    <nav>
      <div className="hidden h-full  space-x-3 md:flex">
        {navigation.map((navItem, index) => (
          <Link
            key={index}
            href={navItem.link}
            className="pseudo-underline relative rounded-md py-1 font-medium"
          >
            {navItem.item}
          </Link>
        ))}
      </div>
    </nav>
  );
}

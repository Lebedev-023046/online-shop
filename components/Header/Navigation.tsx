import Link from "next/link";
import React from "react";

import { navigation } from "@/constants/navigation";
import { useHeaderExpandContext } from "@/contexts/ExpandHeader";
import { Icon } from "@/shared/Icon";

export function Navigation() {
  const { updateShouldHeaderExpand } = useHeaderExpandContext();
  return (
    <nav>
      <div className="hidden h-full space-x-3 md:flex">
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
      <div className="flex md:hidden">
        <Icon src="/header/burger.svg" alt="menu-icon" />
      </div>
    </nav>
  );
}

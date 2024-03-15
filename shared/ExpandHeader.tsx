import React, { useEffect } from "react";

import { useHeaderExpandContext } from "@/contexts/ExpandHeader";

import { Icon } from "./Icon";

interface Props {
  children: React.ReactNode;
  type: "search" | "menu";
}

const congigHeightMap = {
  search: "auto",
  menu: "10rem",
};

export function ExpandHeader({ children, type }: Props) {
  const shadow = "0px 200px 30px 15px rgba(0, 0, 0, 0.3)";

  const expandHeaderRef = React.useRef<HTMLDivElement>(null);

  const { shouldHeaderExpand, updateShouldHeaderExpand } =
    useHeaderExpandContext();

  useEffect(() => {
    // Close modal on outside click
    function handleClickOutside(event: MouseEvent) {
      if (
        expandHeaderRef.current &&
        !expandHeaderRef.current.contains(event.target as Node) &&
        !["INPUT", "TEXTAREA"].includes((event.target as HTMLElement).tagName)
      ) {
        updateShouldHeaderExpand(false);
      }
    }
    // Add event listeners
    document.addEventListener("mousedown", handleClickOutside);
    // Cleanup function
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [type, updateShouldHeaderExpand]);

  return (
    <div
      ref={expandHeaderRef}
      className={`absolute left-0 right-0 z-10 h-auto overflow-hidden bg-white shadow-[0px_200px_30px_15px_rgba(0,0,0,0.3)] duration-300`}
      style={{
        height: shouldHeaderExpand ? congigHeightMap[type] : "0",
        boxShadow: shouldHeaderExpand ? shadow : "none",
        padding: shouldHeaderExpand ? "1rem" : "0",
      }}
    >
      <div className="relative mx-auto max-w-[95%] overflow-hidden">
        <div className="absolute right-0 top-0">
          <Icon
            src="/close.svg"
            alt="cross-icon"
            small
            onClick={() => updateShouldHeaderExpand(false)}
          />
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}

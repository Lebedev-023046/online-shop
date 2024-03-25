"use client";

import Link from "next/link";
import { User } from "next-auth/core/types";
import { signOut } from "next-auth/react";
import React, { useEffect, useRef, useState } from "react";

import { Icon } from "@/shared/Icon";

interface Props {
  user: User | undefined;
}

export function Profile({ user }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const profileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Close modal on outside click
    function handleClickOutside(event: MouseEvent) {
      if (
        profileMenuRef.current &&
        !profileMenuRef.current.contains(event.target as Node)
      ) {
        setIsExpanded(false);
      }
    }

    // Close modal on escape key press
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsExpanded(false);
      }
    }

    // Add event listeners
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    // Cleanup function
    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return user?.id ? (
    <div
      onClick={setIsExpanded.bind(null, prev => !prev)}
      className="flex-center relative"
    >
      <button
        title="Профиль"
        className="h-8·w-8·rounded-full·bg-dark·text-soft"
      >
        {user?.name ? user.name[0] : ""}
      </button>
      <div
        ref={profileMenuRef}
        className={`absolute right-0 top-10 w-60 rounded-md border-2 bg-white p-3 ${isExpanded ? "block" : "hidden"}`}
      >
        <Link className="mt-2 block" href="##">
          Мои заказы
        </Link>
        <button
          title="Выйти"
          className="mt-4 text-red-400"
          onClick={() => signOut()}
        >
          Выйти
        </button>
      </div>
    </div>
  ) : (
    <button>
      <div title="Войти" className="h-6 w-6">
        <Link href="/auth/login">
          <Icon src="/header/signin.svg" alt="signin-icon" />
        </Link>
      </div>
    </button>
  );
}

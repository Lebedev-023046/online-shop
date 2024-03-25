"use client";

import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface Props<T> {
  initialValue: T;
  key: string;
}

export const useLocalStorage = <T>({ initialValue, key }: Props<T>) => {
  const getValue = () => {
    try {
      const storage = localStorage.getItem(key);
      if (storage) {
        return JSON.parse(storage);
      }
      return initialValue;
    } catch (error) {
      return initialValue;
    }
  };

  const [value, setValue] = useState<T>(getValue);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as [T, Dispatch<SetStateAction<T>>];
};

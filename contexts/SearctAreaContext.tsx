"use client";

import { createContext, useCallback, useContext, useState } from "react";

interface ISearchAreaProvider {
  children: React.ReactNode;
}

interface ISearchAreaContext {
  shouldSearchAreaOpen: boolean;
  updateShouldSearchAreaOpen: (value: boolean) => void;
}

export const SearchAreaContext = createContext<ISearchAreaContext>({
  shouldSearchAreaOpen: false,
  updateShouldSearchAreaOpen: () => {},
});

export const SearchAreaProvider = ({ children }: ISearchAreaProvider) => {
  const [shouldSearchAreaOpen, setShouldSearchAreaOpen] =
    useState<boolean>(false);

  const updateShouldSearchAreaOpen = useCallback((value: boolean) => {
    setShouldSearchAreaOpen(value);
  }, []);

  return (
    <SearchAreaContext.Provider
      value={{ shouldSearchAreaOpen, updateShouldSearchAreaOpen }}
    >
      {children}
    </SearchAreaContext.Provider>
  );
};

export const useSearchAreaContext = () => useContext(SearchAreaContext);

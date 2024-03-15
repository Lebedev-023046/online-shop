"use client";

import {
  createContext,
  SetStateAction,
  useCallback,
  useContext,
  useState,
} from "react";

interface IHeaderExpandProvider {
  children: React.ReactNode;
}

interface IHeaderExpandContext {
  shouldHeaderExpand: boolean;
  updateShouldHeaderExpand: React.Dispatch<React.SetStateAction<boolean>>;
}

export const HeaderExpandContext = createContext<IHeaderExpandContext>({
  shouldHeaderExpand: false,
  updateShouldHeaderExpand: () => {},
});

export const HeaderExpandProvider = ({ children }: IHeaderExpandProvider) => {
  const [shouldHeaderExpand, setShouldHeaderExpand] = useState<boolean>(false);

  const updateShouldHeaderExpand = useCallback(
    (value: SetStateAction<boolean>) => {
      setShouldHeaderExpand(value);
    },
    [],
  );

  return (
    <HeaderExpandContext.Provider
      value={{ shouldHeaderExpand, updateShouldHeaderExpand }}
    >
      {children}
    </HeaderExpandContext.Provider>
  );
};

export const useHeaderExpandContext = () => useContext(HeaderExpandContext);

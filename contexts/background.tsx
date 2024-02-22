"use client";

import {
  createContext,
  Dispatch,
  memo,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from "react";

interface IBackgroundProvider {
  children: React.ReactNode;
}

interface IBackgroundContext {
  isBackgroundActive: boolean;
  setIsBackgroundActive: Dispatch<SetStateAction<boolean>>;
}

const defaultState = {
  isBackgroundActive: false,
  setIsBackgroundActive: () => {},
};

export const BackgroundContext =
  createContext<IBackgroundContext>(defaultState);

export const BackgroundProvider = memo(({ children }: IBackgroundProvider) => {
  const [isBackgroundActive, setIsBackgroundActive] = useState<boolean>(false);
  const contextValue = useMemo(
    () => ({
      isBackgroundActive,
      setIsBackgroundActive,
    }),
    [isBackgroundActive],
  );

  return (
    <BackgroundContext.Provider value={contextValue}>
      {children}
    </BackgroundContext.Provider>
  );
});

BackgroundProvider.displayName = "BackgroundProvider";

export const useBackgroundContext = () => useContext(BackgroundContext);

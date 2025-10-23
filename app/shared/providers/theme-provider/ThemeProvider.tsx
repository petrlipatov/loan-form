import { createContext, useEffect, useState } from "react";

import type { Props, ThemeProviderState } from "./ThemeProvider.types";

const initialState: ThemeProviderState = {
  isDarkMode: false,
  toggleTheme: () => null,
};

export const ThemeProviderContext =
  createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = "light",
  storageKey = "wiam-ui-theme",
}: Props) {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const storedTheme = localStorage.getItem(storageKey);
    if (storedTheme) {
      return storedTheme === "dark";
    }
    return defaultTheme === "dark";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const value = {
    isDarkMode,
    toggleTheme: () => {
      const newIsDarkMode = !isDarkMode;
      localStorage.setItem(storageKey, newIsDarkMode ? "dark" : "light");
      setIsDarkMode(newIsDarkMode);
    },
  };

  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

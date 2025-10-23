import type { ReactNode } from "react";

export type Props = {
  children: ReactNode;
  defaultTheme?: "dark" | "light";
  storageKey?: string;
};

export type ThemeProviderState = {
  isDarkMode: boolean;
  toggleTheme: () => void;
};

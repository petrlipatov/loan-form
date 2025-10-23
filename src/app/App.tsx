import { ThemeProvider } from "~/shared/providers/theme-provider";
import { AppRouter } from "./router/app-router";

export const App = () => {
  return (
    <ThemeProvider>
      <AppRouter />
    </ThemeProvider>
  );
};

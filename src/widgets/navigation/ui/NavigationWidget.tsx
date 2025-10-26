import { Link } from "react-router-dom";
import { Button } from "~/shared/ui/button";
import { useTheme } from "~/shared/hooks";
import { Sun, Moon } from "lucide-react";

export function NavigationWidget() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <header
      className="
        sticky top-0 z-50
        w-full
        border-b border-border/40
        bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60
      "
    >
      <div
        className="
          w-full max-w-screen-2xl mx-auto
          flex h-14 items-center justify-between
          px-4
        "
      >
        <Link to="/" className="font-bold">
          Wiam
        </Link>
        <Button variant="outline" size="icon" onClick={toggleTheme}>
          {isDarkMode ? (
            <Sun className="h-[1.2rem] w-[1.2rem]" />
          ) : (
            <Moon className="h-[1.2rem] w-[1.2rem]" />
          )}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>
    </header>
  );
}

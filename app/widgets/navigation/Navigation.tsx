import { Link } from "react-router";
import { Button } from "~/shared/ui/button/button";
import { useTheme } from "~/shared/hooks"; // Обновлено

export function Navigation() {
  const { toggleTheme } = useTheme();

  return (
    <nav className="bg-accent flex flex-row justify-between items-center p-6">
      Navigation
      <Button onClick={toggleTheme}>Dark</Button>
    </nav>
  );
}

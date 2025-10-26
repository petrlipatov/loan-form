import { Outlet } from "react-router-dom";
import { NavigationWidget } from "~/widgets/navigation";

export function Layout() {
  return (
    <>
      <NavigationWidget />
      <Outlet />
    </>
  );
}

import { Outlet } from "react-router-dom";
import { Navigation } from "~/widgets/navigation";

export function Layout() {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
}

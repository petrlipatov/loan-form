import { Route, Routes } from "react-router-dom";
import { Layout } from "~/app/layout/Layout";
import HomePage from "~/pages/HomePage";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
};

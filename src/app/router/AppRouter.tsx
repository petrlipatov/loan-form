import { Route, Routes } from "react-router-dom";
import { Layout } from "~/app/layout/Layout";
import { HomePage } from "~/pages/home/HomePage";
import { LoanFormPage } from "~/pages/loan-form/LoanFormPage";
import {
  PersonalDataStep,
  AddressStep,
  LoanParamsStep,
} from "~/features/loan-form";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="loan" element={<LoanFormPage />}>
          <Route index element={<PersonalDataStep />} />
          <Route path="address" element={<AddressStep />} />
          <Route path="params" element={<LoanParamsStep />} />
        </Route>
      </Route>
    </Routes>
  );
};

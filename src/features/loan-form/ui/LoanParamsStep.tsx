import { LoanFormStepPaths } from "~/entities/loan";
import {
  LoanAmountField,
  LoanTermField,
  NavigationButtons,
} from "./components";

export const LoanParamsStep = () => {
  return (
    <div className="space-y-8">
      <LoanAmountField />
      <LoanTermField />
      <NavigationButtons back={LoanFormStepPaths.Address} isSubmit />
    </div>
  );
};

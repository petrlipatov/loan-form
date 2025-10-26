import { useOutletContext } from "react-router-dom";
import { LoanFormStepPaths } from "~/entities/loan";
import {
  LoanAmountField,
  LoanTermField,
  NavigationButtons,
} from "./components";
import { type LoanFormOutletContext } from "~/shared/types/loan-form";

export const LoanParamsStep = () => {
  const { isSubmitting } = useOutletContext<LoanFormOutletContext>();

  return (
    <div className="space-y-8">
      <LoanAmountField isDisabled={isSubmitting} />
      <LoanTermField isDisabled={isSubmitting} />
      <NavigationButtons back={LoanFormStepPaths.Address} isSubmit isDisabled={isSubmitting} />
    </div>
  );
};


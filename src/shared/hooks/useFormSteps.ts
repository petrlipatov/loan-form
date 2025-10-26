import { useContext } from "react";
import { FormStepsContext } from "~/shared/providers/form-steps-provider";

export const useFormSteps = () => {
  const context = useContext(FormStepsContext);
  if (!context) {
    throw new Error("useFormSteps must be used within a FormStepsProvider");
  }
  return context;
};

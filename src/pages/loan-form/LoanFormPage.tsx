import { LoanFormWidget } from "~/widgets/loan-form";
import { LOAN_FORM_STEPS } from "~/entities/loan";
import { FormStepsProvider } from "~/shared/providers/form-steps-provider";

export function LoanFormPage() {
  return (
    <div
      className="
        flex justify-center items-start
        min-h-screen bg-background pt-10
      "
    >
      <div className="w-full max-w-2xl">
        <FormStepsProvider steps={LOAN_FORM_STEPS}>
          <LoanFormWidget />
        </FormStepsProvider>
      </div>
    </div>
  );
}

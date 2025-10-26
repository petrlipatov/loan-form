import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Outlet, useLocation } from "react-router-dom";
import {
  LOAN_FORM_DEFAULT_VALUES,
  type LoanFormValues,
  loanFormSchema,
} from "~/entities/loan";
import { useSubmitLoanForm } from "~/entities/loan/api/api";
import { FormBreadcrumbs } from "./FormBreadcrumbs";
import { useState } from "react";
import { Form } from "~/shared/ui/form/Form";
import { Card, CardContent } from "~/shared/ui/card";
import { useFormSteps, useFormPersistence } from "~/shared/hooks";
import { Skeleton } from "~/shared/ui/skeleton/Skeleton";
import { SuccessModal } from "./Modal";
import { FormHeader } from "./FromHeader";

export const LoanFormWidget = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submittedData, setSubmittedData] = useState<LoanFormValues | null>(
    null
  );
  const location = useLocation();

  const {
    steps,
    currentStep,
    markStepAsCompleted,
    isStepCheckInProgress,
    isStepCompleted,
  } = useFormSteps();

  const methods = useForm<LoanFormValues>({
    resolver: zodResolver(loanFormSchema),
    defaultValues: LOAN_FORM_DEFAULT_VALUES,
    shouldUnregister: false,
    mode: "onBlur",
  });

  const { clearStoredData } = useFormPersistence("loan-form", methods);

  const mutation = useSubmitLoanForm({
    onSuccess: () => {
      setIsModalOpen(true);
      markStepAsCompleted(location.pathname);
      clearStoredData();
      methods.reset();
    },
  });

  const onSubmit = (data: LoanFormValues) => {
    setSubmittedData(data);
    mutation.mutate({ title: `${data.firstName} ${data.lastName}` });
  };

  return (
    <Form methods={methods} onSubmit={methods.handleSubmit(onSubmit)}>
      <FormBreadcrumbs
        steps={steps}
        currentStep={currentStep}
        isStepCompleted={isStepCompleted}
      />
      <Card>
        <FormHeader currentStep={currentStep} />
        <CardContent>
          {isStepCheckInProgress ? (
            <Skeleton
              className="
                h-64
                w-full
              "
            />
          ) : (
            <Outlet context={{ isSubmitting: mutation.isPending }} />
          )}
        </CardContent>
      </Card>

      {submittedData && (
        <SuccessModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          data={submittedData}
        />
      )}
    </Form>
  );
};

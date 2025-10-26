import { Fragment } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "~/shared/ui/breadcrumb";
import { BreadcrumbsStep } from "./BreadcrumbsStep";
import type { FormStep } from "~/shared/providers/form-steps-provider";

interface LoanApplicationBreadcrumbsProps {
  steps: FormStep[];
  currentStep: FormStep;
  isStepCompleted: (path: string) => boolean;
}

export const FormBreadcrumbs = ({
  steps,
  currentStep,
  isStepCompleted,
}: LoanApplicationBreadcrumbsProps) => {
  const currentStepIndex = steps.indexOf(currentStep);

  return (
    <Breadcrumb className="mb-4">
      <BreadcrumbList>
        {steps.map((step, index) => {
          const isPastStep = index < currentStepIndex;
          const isCurrentStep = index === currentStepIndex;
          const isClickable = isPastStep || isStepCompleted(step.path);

          return (
            <Fragment key={step.path}>
              <BreadcrumbItem>
                <BreadcrumbsStep
                  step={step}
                  isCurrentStep={isCurrentStep}
                  isClickable={isClickable}
                />
              </BreadcrumbItem>
              {index < steps.length - 1 && <BreadcrumbSeparator />}
            </Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

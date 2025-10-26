import { Link } from "react-router-dom";
import { BreadcrumbLink, BreadcrumbPage } from "~/shared/ui/breadcrumb";
import type { FormStep } from "~/shared/providers/form-steps-provider";

export const BreadcrumbsStep = ({
  step,
  isCurrentStep,
  isClickable,
}: {
  step: FormStep;
  isCurrentStep: boolean;
  isClickable: boolean;
}) => {
  if (isCurrentStep) {
    return <BreadcrumbPage>{step.title}</BreadcrumbPage>;
  }
  if (isClickable) {
    return (
      <BreadcrumbLink asChild className="text-white">
        <Link to={step.path}>{step.title}</Link>
      </BreadcrumbLink>
    );
  }
  return <BreadcrumbLink>{step.title}</BreadcrumbLink>;
};

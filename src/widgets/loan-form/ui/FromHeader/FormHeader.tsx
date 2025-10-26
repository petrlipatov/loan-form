import { CardHeader, CardTitle, CardDescription } from "~/shared/ui/card";

interface LoanFormHeaderProps {
  currentStep: { title: string; description: string };
}

export const FormHeader = ({ currentStep }: LoanFormHeaderProps) => {
  return (
    <CardHeader>
      <CardTitle>{currentStep.title}</CardTitle>
      <CardDescription>{currentStep.description}</CardDescription>
    </CardHeader>
  );
};

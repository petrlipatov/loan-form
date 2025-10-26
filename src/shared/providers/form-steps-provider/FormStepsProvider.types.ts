import type { ReactNode } from "react";

export interface FormStep {
  path: string;
  title: string;
  description: string;
}

export interface FormStepsContextType {
  steps: FormStep[];
  completedSteps: Set<string>;
  markStepAsCompleted: (path: string) => void;
  isStepCompleted: (path: string) => boolean;
  currentAllowedPath: string;
  currentStep: FormStep;
  isStepCheckInProgress: boolean;
}

export interface Props {
  steps: FormStep[];
  children: ReactNode;
}

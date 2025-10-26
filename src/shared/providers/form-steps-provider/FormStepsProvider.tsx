import {
  createContext,
  useState,
  useCallback,
  useMemo,
  useEffect,
} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import type { FormStepsContextType, Props } from "./FormStepsProvider.types";

export const FormStepsContext = createContext<FormStepsContextType | undefined>(
  undefined
);

export const FormStepsProvider = ({ steps, children }: Props) => {
  const [completedSteps, setCompletedSteps] = useState<Set<string>>(new Set());
  const [isStepCheckInProgress, setStepCheckInProgress] = useState(true);

  const location = useLocation();
  const navigate = useNavigate();

  const markStepAsCompleted = useCallback((path: string) => {
    setCompletedSteps((prev) => new Set(prev).add(path));
  }, []);

  const isStepCompleted = useCallback(
    (path: string) => completedSteps.has(path),
    [completedSteps]
  );

  const currentAllowedPath = useMemo(() => {
    return (
      steps.find((step) => !completedSteps.has(step.path))?.path ||
      steps[steps.length - 1].path
    );
  }, [completedSteps, steps]);

  useEffect(() => {
    setStepCheckInProgress(true);
    const currentStepIndex = steps.findIndex(
      (step) => step.path === location.pathname
    );
    const allowedStepIndex = steps.findIndex(
      (step) => step.path === currentAllowedPath
    );

    if (currentStepIndex > allowedStepIndex) {
      navigate(currentAllowedPath, { replace: true });
    } else {
      setStepCheckInProgress(false);
    }
  }, [location.pathname, currentAllowedPath, navigate, steps]);

  const currentStep =
    steps.find((step) => step.path === location.pathname) || steps[0];

  return (
    <FormStepsContext.Provider
      value={{
        steps,
        completedSteps,
        markStepAsCompleted,
        isStepCompleted,
        currentAllowedPath,
        currentStep,
        isStepCheckInProgress,
      }}
    >
      {children}
    </FormStepsContext.Provider>
  );
};

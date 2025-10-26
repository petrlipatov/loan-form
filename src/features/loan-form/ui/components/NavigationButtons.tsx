


import { useFormContext } from "react-hook-form";
import { useNavigate, useLocation, useOutletContext } from "react-router-dom";
import { useFormSteps } from "~/shared/hooks";
import { Button } from "~/shared/ui/button";
import { CardFooter } from "~/shared/ui/card";
import { ArrowRight, Loader2 } from "lucide-react";
import { FormFields } from "~/entities/loan";

interface NavigationButtonsProps {
  back?: string;
  next?: string;
  fields?: FormFields[];
  isSubmit?: boolean;
}

export const NavigationButtons = ({ back, next, fields, isSubmit }: NavigationButtonsProps) => {
  const { isSubmitting } = useOutletContext<{ isSubmitting: boolean }>();
  const { trigger } = useFormContext();
  const navigate = useNavigate();
  const location = useLocation();
  const { markStepAsCompleted } = useFormSteps();

  const handleNext = async () => {
    if (!next || !fields) return;

    const isValid = await trigger(fields);
    if (isValid) {
      markStepAsCompleted(location.pathname);
      navigate(next);
    }
  };

  const handleBack = () => {
    if (back) {
      navigate(back);
    }
  };

  return (
    <CardFooter className="flex justify-between px-0 pt-6">
      {back ? (
        <Button type="button" variant="outline" onClick={handleBack}>
          Назад
        </Button>
      ) : (
        <div />
      )}
      {next && (
        <Button type="button" onClick={handleNext} className="group">
          Далее
          <ArrowRight
            className="
              inline-block h-4 w-4 ml-1
              transition-transform group-hover:translate-x-1
            "
          />
        </Button>
      )}
      {isSubmit && (
        <Button type="submit" className="group" disabled={isSubmitting}>
          {isSubmitting ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <>
              Подать заявку{" "}
              <span
                className="
                  inline-block
                  transition-transform group-hover:translate-x-1 motion-reduce:transform-none
                "
              >
                →
              </span>
            </>
          )}
        </Button>
      )}
    </CardFooter>
  );
};




import { useFormContext } from "react-hook-form";
import { FormFields } from "~/entities/loan";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/shared/ui/form/Form";
import { Slider } from "~/shared/ui/slider";

export const LoanTermField = ({ isDisabled }: { isDisabled?: boolean }) => {
  const { control, watch } = useFormContext();
  const loanTerm = watch(FormFields.LoanTerm);

  return (
    <FormField
      control={control}
      name={FormFields.LoanTerm}
      render={({ field }) => (
        <FormItem>
          <FormLabel>Срок займа: {loanTerm} дней</FormLabel>
          <FormControl>
            <Slider
              min={10}
              max={30}
              step={1}
              onValueChange={(value) => field.onChange(value[0])}
              defaultValue={[field.value]}
              disabled={isDisabled}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

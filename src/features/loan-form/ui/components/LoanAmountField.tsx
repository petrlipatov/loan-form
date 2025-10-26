
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

export const LoanAmountField = () => {
  const { control, watch } = useFormContext();
  const loanAmount = watch(FormFields.LoanAmount);

  return (
    <FormField
      control={control}
      name={FormFields.LoanAmount}
      render={({ field }) => (
        <FormItem>
          <FormLabel>Сумма займа: {loanAmount}$</FormLabel>
          <FormControl>
            <Slider
              min={200}
              max={1000}
              step={100}
              onValueChange={(value) => field.onChange(value[0])}
              defaultValue={[field.value]}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};


import { useFormContext } from "react-hook-form";
import { FormFields } from "~/entities/loan";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/shared/ui/form/Form";
import { Input } from "~/shared/ui/input";

export const FirstNameField = () => {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={FormFields.FirstName}
      render={({ field }) => (
        <FormItem>
          <FormLabel>Имя</FormLabel>
          <FormControl>
            <Input placeholder="Ваше имя" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

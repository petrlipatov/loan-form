
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

export const LastNameField = () => {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={FormFields.LastName}
      render={({ field }) => (
        <FormItem>
          <FormLabel>Фамилия</FormLabel>
          <FormControl>
            <Input placeholder="Ваша фамилия" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

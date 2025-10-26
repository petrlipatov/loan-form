
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

export const AddressField = () => {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={FormFields.Address}
      render={({ field }) => (
        <FormItem>
          <FormLabel>Адрес проживания</FormLabel>
          <FormControl>
            <Input placeholder="Ваш адрес" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

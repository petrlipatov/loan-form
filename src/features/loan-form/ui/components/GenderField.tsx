
import { useFormContext } from "react-hook-form";
import { FormFields } from "~/entities/loan";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/shared/ui/form/Form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/shared/ui/select/Select";

export const GenderField = () => {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={FormFields.Gender}
      render={({ field }) => (
        <FormItem>
          <FormLabel>Пол</FormLabel>
          <Select
            onValueChange={(value) => {
              field.onChange(value);
              field.onBlur();
            }}
            value={field.value || ""}
          >
            <FormControl>
              <SelectTrigger onBlur={field.onBlur}>
                <SelectValue placeholder="Выберите ваш пол" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              <SelectItem value="Мужской">Мужской</SelectItem>
              <SelectItem value="Женский">Женский</SelectItem>
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

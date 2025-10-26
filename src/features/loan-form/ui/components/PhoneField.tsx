
import { useFormContext } from "react-hook-form";
import { FormFields } from "~/entities/loan";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/shared/ui/form/Form";
import { InputMask } from "~/shared/ui/input-mask/InputMask";

export const PhoneField = () => {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={FormFields.Phone}
      render={({ field: { onChange, onBlur, value, ref, name } }) => (
        <FormItem>
          <FormLabel>Телефон</FormLabel>
          <FormControl>
            <InputMask
              mask="+7 (000) 000-00-00"
              placeholder="+7 (XXX) XXX-XX-XX"
              value={value}
              onAccept={(val) => onChange(val)}
              onBlur={onBlur}
              name={name}
              ref={ref}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};


import { useFormContext } from "react-hook-form";
import { useWorkPlaces } from "~/entities/workplace/api/api";
import { Skeleton } from "~/shared/ui/skeleton/Skeleton";
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
import { FormFields } from "~/entities/loan";

export const WorkPlaceField = () => {
  const { control } = useFormContext();
  const { data: workPlaces, isLoading } = useWorkPlaces();

  return (
    <FormField
      control={control}
      name={FormFields.WorkPlace}
      render={({ field }) => (
        <FormItem>
          <FormLabel>Место работы</FormLabel>
          {isLoading ? (
            <Skeleton className="h-9 w-full" />
          ) : (
            <Select onValueChange={field.onChange} value={field.value || ""}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Выберите место работы" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {workPlaces?.map((place) => (
                  <SelectItem key={place.slug} value={place.name}>
                    {place.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

import { useEffect, useCallback } from "react";
import { useForm } from "react-hook-form";
import { debounce } from "~/shared/lib/utils";

export const useFormPersistence = <T extends Record<string, any>>(
  name: string,
  methods: ReturnType<typeof useForm<T>>,
  debounceTime = 500
) => {
  const { watch, reset } = methods;

  const getStorageKey = useCallback(() => `form-persistence-${name}`, [name]);

  useEffect(() => {
    try {
      const storedData = localStorage.getItem(getStorageKey());
      if (storedData) {
        reset(JSON.parse(storedData));
      }
    } catch (error) {
      console.error("Failed to read from localStorage:", error);
    }
  }, [name, reset, getStorageKey]);

  const debouncedSave = useCallback(
    debounce((data: T) => {
      try {
        localStorage.setItem(getStorageKey(), JSON.stringify(data));
      } catch (error) {
        console.error("Failed to write to localStorage:", error);
      }
    }, debounceTime),
    [name, getStorageKey, debounceTime]
  );

  useEffect(
    function subscribeToFormValuesChange() {
      const subscription = watch((value) => {
        debouncedSave(value as T);
      });
      return () => subscription.unsubscribe();
    },
    [watch, debouncedSave]
  );

  const clearStoredData = useCallback(() => {
    try {
      localStorage.removeItem(getStorageKey());
    } catch (error) {
      console.error("Failed to remove from localStorage:", error);
    }
  }, [getStorageKey]);

  return { clearStoredData };
};

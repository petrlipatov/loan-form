import { useMutation } from "@tanstack/react-query";
import { api } from "~/shared/api";

const submitLoanForm = async (data: { title: string }): Promise<any> => {
  const res = await api.post("/products/add", data);
  return res.data;
};

export const useSubmitLoanForm = (
  options?: Parameters<typeof useMutation<any, Error, { title: string }>>[0]
) => {
  return useMutation<any, Error, { title: string }>({
    mutationFn: submitLoanForm,
    ...options,
  });
};

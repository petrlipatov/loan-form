import { useQuery } from "@tanstack/react-query";
import { api } from "~/shared/api/api";
import { type WorkPlace } from "../model";

const getWorkPlaces = async (): Promise<WorkPlace[]> => {
  const res = await api.get("/products/categories");
  return res.data;
};

export const useWorkPlaces = () => {
  return useQuery<WorkPlace[], Error>({
    queryKey: ["workPlaces"],
    queryFn: getWorkPlaces,
    staleTime: 60 * 60 * 1000,
  });
};

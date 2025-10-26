import { z } from "zod";
import {
  personalDataSchema,
  addressSchema,
  loanParamsSchema,
  loanFormSchema,
} from "./schemas";

export type PersonalDataValues = z.infer<typeof personalDataSchema>;
export type AddressValues = z.infer<typeof addressSchema>;
export type LoanParamsValues = z.infer<typeof loanParamsSchema>;
export type LoanFormValues = z.infer<typeof loanFormSchema>;

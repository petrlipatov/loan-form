import { z } from "zod";

export const personalDataSchema = z.object({
  phone: z
    .string()
    .transform((val) => val.replace(/\D/g, ""))
    .pipe(z.string().length(11, { message: "Введите полный номер телефона" })),
  firstName: z.string().min(1, "Имя обязательно для заполнения"),
  lastName: z.string().min(1, "Фамилия обязательна для заполнения"),
  gender: z.enum(["Мужской", "Женский"], {
    message: "Выберите пол",
  }),
});

export const addressSchema = z.object({
  workPlace: z.string().min(1, "Место работы обязательно для заполнения"),
  address: z.string().min(1, "Адрес обязателен для заполнения"),
});

export const loanParamsSchema = z.object({
  loanAmount: z.number().min(200).max(1000),
  loanTerm: z.number().min(10).max(30),
});

export const loanFormSchema = z.object({
  ...personalDataSchema.shape,
  ...addressSchema.shape,
  ...loanParamsSchema.shape,
});

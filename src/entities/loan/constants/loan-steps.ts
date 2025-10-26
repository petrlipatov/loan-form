import type { FormStep } from "~/shared/providers/form-steps-provider";

export enum LoanFormStepPaths {
  PersonalData = "/loan",
  Address = "/loan/address",
  LoanParams = "/loan/params",
}

export const LOAN_FORM_STEPS: FormStep[] = [
  {
    path: LoanFormStepPaths.PersonalData,
    title: "Личные данные",
    description: "Заполните информацию о себе.",
  },
  {
    path: LoanFormStepPaths.Address,
    title: "Адрес и место работы",
    description: "Укажите ваш адрес и место работы.",
  },
  {
    path: LoanFormStepPaths.LoanParams,
    title: "Параметры займа",
    description: "Выберите желаемую сумму и срок.",
  },
];
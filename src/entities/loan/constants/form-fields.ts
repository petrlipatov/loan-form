export enum FormFields {
  FirstName = "firstName",
  LastName = "lastName",
  Phone = "phone",
  Gender = "gender",
  WorkPlace = "workPlace",
  Address = "address",
  LoanAmount = "loanAmount",
  LoanTerm = "loanTerm",
}

export const PERSONAL_DATA_FIELDS = [
  FormFields.FirstName,
  FormFields.LastName,
  FormFields.Phone,
  FormFields.Gender,
];
export const ADDRESS_FIELDS = [FormFields.WorkPlace, FormFields.Address];
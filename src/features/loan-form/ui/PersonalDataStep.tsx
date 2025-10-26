import {
  FirstNameField,
  GenderField,
  LastNameField,
  NavigationButtons,
  PhoneField,
} from "./components";
import { LoanFormStepPaths, PERSONAL_DATA_FIELDS } from "~/entities/loan";

export const PersonalDataStep = () => {
  return (
    <div className="space-y-4">
      <PhoneField />
      <FirstNameField />
      <LastNameField />
      <GenderField />
      <NavigationButtons
        next={LoanFormStepPaths.Address}
        fields={PERSONAL_DATA_FIELDS}
      />
    </div>
  );
};

import { ADDRESS_FIELDS, LoanFormStepPaths } from "~/entities/loan";
import { AddressField, NavigationButtons, WorkPlaceField } from "./components";

export const AddressStep = () => {
  return (
    <div className="space-y-4">
      <WorkPlaceField />
      <AddressField />
      <NavigationButtons
        back={LoanFormStepPaths.PersonalData}
        next={LoanFormStepPaths.LoanParams}
        fields={ADDRESS_FIELDS}
      />
    </div>
  );
};

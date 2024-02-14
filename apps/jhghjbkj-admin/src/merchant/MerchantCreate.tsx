import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
  SelectInput,
} from "react-admin";

export const MerchantCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="brand" source="brand" />
        <TextInput label="brandName" source="brandName" />
        <TextInput label="business" source="business" />
        <TextInput label="email" source="email" type="email" />
        <BooleanInput label="isActive" source="isActive" />
        <TextInput label="name" source="name" />
        <TextInput label="phoneNumber" source="phoneNumber" />
        <SelectInput
          source="status"
          label="status"
          choices={[
            { label: "Waiting_Approval", value: "WaitingApproval" },
            { label: "Rejected", value: "Rejected" },
            { label: "Approved", value: "Approved" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};

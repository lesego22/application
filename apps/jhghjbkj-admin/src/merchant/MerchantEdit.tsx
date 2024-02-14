import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
  SelectInput,
} from "react-admin";

export const MerchantEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};

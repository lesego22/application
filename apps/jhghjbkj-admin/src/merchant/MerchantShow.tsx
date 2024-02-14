import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";

export const MerchantShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="brand" source="brand" />
        <TextField label="brandName" source="brandName" />
        <TextField label="business" source="business" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="email" source="email" />
        <TextField label="ID" source="id" />
        <BooleanField label="isActive" source="isActive" />
        <TextField label="name" source="name" />
        <TextField label="phoneNumber" source="phoneNumber" />
        <TextField label="status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};

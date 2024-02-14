import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
} from "react-admin";

export const BrandCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <TextInput label="image" source="image" />
        <BooleanInput label="isActive" source="isActive" />
        <TextInput label="merchant" source="merchant" />
        <TextInput label="name" source="name" />
        <TextInput label="slug" source="slug" />
      </SimpleForm>
    </Create>
  );
};

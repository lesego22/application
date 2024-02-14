import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const MerchantList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"merchants"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};

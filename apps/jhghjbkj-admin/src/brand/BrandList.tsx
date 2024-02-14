import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const BrandList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"brands"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="image" source="image" />
        <BooleanField label="isActive" source="isActive" />
        <TextField label="merchant" source="merchant" />
        <TextField label="name" source="name" />
        <TextField label="slug" source="slug" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};

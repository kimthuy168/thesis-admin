import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const CouponList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={true}
      title={"Coupons"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Code" source="code" />
        <TextField label="couponType" source="couponType" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="End Date" source="endDate" />
        <TextField label="ID" source="id" />
        <TextField label="Limit" source="limit" />
        <TextField label="Start Date" source="startDate" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Used" source="used" />
        <TextField label="value" source="value" />
      </Datagrid>
    </List>
  );
};

import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const BannerList = (props: ListProps): React.ReactElement => {
  return (
    <>
      <List
        {...props}
        bulkActionButtons={true}
        title={"Banners"}
        perPage={50}
        pagination={<Pagination />}
      >
        <Datagrid rowClick="show">
          <TextField label="Banner Type" source="bannerType" />
          <DateField source="createdAt" label="Created At" />
          <DateField label="End Date" source="endDate" />
          <TextField label="foreignKey" source="foreignKey" />
          <TextField label="forField" source="forField" />
          <TextField label="ID" source="id" />
          <TextField label="Image" source="image" />
          <TextField label="Name" source="name" />
          <DateField label="Start Date" source="startDate" />
          <DateField source="updatedAt" label="Updated At" />
        </Datagrid>
      </List>
    </>
  );
};

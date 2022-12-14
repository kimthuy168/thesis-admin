import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { MERCHANTCATEGORY_TITLE_FIELD } from "../merchantCategory/MerchantCategoryTitle";

export const MerchantList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={true}
      title={"Merchants"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Address" source="address" />
        <TextField label="Base Delivery Fee" source="baseDeliveryFee" />
        <TextField label="Coordinate" source="coordinate" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="Image" source="image" />
        <ReferenceField
          label="Category"
          source="merchantcategory.id"
          reference="MerchantCategory"
        >
          <TextField source={MERCHANTCATEGORY_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Name" source="name" />
        <TextField label="Operation End" source="operationEnd" />
        <TextField label="Operation Start" source="operationStart" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};

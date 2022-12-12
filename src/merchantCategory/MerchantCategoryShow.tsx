import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { MERCHANTCATEGORY_TITLE_FIELD } from "./MerchantCategoryTitle";

export const MerchantCategoryShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="Image" source="image" />
        <TextField label="Name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Merchant"
          target="MerchantCategoryId"
          label="Merchants"
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};

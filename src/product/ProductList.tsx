import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
  TabbedForm,
  ReferenceManyField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { MERCHANT_TITLE_FIELD } from "../merchant/MerchantTitle";
import { PRODUCTTRACKING_TITLE_FIELD } from "../productTracking/ProductTrackingTitle";

export const ProductList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Products"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Base Price" source="basePrice" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="Image" source="image" />
        <ReferenceField
          label="Merchant"
          source="merchant.id"
          reference="Merchant"
        >
          <TextField source={MERCHANT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Name" source="name" />
        <ReferenceField
          label="Product Count"
          source="producttracking.id"
          reference="ProductTracking"
        >
          <TextField source={PRODUCTTRACKING_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};

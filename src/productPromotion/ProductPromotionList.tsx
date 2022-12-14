import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { PRODUCT_TITLE_FIELD } from "../product/ProductTitle";

export const ProductPromotionList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={true}
      title={"Product Promotions"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="End Date" source="endDate" />
        <TextField label="ID" source="id" />
        <TextField label="Label" source="label" />
        <ReferenceField label="Product" source="product.id" reference="Product">
          <TextField source={PRODUCT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Promotion Type" source="promotionType" />
        <TextField label="Start Date" source="startDate" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Value" source="value" />
      </Datagrid>
    </List>
  );
};

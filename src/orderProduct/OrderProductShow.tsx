import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { ORDERPRODUCT_TITLE_FIELD } from "./OrderProductTitle";
import { PRODUCTTRACKING_TITLE_FIELD } from "../productTracking/ProductTrackingTitle";
import { ORDER_TITLE_FIELD } from "../order/OrderTitle";

export const OrderProductShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Amount" source="amount" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Order" source="order.id" reference="Order">
          <TextField source={ORDER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Total Price" source="totalPrice" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Product"
          target="OrderProductId"
          label="Products"
        >
          <Datagrid rowClick="show">
            <TextField label="Base Price" source="basePrice" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Description" source="description" />
            <TextField label="ID" source="id" />
            <TextField label="Image" source="image" />
            <TextField label="Name" source="name" />
            <ReferenceField
              label="Order Products"
              source="orderproduct.id"
              reference="OrderProduct"
            >
              <TextField source={ORDERPRODUCT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Product Count"
              source="producttracking.id"
              reference="ProductTracking"
            >
              <TextField source={PRODUCTTRACKING_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};

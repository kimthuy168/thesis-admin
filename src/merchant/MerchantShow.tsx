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
  BooleanField,
} from "react-admin";

import { MERCHANT_TITLE_FIELD } from "./MerchantTitle";
import { ORDER_TITLE_FIELD } from "../order/OrderTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { CART_TITLE_FIELD } from "../cart/CartTitle";
import { COUPON_TITLE_FIELD } from "../coupon/CouponTitle";
import { PRODUCTTRACKING_TITLE_FIELD } from "../productTracking/ProductTrackingTitle";
import { MERCHANTCATEGORY_TITLE_FIELD } from "../merchantCategory/MerchantCategoryTitle";

export const MerchantShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField reference="Cart" target="MerchantId" label="Carts">
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <BooleanField label="isCheckout" source="isCheckout" />
            <ReferenceField
              label="Merchant"
              source="merchant.id"
              reference="Merchant"
            >
              <TextField source={MERCHANT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Orders" source="order.id" reference="Order">
              <TextField source={ORDER_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Order"
          target="MerchantId"
          label="Orders"
        >
          <Datagrid rowClick="show">
            <ReferenceField label="Cart" source="cart.id" reference="Cart">
              <TextField source={CART_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Coupon"
              source="coupon.id"
              reference="Coupon"
            >
              <TextField source={COUPON_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="Discount" source="discount" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Merchant"
              source="merchant.id"
              reference="Merchant"
            >
              <TextField source={MERCHANT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Subtotal" source="subtotal" />
            <TextField label="Tax" source="tax" />
            <TextField label="Total" source="total" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Product"
          target="MerchantId"
          label="Products"
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};

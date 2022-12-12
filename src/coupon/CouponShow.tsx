import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { CART_TITLE_FIELD } from "../cart/CartTitle";
import { COUPON_TITLE_FIELD } from "./CouponTitle";
import { MERCHANT_TITLE_FIELD } from "../merchant/MerchantTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const CouponShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField reference="Order" target="CouponId" label="Orders">
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
      </SimpleShowLayout>
    </Show>
  );
};

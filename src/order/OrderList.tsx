import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { CART_TITLE_FIELD } from "../cart/CartTitle";
import { COUPON_TITLE_FIELD } from "../coupon/CouponTitle";
import { MERCHANT_TITLE_FIELD } from "../merchant/MerchantTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const OrderList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={true}
      title={"Orders"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <ReferenceField label="Cart" source="cart.id" reference="Cart">
          <TextField source={CART_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Coupon" source="coupon.id" reference="Coupon">
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
    </List>
  );
};

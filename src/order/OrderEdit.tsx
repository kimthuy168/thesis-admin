import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";
import { CartTitle } from "../cart/CartTitle";
import { CouponTitle } from "../coupon/CouponTitle";
import { MerchantTitle } from "../merchant/MerchantTitle";
import { UserTitle } from "../user/UserTitle";

export const OrderEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          style={{
            width: "50%",
            marginLeft: "20%",
          }}
          source="cart.id"
          reference="Cart"
          label="Cart"
        >
          <SelectInput optionText={CartTitle} />
        </ReferenceInput>
        <ReferenceInput
          style={{
            width: "50%",
            marginLeft: "20%",
          }}
          source="coupon.id"
          reference="Coupon"
          label="Coupon"
        >
          <SelectInput optionText={CouponTitle} />
        </ReferenceInput>
        <NumberInput
          style={{
            width: "50%",
            marginLeft: "20%",
          }}
          label="Discount"
          source="discount"
        />
        <ReferenceInput
          style={{
            width: "50%",
            marginLeft: "20%",
          }}
          source="merchant.id"
          reference="Merchant"
          label="Merchant"
        >
          <SelectInput optionText={MerchantTitle} />
        </ReferenceInput>
        <NumberInput
          style={{
            width: "50%",
            marginLeft: "20%",
          }}
          label="Subtotal"
          source="subtotal"
        />
        <NumberInput
          style={{
            width: "50%",
            marginLeft: "20%",
          }}
          label="Tax"
          source="tax"
        />
        <NumberInput
          style={{
            width: "50%",
            marginLeft: "20%",
          }}
          label="Total"
          source="total"
        />
        <ReferenceInput
          style={{
            width: "50%",
            marginLeft: "20%",
          }}
          source="user.id"
          reference="User"
          label="User"
        >
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};

import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { CartProductTitle } from "../cartProduct/CartProductTitle";
import { MerchantTitle } from "../merchant/MerchantTitle";
import { OrderTitle } from "../order/OrderTitle";
import { UserTitle } from "../user/UserTitle";

export const CartCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          style={{
            width: "50%",
            marginLeft: "20%",
          }}
          source="cartProducts"
          reference="CartProduct"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CartProductTitle} />
        </ReferenceArrayInput>
        <BooleanInput
          style={{
            width: "50%",
            marginLeft: "20%",
          }}
          label="isCheckout"
          source="isCheckout"
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
        <ReferenceInput
          style={{
            width: "50%",
            marginLeft: "20%",
          }}
          source="order.id"
          reference="Order"
          label="Orders"
        >
          <SelectInput optionText={OrderTitle} />
        </ReferenceInput>
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
    </Create>
  );
};

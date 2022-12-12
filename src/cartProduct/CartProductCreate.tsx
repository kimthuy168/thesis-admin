import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { CartTitle } from "../cart/CartTitle";
import { ProductTitle } from "../product/ProductTitle";

export const CartProductCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput
          style={{
            width: "50%",
            marginLeft: "20%",
          }}
          step={1}
          label="Amount"
          source="amount"
        />
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
          source="product.id"
          reference="Product"
          label="Product"
        >
          <SelectInput optionText={ProductTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};

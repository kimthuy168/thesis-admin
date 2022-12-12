import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { OrderTitle } from "../order/OrderTitle";
import { ProductTitle } from "../product/ProductTitle";

export const OrderProductEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
          source="order.id"
          reference="Order"
          label="Order"
        >
          <SelectInput optionText={OrderTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          style={{
            width: "50%",
            marginLeft: "20%",
          }}
          source="products"
          reference="Product"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProductTitle} />
        </ReferenceArrayInput>
        <NumberInput
          style={{
            width: "50%",
            marginLeft: "20%",
          }}
          label="Total Price"
          source="totalPrice"
        />
      </SimpleForm>
    </Edit>
  );
};

import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

// import { CartTitle } from "../cart/CartTitle";
import { MerchantCategoryTitle } from "../merchantCategory/MerchantCategoryTitle";
import { OrderTitle } from "../order/OrderTitle";
import { ProductTitle } from "../product/ProductTitle";

export const MerchantEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput
          style={{
            width: "50%",
            marginLeft: "20%",
          }}
          label="Address"
          source="address"
        />
        <NumberInput
          style={{
            width: "50%",
            marginLeft: "20%",
          }}
          label="Base Delivery Fee"
          source="baseDeliveryFee"
        />
        {/* <ReferenceArrayInput
          source="carts"
          reference="Cart"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CartTitle} />
        </ReferenceArrayInput> */}
        {/* <TextInput 
        label="Coordinate" 
        source="coordinate" /> */}
        <TextInput
          style={{
            width: "50%",
            marginLeft: "20%",
          }}
          label="Description"
          multiline
          source="description"
        />
        <TextInput
          style={{
            width: "50%",
            marginLeft: "20%",
          }}
          label="Image"
          source="image"
        />
        <ReferenceInput
          style={{
            width: "50%",
            marginLeft: "20%",
          }}
          source="merchantcategory.id"
          reference="MerchantCategory"
          label="Category"
        >
          <SelectInput optionText={MerchantCategoryTitle} />
        </ReferenceInput>
        <TextInput
          style={{
            width: "50%",
            marginLeft: "20%",
          }}
          label="Name"
          source="name"
        />
        <DateTimeInput
          style={{
            width: "50%",
            marginLeft: "20%",
          }}
          label="Operation End"
          source="operationEnd"
        />
        <DateTimeInput
          style={{
            width: "50%",
            marginLeft: "20%",
          }}
          label="Operation Start"
          source="operationStart"
        />
        <ReferenceArrayInput
          style={{
            width: "50%",
            marginLeft: "20%",
          }}
          source="orders"
          reference="Order"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OrderTitle} />
        </ReferenceArrayInput>
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
      </SimpleForm>
    </Edit>
  );
};

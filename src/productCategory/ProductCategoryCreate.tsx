import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ProductTitle } from "../product/ProductTitle";

export const ProductCategoryCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
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
        <TextInput
          style={{
            width: "50%",
            marginLeft: "20%",
          }}
          label="Name"
          source="name"
        />
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
    </Create>
  );
};

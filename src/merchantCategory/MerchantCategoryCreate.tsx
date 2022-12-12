import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { MerchantTitle } from "../merchant/MerchantTitle";

export const MerchantCategoryCreate = (
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
        <ReferenceArrayInput
          style={{
            width: "50%",
            marginLeft: "20%",
          }}
          source="merchants"
          reference="Merchant"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MerchantTitle} />
        </ReferenceArrayInput>
        <TextInput
          style={{
            width: "50%",
            marginLeft: "20%",
          }}
          label="Name"
          source="name"
        />
      </SimpleForm>
    </Create>
  );
};

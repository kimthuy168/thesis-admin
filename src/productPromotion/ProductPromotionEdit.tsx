import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { ProductTitle } from "../product/ProductTitle";

export const ProductPromotionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput
          style={{
            width: "50%",
            marginLeft: "20%",
          }}
          label="End Date"
          source="endDate"
        />
        <TextInput
          style={{
            width: "50%",
            marginLeft: "20%",
          }}
          label="Label"
          source="label"
        />
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
        <SelectInput
          style={{
            width: "50%",
            marginLeft: "20%",
          }}
          source="promotionType"
          label="Promotion Type"
          choices={[
            { label: "discount", value: "Discount" },
            { label: "raw", value: "Raw" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <DateTimeInput
          style={{
            width: "50%",
            marginLeft: "20%",
          }}
          label="Start Date"
          source="startDate"
        />
        <NumberInput
          style={{
            width: "50%",
            marginLeft: "20%",
          }}
          label="Value"
          source="value"
        />
      </SimpleForm>
    </Edit>
  );
};

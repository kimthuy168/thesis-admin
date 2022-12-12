import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ProductTitle } from "../product/ProductTitle";

export const ProductTrackingEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput
          style={{
            width: "50%",
            marginLeft: "20%",
          }}
          step={1}
          label="Likes"
          source="likes"
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
        <NumberInput
          style={{
            width: "50%",
            marginLeft: "20%",
          }}
          step={1}
          label="Shares"
          source="shares"
        />
        <NumberInput
          style={{
            width: "50%",
            marginLeft: "20%",
          }}
          step={1}
          label="Sold Quantity"
          source="soldQuantity"
        />
      </SimpleForm>
    </Edit>
  );
};

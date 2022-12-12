import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  SelectInput,
  DateTimeInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { OrderTitle } from "../order/OrderTitle";

export const CouponEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput
          style={{
            width: "50%",
            marginLeft: "20%",
          }}
          label="Code"
          source="code"
        />
        <SelectInput
          style={{
            width: "50%",
            marginLeft: "20%",
          }}
          source="couponType"
          label="couponType"
          choices={[
            { label: "Raw", value: "raw" },
            { label: "Percent", value: "Percent" },
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
          label="End Date"
          source="endDate"
        />
        <NumberInput
          style={{
            width: "50%",
            marginLeft: "20%",
          }}
          step={1}
          label="Limit"
          source="limit"
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
          step={1}
          label="Used"
          source="used"
        />
        <NumberInput
          style={{
            width: "50%",
            marginLeft: "20%",
          }}
          label="value"
          source="value"
        />
      </SimpleForm>
    </Edit>
  );
};

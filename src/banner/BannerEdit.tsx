import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  SelectInput,
  DateTimeInput,
  TextInput,
} from "react-admin";
export const BannerEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput
          style={{
            width: "50%",
            marginLeft: "20%",
          }}
          label="Name"
          source="name"
        />
        <SelectInput
          style={{
            width: "50%",
            marginLeft: "20%",
          }}
          source="bannerType"
          label="Banner Type"
          choices={[
            { label: "Buy 1 Free 1", value: "Buy 1 Free 1" },
            { label: "Discount ", value: "Discount" },
            { label: "Shop Event", value: "Shop Event" },
            { label: "Holiday", value: "Holiday" },
          ]}
          optionText="label"
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
          label="foreignKey"
          source="foreignKey"
        />
        <SelectInput
          style={{
            width: "50%",
            marginLeft: "20%",
          }}
          source="forField"
          label="forField"
          choices={[
            { label: "Merchant", value: "Merchant" },
            { label: "Product", value: "Product" },
            { label: "None", value: "None" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput
          style={{
            width: "50%",
            marginLeft: "20%",
          }}
          label="Image"
          source="image"
        />
      </SimpleForm>
    </Edit>
  );
};

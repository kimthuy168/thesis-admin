import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  PasswordInput,
} from "react-admin";

import { CartTitle } from "../cart/CartTitle";
import { OrderTitle } from "../order/OrderTitle";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          style={{
            width: "50%",
            marginLeft: "20%",
          }}
          source="carts"
          reference="Cart"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CartTitle} />
        </ReferenceArrayInput>
        <TextInput
          style={{
            width: "50%",
            marginLeft: "20%",
          }}
          label="Email"
          source="email"
          type="email"
        />
        <TextInput
          style={{
            width: "50%",
            marginLeft: "20%",
          }}
          label="First Name"
          source="firstName"
        />
        <TextInput
          style={{
            width: "50%",
            marginLeft: "20%",
          }}
          label="Last Name"
          source="lastName"
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
        <PasswordInput
          style={{
            width: "50%",
            marginLeft: "20%",
          }}
          label="Password"
          source="password"
        />
        <TextInput
          style={{
            width: "50%",
            marginLeft: "20%",
          }}
          label="Phone"
          source="phone"
        />
        <TextInput
          style={{
            width: "50%",
            marginLeft: "20%",
          }}
          label="Profile"
          source="profile"
        />
        <SelectArrayInput
          style={{
            width: "50%",
            marginLeft: "20%",
          }}
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <TextInput
          style={{
            width: "50%",
            marginLeft: "20%",
          }}
          label="Username"
          source="username"
        />
      </SimpleForm>
    </Edit>
  );
};

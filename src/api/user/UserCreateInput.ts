import { CartCreateNestedManyWithoutUsersInput } from "./CartCreateNestedManyWithoutUsersInput";
import { OrderCreateNestedManyWithoutUsersInput } from "./OrderCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  carts?: CartCreateNestedManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  orders?: OrderCreateNestedManyWithoutUsersInput;
  password: string;
  phone?: string | null;
  profile?: string | null;
  roles: Array<string>;
  username: string;
};

import { CartUpdateManyWithoutUsersInput } from "./CartUpdateManyWithoutUsersInput";
import { OrderUpdateManyWithoutUsersInput } from "./OrderUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  carts?: CartUpdateManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  orders?: OrderUpdateManyWithoutUsersInput;
  password?: string;
  phone?: string | null;
  profile?: string | null;
  roles?: Array<string>;
  username?: string;
};

import { Cart } from "../cart/Cart";
import { Order } from "../order/Order";

export type User = {
  carts?: Array<Cart>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  orders?: Array<Order>;
  phone: string | null;
  profile: string | null;
  roles: Array<string>;
  updatedAt: Date;
  username: string;
};

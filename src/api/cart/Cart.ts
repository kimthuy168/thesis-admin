import { CartProduct } from "../cartProduct/CartProduct";
import { Merchant } from "../merchant/Merchant";
import { Order } from "../order/Order";
import { User } from "../user/User";

export type Cart = {
  cartProducts?: Array<CartProduct>;
  createdAt: Date;
  id: string;
  isCheckout: boolean | null;
  merchant?: Merchant | null;
  orders?: Order | null;
  updatedAt: Date;
  user?: User | null;
};

import { Cart } from "../cart/Cart";
import { Coupon } from "../coupon/Coupon";
import { Merchant } from "../merchant/Merchant";
import { User } from "../user/User";

export type Order = {
  cart?: Cart | null;
  coupon?: Coupon | null;
  createdAt: Date;
  discount: number | null;
  id: string;
  merchant?: Merchant | null;
  subtotal: number | null;
  tax: number | null;
  total: number | null;
  updatedAt: Date;
  user?: User | null;
};

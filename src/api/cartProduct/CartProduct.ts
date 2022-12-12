import { Cart } from "../cart/Cart";
import { Product } from "../product/Product";

export type CartProduct = {
  amount: number | null;
  cart?: Cart | null;
  createdAt: Date;
  id: string;
  product?: Product | null;
  updatedAt: Date;
};

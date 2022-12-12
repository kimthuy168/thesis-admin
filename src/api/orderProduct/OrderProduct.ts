import { Order } from "../order/Order";
import { Product } from "../product/Product";

export type OrderProduct = {
  amount: number | null;
  createdAt: Date;
  id: string;
  order?: Order | null;
  products?: Array<Product>;
  totalPrice: number | null;
  updatedAt: Date;
};

import { Cart } from "../cart/Cart";
import { MerchantCategory } from "../merchantCategory/MerchantCategory";
import { Order } from "../order/Order";
import { Product } from "../product/Product";

export type Merchant = {
  address: string | null;
  baseDeliveryFee: number | null;
  carts?: Array<Cart>;
  coordinate: string | null;
  createdAt: Date;
  description: string | null;
  id: string;
  image: string | null;
  merchantCategory?: MerchantCategory | null;
  name: string;
  operationEnd: Date | null;
  operationStart: Date | null;
  orders?: Array<Order>;
  products?: Array<Product>;
  updatedAt: Date;
};

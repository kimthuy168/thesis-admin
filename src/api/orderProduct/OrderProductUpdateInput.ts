import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { ProductUpdateManyWithoutOrderProductsInput } from "./ProductUpdateManyWithoutOrderProductsInput";

export type OrderProductUpdateInput = {
  amount?: number | null;
  order?: OrderWhereUniqueInput | null;
  products?: ProductUpdateManyWithoutOrderProductsInput;
  totalPrice?: number | null;
};

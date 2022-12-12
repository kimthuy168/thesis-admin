import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { ProductCreateNestedManyWithoutOrderProductsInput } from "./ProductCreateNestedManyWithoutOrderProductsInput";

export type OrderProductCreateInput = {
  amount?: number | null;
  order?: OrderWhereUniqueInput | null;
  products?: ProductCreateNestedManyWithoutOrderProductsInput;
  totalPrice?: number | null;
};

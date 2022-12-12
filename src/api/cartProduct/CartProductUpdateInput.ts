import { CartWhereUniqueInput } from "../cart/CartWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type CartProductUpdateInput = {
  amount?: number | null;
  cart?: CartWhereUniqueInput | null;
  product?: ProductWhereUniqueInput | null;
};

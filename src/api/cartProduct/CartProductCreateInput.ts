import { CartWhereUniqueInput } from "../cart/CartWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type CartProductCreateInput = {
  amount?: number | null;
  cart?: CartWhereUniqueInput | null;
  product?: ProductWhereUniqueInput | null;
};

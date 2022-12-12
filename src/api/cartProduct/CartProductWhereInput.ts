import { IntNullableFilter } from "../../util/IntNullableFilter";
import { CartWhereUniqueInput } from "../cart/CartWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type CartProductWhereInput = {
  amount?: IntNullableFilter;
  cart?: CartWhereUniqueInput;
  id?: StringFilter;
  product?: ProductWhereUniqueInput;
};

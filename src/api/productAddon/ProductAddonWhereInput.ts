import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type ProductAddonWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  price?: FloatNullableFilter;
  product?: ProductWhereUniqueInput;
};

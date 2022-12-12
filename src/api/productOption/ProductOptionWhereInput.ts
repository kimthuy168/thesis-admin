import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type ProductOptionWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  options?: JsonFilter;
  product?: ProductWhereUniqueInput;
};

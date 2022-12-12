import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type ProductTrackingWhereInput = {
  id?: StringFilter;
  likes?: IntNullableFilter;
  product?: ProductWhereUniqueInput;
  shares?: IntNullableFilter;
  soldQuantity?: IntNullableFilter;
};

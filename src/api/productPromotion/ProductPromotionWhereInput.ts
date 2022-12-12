import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type ProductPromotionWhereInput = {
  endDate?: DateTimeNullableFilter;
  id?: StringFilter;
  label?: StringNullableFilter;
  product?: ProductWhereUniqueInput;
  promotionType?: "Discount" | "Raw";
  startDate?: DateTimeNullableFilter;
  value?: FloatNullableFilter;
};

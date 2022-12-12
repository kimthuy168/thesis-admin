import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type CouponWhereInput = {
  code?: StringNullableFilter;
  couponType?: "raw" | "Percent";
  endDate?: DateTimeNullableFilter;
  id?: StringFilter;
  limit?: IntNullableFilter;
  orders?: OrderListRelationFilter;
  startDate?: DateTimeNullableFilter;
  used?: IntNullableFilter;
  value?: FloatNullableFilter;
};

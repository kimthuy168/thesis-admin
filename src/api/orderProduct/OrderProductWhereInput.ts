import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type OrderProductWhereInput = {
  amount?: IntNullableFilter;
  id?: StringFilter;
  order?: OrderWhereUniqueInput;
  products?: ProductListRelationFilter;
  totalPrice?: FloatNullableFilter;
};

import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CartListRelationFilter } from "../cart/CartListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { MerchantCategoryWhereUniqueInput } from "../merchantCategory/MerchantCategoryWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";

export type MerchantWhereInput = {
  address?: StringNullableFilter;
  carts?: CartListRelationFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  image?: StringNullableFilter;
  merchantCategory?: MerchantCategoryWhereUniqueInput;
  name?: StringFilter;
  operationEnd?: DateTimeNullableFilter;
  operationStart?: DateTimeNullableFilter;
  orders?: OrderListRelationFilter;
  products?: ProductListRelationFilter;
};

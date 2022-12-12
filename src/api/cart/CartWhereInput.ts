import { CartProductListRelationFilter } from "../cartProduct/CartProductListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { MerchantWhereUniqueInput } from "../merchant/MerchantWhereUniqueInput";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CartWhereInput = {
  cartProducts?: CartProductListRelationFilter;
  id?: StringFilter;
  isCheckout?: BooleanNullableFilter;
  merchant?: MerchantWhereUniqueInput;
  orders?: OrderWhereUniqueInput;
  user?: UserWhereUniqueInput;
};

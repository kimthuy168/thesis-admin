import { CartWhereUniqueInput } from "../cart/CartWhereUniqueInput";
import { CouponWhereUniqueInput } from "../coupon/CouponWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MerchantWhereUniqueInput } from "../merchant/MerchantWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderWhereInput = {
  cart?: CartWhereUniqueInput;
  coupon?: CouponWhereUniqueInput;
  discount?: FloatNullableFilter;
  id?: StringFilter;
  merchant?: MerchantWhereUniqueInput;
  subtotal?: FloatNullableFilter;
  tax?: FloatNullableFilter;
  total?: FloatNullableFilter;
  user?: UserWhereUniqueInput;
};

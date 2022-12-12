import { CartWhereUniqueInput } from "../cart/CartWhereUniqueInput";
import { CouponWhereUniqueInput } from "../coupon/CouponWhereUniqueInput";
import { MerchantWhereUniqueInput } from "../merchant/MerchantWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderUpdateInput = {
  cart?: CartWhereUniqueInput | null;
  coupon?: CouponWhereUniqueInput | null;
  discount?: number | null;
  merchant?: MerchantWhereUniqueInput | null;
  subtotal?: number | null;
  tax?: number | null;
  total?: number | null;
  user?: UserWhereUniqueInput | null;
};

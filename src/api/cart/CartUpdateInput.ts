import { CartProductUpdateManyWithoutCartsInput } from "./CartProductUpdateManyWithoutCartsInput";
import { MerchantWhereUniqueInput } from "../merchant/MerchantWhereUniqueInput";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CartUpdateInput = {
  cartProducts?: CartProductUpdateManyWithoutCartsInput;
  isCheckout?: boolean | null;
  merchant?: MerchantWhereUniqueInput | null;
  orders?: OrderWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};

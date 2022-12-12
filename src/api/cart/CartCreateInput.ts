import { CartProductCreateNestedManyWithoutCartsInput } from "./CartProductCreateNestedManyWithoutCartsInput";
import { MerchantWhereUniqueInput } from "../merchant/MerchantWhereUniqueInput";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CartCreateInput = {
  cartProducts?: CartProductCreateNestedManyWithoutCartsInput;
  isCheckout?: boolean | null;
  merchant?: MerchantWhereUniqueInput | null;
  orders?: OrderWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};

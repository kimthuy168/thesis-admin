import { CartUpdateManyWithoutMerchantsInput } from "./CartUpdateManyWithoutMerchantsInput";
import { MerchantCategoryWhereUniqueInput } from "../merchantCategory/MerchantCategoryWhereUniqueInput";
import { OrderUpdateManyWithoutMerchantsInput } from "./OrderUpdateManyWithoutMerchantsInput";
import { ProductUpdateManyWithoutMerchantsInput } from "./ProductUpdateManyWithoutMerchantsInput";

export type MerchantUpdateInput = {
  address?: string | null;
  baseDeliveryFee?: number | null;
  carts?: CartUpdateManyWithoutMerchantsInput;
  coordinate?: string | null;
  description?: string | null;
  image?: string | null;
  merchantCategory?: MerchantCategoryWhereUniqueInput | null;
  name?: string;
  operationEnd?: Date | null;
  operationStart?: Date | null;
  orders?: OrderUpdateManyWithoutMerchantsInput;
  products?: ProductUpdateManyWithoutMerchantsInput;
};

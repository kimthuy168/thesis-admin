import { CartCreateNestedManyWithoutMerchantsInput } from "./CartCreateNestedManyWithoutMerchantsInput";
import { MerchantCategoryWhereUniqueInput } from "../merchantCategory/MerchantCategoryWhereUniqueInput";
import { OrderCreateNestedManyWithoutMerchantsInput } from "./OrderCreateNestedManyWithoutMerchantsInput";
import { ProductCreateNestedManyWithoutMerchantsInput } from "./ProductCreateNestedManyWithoutMerchantsInput";

export type MerchantCreateInput = {
  address?: string | null;
  baseDeliveryFee?: number | null;
  carts?: CartCreateNestedManyWithoutMerchantsInput;
  coordinate?: string | null;
  description?: string | null;
  image?: string | null;
  merchantCategory?: MerchantCategoryWhereUniqueInput | null;
  name: string;
  operationEnd?: Date | null;
  operationStart?: Date | null;
  orders?: OrderCreateNestedManyWithoutMerchantsInput;
  products?: ProductCreateNestedManyWithoutMerchantsInput;
};

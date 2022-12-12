import { CartProductUpdateManyWithoutProductsInput } from "./CartProductUpdateManyWithoutProductsInput";
import { MerchantWhereUniqueInput } from "../merchant/MerchantWhereUniqueInput";
import { ProductAddonUpdateManyWithoutProductsInput } from "./ProductAddonUpdateManyWithoutProductsInput";
import { ProductCategoryUpdateManyWithoutProductsInput } from "./ProductCategoryUpdateManyWithoutProductsInput";
import { ProductTrackingWhereUniqueInput } from "../productTracking/ProductTrackingWhereUniqueInput";
import { ProductOptionUpdateManyWithoutProductsInput } from "./ProductOptionUpdateManyWithoutProductsInput";
import { ProductPromotionUpdateManyWithoutProductsInput } from "./ProductPromotionUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  basePrice?: number;
  cartProducts?: CartProductUpdateManyWithoutProductsInput;
  description?: string;
  image?: string | null;
  merchant?: MerchantWhereUniqueInput | null;
  name?: string;
  productAddons?: ProductAddonUpdateManyWithoutProductsInput;
  productCategory?: ProductCategoryUpdateManyWithoutProductsInput;
  productCount?: ProductTrackingWhereUniqueInput | null;
  productOptions?: ProductOptionUpdateManyWithoutProductsInput;
  productPromotions?: ProductPromotionUpdateManyWithoutProductsInput;
};

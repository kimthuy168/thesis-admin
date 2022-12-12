import { CartProductCreateNestedManyWithoutProductsInput } from "./CartProductCreateNestedManyWithoutProductsInput";
import { MerchantWhereUniqueInput } from "../merchant/MerchantWhereUniqueInput";
import { ProductAddonCreateNestedManyWithoutProductsInput } from "./ProductAddonCreateNestedManyWithoutProductsInput";
import { ProductCategoryCreateNestedManyWithoutProductsInput } from "./ProductCategoryCreateNestedManyWithoutProductsInput";
import { ProductTrackingWhereUniqueInput } from "../productTracking/ProductTrackingWhereUniqueInput";
import { ProductOptionCreateNestedManyWithoutProductsInput } from "./ProductOptionCreateNestedManyWithoutProductsInput";
import { ProductPromotionCreateNestedManyWithoutProductsInput } from "./ProductPromotionCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  basePrice: number;
  cartProducts?: CartProductCreateNestedManyWithoutProductsInput;
  description: string;
  image?: string | null;
  merchant?: MerchantWhereUniqueInput | null;
  name: string;
  productAddons?: ProductAddonCreateNestedManyWithoutProductsInput;
  productCategory?: ProductCategoryCreateNestedManyWithoutProductsInput;
  productCount?: ProductTrackingWhereUniqueInput | null;
  productOptions?: ProductOptionCreateNestedManyWithoutProductsInput;
  productPromotions?: ProductPromotionCreateNestedManyWithoutProductsInput;
};

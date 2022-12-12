import { FloatFilter } from "../../util/FloatFilter";
import { CartProductListRelationFilter } from "../cartProduct/CartProductListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { MerchantWhereUniqueInput } from "../merchant/MerchantWhereUniqueInput";
import { ProductAddonListRelationFilter } from "../productAddon/ProductAddonListRelationFilter";
import { ProductCategoryListRelationFilter } from "../productCategory/ProductCategoryListRelationFilter";
import { ProductTrackingWhereUniqueInput } from "../productTracking/ProductTrackingWhereUniqueInput";
import { ProductOptionListRelationFilter } from "../productOption/ProductOptionListRelationFilter";
import { ProductPromotionListRelationFilter } from "../productPromotion/ProductPromotionListRelationFilter";

export type ProductWhereInput = {
  basePrice?: FloatFilter;
  cartProducts?: CartProductListRelationFilter;
  description?: StringFilter;
  id?: StringFilter;
  image?: StringNullableFilter;
  merchant?: MerchantWhereUniqueInput;
  name?: StringFilter;
  productAddons?: ProductAddonListRelationFilter;
  productCategory?: ProductCategoryListRelationFilter;
  productCount?: ProductTrackingWhereUniqueInput;
  productOptions?: ProductOptionListRelationFilter;
  productPromotions?: ProductPromotionListRelationFilter;
};

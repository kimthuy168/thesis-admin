import { CartProduct } from "../cartProduct/CartProduct";
import { Merchant } from "../merchant/Merchant";
import { ProductAddon } from "../productAddon/ProductAddon";
import { ProductCategory } from "../productCategory/ProductCategory";
import { ProductTracking } from "../productTracking/ProductTracking";
import { ProductOption } from "../productOption/ProductOption";
import { ProductPromotion } from "../productPromotion/ProductPromotion";

export type Product = {
  basePrice: number;
  cartProducts?: Array<CartProduct>;
  createdAt: Date;
  description: string;
  id: string;
  image: string | null;
  merchant?: Merchant | null;
  name: string;
  productAddons?: Array<ProductAddon>;
  productCategory?: Array<ProductCategory>;
  productCount?: ProductTracking | null;
  productOptions?: Array<ProductOption>;
  productPromotions?: Array<ProductPromotion>;
  updatedAt: Date;
};

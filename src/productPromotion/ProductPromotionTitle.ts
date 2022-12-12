import { ProductPromotion as TProductPromotion } from "../api/productPromotion/ProductPromotion";

export const PRODUCTPROMOTION_TITLE_FIELD = "label";

export const ProductPromotionTitle = (record: TProductPromotion): string => {
  return record.label || record.id;
};

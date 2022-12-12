import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type ProductPromotionCreateInput = {
  endDate?: Date | null;
  label?: string | null;
  product?: ProductWhereUniqueInput | null;
  promotionType?: "Discount" | "Raw" | null;
  startDate?: Date | null;
  value?: number | null;
};

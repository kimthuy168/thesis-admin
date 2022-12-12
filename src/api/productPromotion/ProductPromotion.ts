import { Product } from "../product/Product";

export type ProductPromotion = {
  createdAt: Date;
  endDate: Date | null;
  id: string;
  label: string | null;
  product?: Product | null;
  promotionType?: "Discount" | "Raw" | null;
  startDate: Date | null;
  updatedAt: Date;
  value: number | null;
};

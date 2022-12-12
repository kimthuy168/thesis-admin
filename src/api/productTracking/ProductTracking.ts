import { Product } from "../product/Product";

export type ProductTracking = {
  createdAt: Date;
  id: string;
  likes: number | null;
  product?: Product | null;
  shares: number | null;
  soldQuantity: number | null;
  updatedAt: Date;
};

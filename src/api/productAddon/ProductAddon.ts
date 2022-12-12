import { Product } from "../product/Product";

export type ProductAddon = {
  createdAt: Date;
  id: string;
  name: string | null;
  price: number | null;
  product?: Product | null;
  updatedAt: Date;
};

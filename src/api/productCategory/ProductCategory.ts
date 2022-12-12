import { Product } from "../product/Product";

export type ProductCategory = {
  createdAt: Date;
  description: string | null;
  id: string;
  image: string | null;
  name: string | null;
  products?: Array<Product>;
  updatedAt: Date;
};

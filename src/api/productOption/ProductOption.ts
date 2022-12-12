import { JsonValue } from "type-fest";
import { Product } from "../product/Product";

export type ProductOption = {
  createdAt: Date;
  id: string;
  name: string | null;
  options: JsonValue;
  product?: Product | null;
  updatedAt: Date;
};

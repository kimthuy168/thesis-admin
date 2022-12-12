import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type ProductTrackingCreateInput = {
  likes?: number | null;
  product?: ProductWhereUniqueInput | null;
  shares?: number | null;
  soldQuantity?: number | null;
};

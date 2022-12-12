import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type ProductTrackingUpdateInput = {
  likes?: number | null;
  product?: ProductWhereUniqueInput | null;
  shares?: number | null;
  soldQuantity?: number | null;
};

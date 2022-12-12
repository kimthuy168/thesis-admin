import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type ProductAddonUpdateInput = {
  name?: string | null;
  price?: number | null;
  product?: ProductWhereUniqueInput | null;
};

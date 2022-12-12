import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type ProductAddonCreateInput = {
  name?: string | null;
  price?: number | null;
  product?: ProductWhereUniqueInput | null;
};

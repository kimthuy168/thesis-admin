import { ProductAddonWhereInput } from "./ProductAddonWhereInput";
import { ProductAddonOrderByInput } from "./ProductAddonOrderByInput";

export type ProductAddonFindManyArgs = {
  where?: ProductAddonWhereInput;
  orderBy?: Array<ProductAddonOrderByInput>;
  skip?: number;
  take?: number;
};

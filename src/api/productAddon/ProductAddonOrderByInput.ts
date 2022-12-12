import { SortOrder } from "../../util/SortOrder";

export type ProductAddonOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  price?: SortOrder;
  productId?: SortOrder;
  updatedAt?: SortOrder;
};

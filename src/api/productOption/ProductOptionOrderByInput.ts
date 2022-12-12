import { SortOrder } from "../../util/SortOrder";

export type ProductOptionOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  options?: SortOrder;
  productId?: SortOrder;
  updatedAt?: SortOrder;
};

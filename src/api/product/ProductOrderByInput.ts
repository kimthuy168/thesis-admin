import { SortOrder } from "../../util/SortOrder";

export type ProductOrderByInput = {
  basePrice?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  image?: SortOrder;
  merchantId?: SortOrder;
  name?: SortOrder;
  productCountId?: SortOrder;
  updatedAt?: SortOrder;
};

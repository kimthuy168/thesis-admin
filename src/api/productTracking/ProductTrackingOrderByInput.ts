import { SortOrder } from "../../util/SortOrder";

export type ProductTrackingOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  likes?: SortOrder;
  productId?: SortOrder;
  shares?: SortOrder;
  soldQuantity?: SortOrder;
  updatedAt?: SortOrder;
};

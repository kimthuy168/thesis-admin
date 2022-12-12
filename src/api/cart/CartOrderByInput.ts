import { SortOrder } from "../../util/SortOrder";

export type CartOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  isCheckout?: SortOrder;
  merchantId?: SortOrder;
  ordersId?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};

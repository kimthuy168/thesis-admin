import { SortOrder } from "../../util/SortOrder";

export type OrderProductOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  orderId?: SortOrder;
  totalPrice?: SortOrder;
  updatedAt?: SortOrder;
};

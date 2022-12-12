import { SortOrder } from "../../util/SortOrder";

export type OrderOrderByInput = {
  cartId?: SortOrder;
  couponId?: SortOrder;
  createdAt?: SortOrder;
  discount?: SortOrder;
  id?: SortOrder;
  merchantId?: SortOrder;
  subtotal?: SortOrder;
  tax?: SortOrder;
  total?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};

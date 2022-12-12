import { SortOrder } from "../../util/SortOrder";

export type CouponOrderByInput = {
  code?: SortOrder;
  couponType?: SortOrder;
  createdAt?: SortOrder;
  endDate?: SortOrder;
  id?: SortOrder;
  limit?: SortOrder;
  startDate?: SortOrder;
  updatedAt?: SortOrder;
  used?: SortOrder;
  value?: SortOrder;
};

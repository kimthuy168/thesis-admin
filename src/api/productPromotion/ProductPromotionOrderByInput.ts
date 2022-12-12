import { SortOrder } from "../../util/SortOrder";

export type ProductPromotionOrderByInput = {
  createdAt?: SortOrder;
  endDate?: SortOrder;
  id?: SortOrder;
  label?: SortOrder;
  productId?: SortOrder;
  promotionType?: SortOrder;
  startDate?: SortOrder;
  updatedAt?: SortOrder;
  value?: SortOrder;
};

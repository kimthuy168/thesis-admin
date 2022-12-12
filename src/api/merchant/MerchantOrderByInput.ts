import { SortOrder } from "../../util/SortOrder";

export type MerchantOrderByInput = {
  address?: SortOrder;
  baseDeliveryFee?: SortOrder;
  coordinate?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  image?: SortOrder;
  merchantCategoryId?: SortOrder;
  name?: SortOrder;
  operationEnd?: SortOrder;
  operationStart?: SortOrder;
  updatedAt?: SortOrder;
};

import { SortOrder } from "../../util/SortOrder";

export type CartProductOrderByInput = {
  amount?: SortOrder;
  cartId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  productId?: SortOrder;
  updatedAt?: SortOrder;
};

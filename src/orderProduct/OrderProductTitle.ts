import { OrderProduct as TOrderProduct } from "../api/orderProduct/OrderProduct";

export const ORDERPRODUCT_TITLE_FIELD = "id";

export const OrderProductTitle = (record: TOrderProduct): string => {
  return record.id || record.id;
};

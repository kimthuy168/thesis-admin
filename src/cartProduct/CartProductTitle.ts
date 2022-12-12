import { CartProduct as TCartProduct } from "../api/cartProduct/CartProduct";

export const CARTPRODUCT_TITLE_FIELD = "id";

export const CartProductTitle = (record: TCartProduct): string => {
  return record.id || record.id;
};

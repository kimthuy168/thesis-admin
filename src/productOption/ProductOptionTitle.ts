import { ProductOption as TProductOption } from "../api/productOption/ProductOption";

export const PRODUCTOPTION_TITLE_FIELD = "name";

export const ProductOptionTitle = (record: TProductOption): string => {
  return record.name || record.id;
};

import { ProductAddon as TProductAddon } from "../api/productAddon/ProductAddon";

export const PRODUCTADDON_TITLE_FIELD = "name";

export const ProductAddonTitle = (record: TProductAddon): string => {
  return record.name || record.id;
};

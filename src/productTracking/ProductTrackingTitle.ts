import { ProductTracking as TProductTracking } from "../api/productTracking/ProductTracking";

export const PRODUCTTRACKING_TITLE_FIELD = "id";

export const ProductTrackingTitle = (record: TProductTracking): string => {
  return record.id || record.id;
};

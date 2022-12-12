import { MerchantCategory as TMerchantCategory } from "../api/merchantCategory/MerchantCategory";

export const MERCHANTCATEGORY_TITLE_FIELD = "name";

export const MerchantCategoryTitle = (record: TMerchantCategory): string => {
  return record.name || record.id;
};

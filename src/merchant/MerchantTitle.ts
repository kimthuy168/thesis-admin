import { Merchant as TMerchant } from "../api/merchant/Merchant";

export const MERCHANT_TITLE_FIELD = "name";

export const MerchantTitle = (record: TMerchant): string => {
  return record.name || record.id;
};

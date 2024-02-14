import { Merchant as TMerchant } from "../api/merchant/Merchant";

export const MERCHANT_TITLE_FIELD = "brandName";

export const MerchantTitle = (record: TMerchant): string => {
  return record.brandName?.toString() || String(record.id);
};

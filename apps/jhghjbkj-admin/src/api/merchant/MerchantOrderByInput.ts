import { SortOrder } from "../../util/SortOrder";

export type MerchantOrderByInput = {
  brand?: SortOrder;
  brandName?: SortOrder;
  business?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  isActive?: SortOrder;
  name?: SortOrder;
  phoneNumber?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};

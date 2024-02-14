import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type MerchantWhereInput = {
  brand?: StringNullableFilter;
  brandName?: StringNullableFilter;
  business?: StringNullableFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  isActive?: BooleanNullableFilter;
  name?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
  status?: "WaitingApproval" | "Rejected" | "Approved";
};

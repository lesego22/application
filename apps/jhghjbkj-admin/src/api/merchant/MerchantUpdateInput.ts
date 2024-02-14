export type MerchantUpdateInput = {
  brand?: string | null;
  brandName?: string | null;
  business?: string | null;
  email?: string | null;
  isActive?: boolean | null;
  name?: string | null;
  phoneNumber?: string | null;
  status?: "WaitingApproval" | "Rejected" | "Approved" | null;
};

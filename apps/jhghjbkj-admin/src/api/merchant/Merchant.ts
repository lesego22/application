export type Merchant = {
  brand: string | null;
  brandName: string | null;
  business: string | null;
  createdAt: Date;
  email: string | null;
  id: string;
  isActive: boolean | null;
  name: string | null;
  phoneNumber: string | null;
  status?: "WaitingApproval" | "Rejected" | "Approved" | null;
  updatedAt: Date;
};

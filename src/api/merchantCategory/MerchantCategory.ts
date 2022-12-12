import { Merchant } from "../merchant/Merchant";

export type MerchantCategory = {
  createdAt: Date;
  description: string | null;
  id: string;
  image: string | null;
  merchants?: Array<Merchant>;
  name: string | null;
  updatedAt: Date;
};

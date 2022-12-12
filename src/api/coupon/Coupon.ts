import { Order } from "../order/Order";

export type Coupon = {
  code: string | null;
  couponType?: "raw" | "Percent" | null;
  createdAt: Date;
  endDate: Date | null;
  id: string;
  limit: number | null;
  orders?: Array<Order>;
  startDate: Date | null;
  updatedAt: Date;
  used: number | null;
  value: number | null;
};

import { OrderUpdateManyWithoutCouponsInput } from "./OrderUpdateManyWithoutCouponsInput";

export type CouponUpdateInput = {
  code?: string | null;
  couponType?: "raw" | "Percent" | null;
  endDate?: Date | null;
  limit?: number | null;
  orders?: OrderUpdateManyWithoutCouponsInput;
  startDate?: Date | null;
  used?: number | null;
  value?: number | null;
};

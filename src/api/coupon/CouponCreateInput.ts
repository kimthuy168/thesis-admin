import { OrderCreateNestedManyWithoutCouponsInput } from "./OrderCreateNestedManyWithoutCouponsInput";

export type CouponCreateInput = {
  code?: string | null;
  couponType?: "raw" | "Percent" | null;
  endDate?: Date | null;
  limit?: number | null;
  orders?: OrderCreateNestedManyWithoutCouponsInput;
  startDate?: Date | null;
  used?: number | null;
  value?: number | null;
};

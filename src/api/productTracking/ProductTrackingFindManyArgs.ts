import { ProductTrackingWhereInput } from "./ProductTrackingWhereInput";
import { ProductTrackingOrderByInput } from "./ProductTrackingOrderByInput";

export type ProductTrackingFindManyArgs = {
  where?: ProductTrackingWhereInput;
  orderBy?: Array<ProductTrackingOrderByInput>;
  skip?: number;
  take?: number;
};

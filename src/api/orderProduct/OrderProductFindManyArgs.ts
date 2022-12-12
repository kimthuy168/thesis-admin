import { OrderProductWhereInput } from "./OrderProductWhereInput";
import { OrderProductOrderByInput } from "./OrderProductOrderByInput";

export type OrderProductFindManyArgs = {
  where?: OrderProductWhereInput;
  orderBy?: Array<OrderProductOrderByInput>;
  skip?: number;
  take?: number;
};

import { ProductOptionWhereInput } from "./ProductOptionWhereInput";
import { ProductOptionOrderByInput } from "./ProductOptionOrderByInput";

export type ProductOptionFindManyArgs = {
  where?: ProductOptionWhereInput;
  orderBy?: Array<ProductOptionOrderByInput>;
  skip?: number;
  take?: number;
};

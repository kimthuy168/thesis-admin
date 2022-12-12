import { InputJsonValue } from "../../types";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type ProductOptionCreateInput = {
  name?: string | null;
  options?: InputJsonValue;
  product?: ProductWhereUniqueInput | null;
};

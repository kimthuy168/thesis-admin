import { CartProductWhereInput } from "./CartProductWhereInput";
import { CartProductOrderByInput } from "./CartProductOrderByInput";

export type CartProductFindManyArgs = {
  where?: CartProductWhereInput;
  orderBy?: Array<CartProductOrderByInput>;
  skip?: number;
  take?: number;
};

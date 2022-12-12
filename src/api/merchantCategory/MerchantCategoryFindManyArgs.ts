import { MerchantCategoryWhereInput } from "./MerchantCategoryWhereInput";
import { MerchantCategoryOrderByInput } from "./MerchantCategoryOrderByInput";

export type MerchantCategoryFindManyArgs = {
  where?: MerchantCategoryWhereInput;
  orderBy?: Array<MerchantCategoryOrderByInput>;
  skip?: number;
  take?: number;
};

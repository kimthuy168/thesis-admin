import { MerchantCreateNestedManyWithoutMerchantCategoriesInput } from "./MerchantCreateNestedManyWithoutMerchantCategoriesInput";

export type MerchantCategoryCreateInput = {
  description?: string | null;
  image?: string | null;
  merchants?: MerchantCreateNestedManyWithoutMerchantCategoriesInput;
  name?: string | null;
};

import { MerchantUpdateManyWithoutMerchantCategoriesInput } from "./MerchantUpdateManyWithoutMerchantCategoriesInput";

export type MerchantCategoryUpdateInput = {
  description?: string | null;
  image?: string | null;
  merchants?: MerchantUpdateManyWithoutMerchantCategoriesInput;
  name?: string | null;
};

import { ProductCreateNestedManyWithoutProductCategoriesInput } from "./ProductCreateNestedManyWithoutProductCategoriesInput";

export type ProductCategoryCreateInput = {
  description?: string | null;
  image?: string | null;
  name?: string | null;
  products?: ProductCreateNestedManyWithoutProductCategoriesInput;
};

import { ProductUpdateManyWithoutProductCategoriesInput } from "./ProductUpdateManyWithoutProductCategoriesInput";

export type ProductCategoryUpdateInput = {
  description?: string | null;
  image?: string | null;
  name?: string | null;
  products?: ProductUpdateManyWithoutProductCategoriesInput;
};

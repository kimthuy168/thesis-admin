import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MerchantListRelationFilter } from "../merchant/MerchantListRelationFilter";

export type MerchantCategoryWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  image?: StringNullableFilter;
  merchants?: MerchantListRelationFilter;
  name?: StringNullableFilter;
};

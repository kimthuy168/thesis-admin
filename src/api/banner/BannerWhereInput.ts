import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type BannerWhereInput = {
  bannerType?: "Promotion" | "Main" | "SplashScreen" | "Carousel";
  endDate?: DateTimeFilter;
  foreignKey?: StringNullableFilter;
  forField?: "Merchant" | "Product" | "None";
  id?: StringFilter;
  image?: StringFilter;
  name?: StringNullableFilter;
  startDate?: DateTimeFilter;
};

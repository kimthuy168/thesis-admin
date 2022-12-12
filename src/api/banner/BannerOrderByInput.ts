import { SortOrder } from "../../util/SortOrder";

export type BannerOrderByInput = {
  bannerType?: SortOrder;
  createdAt?: SortOrder;
  endDate?: SortOrder;
  foreignKey?: SortOrder;
  forField?: SortOrder;
  id?: SortOrder;
  image?: SortOrder;
  name?: SortOrder;
  startDate?: SortOrder;
  updatedAt?: SortOrder;
};

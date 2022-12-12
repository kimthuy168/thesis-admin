import { Banner as TBanner } from "../api/banner/Banner";

export const BANNER_TITLE_FIELD = "name";

export const BannerTitle = (record: TBanner): string => {
  return record.name || record.id;
};

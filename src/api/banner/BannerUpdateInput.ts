export type BannerUpdateInput = {
  bannerType?: "Promotion" | "Main" | "SplashScreen" | "Carousel";
  endDate?: Date;
  foreignKey?: string | null;
  forField?: "Merchant" | "Product" | "None" | null;
  image?: string;
  name?: string | null;
  startDate?: Date;
};

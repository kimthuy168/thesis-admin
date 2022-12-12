export type Banner = {
  bannerType?: "Promotion" | "Main" | "SplashScreen" | "Carousel";
  createdAt: Date;
  endDate: Date;
  foreignKey: string | null;
  forField?: "Merchant" | "Product" | "None" | null;
  id: string;
  image: string;
  name: string | null;
  startDate: Date;
  updatedAt: Date;
};

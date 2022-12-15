import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { MerchantList } from "./merchant/MerchantList";
import { MerchantCreate } from "./merchant/MerchantCreate";
import { MerchantEdit } from "./merchant/MerchantEdit";
import { MerchantShow } from "./merchant/MerchantShow";
import { MerchantCategoryList } from "./merchantCategory/MerchantCategoryList";
import { MerchantCategoryCreate } from "./merchantCategory/MerchantCategoryCreate";
import { MerchantCategoryEdit } from "./merchantCategory/MerchantCategoryEdit";
import { MerchantCategoryShow } from "./merchantCategory/MerchantCategoryShow";
import { ProductList } from "./product/ProductList";
import { ProductCreate } from "./product/ProductCreate";
import { ProductEdit } from "./product/ProductEdit";
import { ProductShow } from "./product/ProductShow";
import { ProductCategoryList } from "./productCategory/ProductCategoryList";
import { ProductCategoryCreate } from "./productCategory/ProductCategoryCreate";
import { ProductCategoryEdit } from "./productCategory/ProductCategoryEdit";
import { ProductCategoryShow } from "./productCategory/ProductCategoryShow";
// import { ProductTrackingList } from "./productTracking/ProductTrackingList";
// import { ProductTrackingCreate } from "./productTracking/ProductTrackingCreate";
// import { ProductTrackingEdit } from "./productTracking/ProductTrackingEdit";
// import { ProductTrackingShow } from "./productTracking/ProductTrackingShow";
import { OrderList } from "./order/OrderList";
import { OrderCreate } from "./order/OrderCreate";
import { OrderEdit } from "./order/OrderEdit";
import { OrderShow } from "./order/OrderShow";
import { BannerList } from "./banner/BannerList";
import { BannerCreate } from "./banner/BannerCreate";
import { BannerEdit } from "./banner/BannerEdit";
import { BannerShow } from "./banner/BannerShow";
import { CartList } from "./cart/CartList";
import { CartCreate } from "./cart/CartCreate";
import { CartEdit } from "./cart/CartEdit";
import { CartShow } from "./cart/CartShow";
import { ProductOptionList } from "./productOption/ProductOptionList";
import { ProductOptionCreate } from "./productOption/ProductOptionCreate";
import { ProductOptionEdit } from "./productOption/ProductOptionEdit";
import { ProductOptionShow } from "./productOption/ProductOptionShow";
import { ProductAddonList } from "./productAddon/ProductAddonList";
import { ProductAddonCreate } from "./productAddon/ProductAddonCreate";
import { ProductAddonEdit } from "./productAddon/ProductAddonEdit";
import { ProductAddonShow } from "./productAddon/ProductAddonShow";
import { CouponList } from "./coupon/CouponList";
import { CouponCreate } from "./coupon/CouponCreate";
import { CouponEdit } from "./coupon/CouponEdit";
import { CouponShow } from "./coupon/CouponShow";
// import { CartProductList } from "./cartProduct/CartProductList";
// import { CartProductCreate } from "./cartProduct/CartProductCreate";
// import { CartProductEdit } from "./cartProduct/CartProductEdit";
// import { CartProductShow } from "./cartProduct/CartProductShow";
import { ProductPromotionList } from "./productPromotion/ProductPromotionList";
import { ProductPromotionCreate } from "./productPromotion/ProductPromotionCreate";
import { ProductPromotionEdit } from "./productPromotion/ProductPromotionEdit";
import { ProductPromotionShow } from "./productPromotion/ProductPromotionShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";
import customRoutes from "./custom/customRoutes";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import StorefrontIcon from "@material-ui/icons/Storefront";
import StoreMallDirectoryIcon from "@material-ui/icons/StoreMallDirectory";
import CategoryIcon from "@material-ui/icons/Category";
import DesktopWindowsIcon from "@material-ui/icons/DesktopWindows";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import LoyaltyIcon from "@material-ui/icons/Loyalty";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
// import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import AddToQueueIcon from "@material-ui/icons/AddToQueue";
import ShopTwoIcon from "@material-ui/icons/ShopTwo";
import DevicesIcon from "@material-ui/icons/Devices";
// import TimelineIcon from "@material-ui/icons/Timeline";
import CustomLayout from "./custom/CustomLayout";
import { MantineProvider } from "@mantine/core";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <MantineProvider>
        <Admin
          dataProvider={dataProvider}
          authProvider={jwtAuthProvider}
          theme={theme}
          dashboard={Dashboard}
          loginPage={Login}
          layout={CustomLayout}
          customRoutes={customRoutes}
        >
          <Resource
            name="User"
            list={UserList}
            edit={UserEdit}
            create={UserCreate}
            show={UserShow}
            icon={AccountCircleIcon}
          />
          <Resource
            name="Merchant"
            list={MerchantList}
            edit={MerchantEdit}
            create={MerchantCreate}
            show={MerchantShow}
            icon={StorefrontIcon}
          />
          <Resource
            name="MerchantCategory"
            list={MerchantCategoryList}
            edit={MerchantCategoryEdit}
            create={MerchantCategoryCreate}
            show={MerchantCategoryShow}
            options={{ label: "Merchant Category" }}
            icon={AccountTreeIcon}
          />
          <Resource
            name="Product"
            list={ProductList}
            edit={ProductEdit}
            create={ProductCreate}
            show={ProductShow}
            icon={StoreMallDirectoryIcon}
          />
          <Resource
            name="ProductCategory"
            list={ProductCategoryList}
            edit={ProductCategoryEdit}
            create={ProductCategoryCreate}
            show={ProductCategoryShow}
            options={{ label: "Product Category" }}
            icon={CategoryIcon}
          />
          {/* <Resource
            name="ProductTracking"
            list={ProductTrackingList}
            edit={ProductTrackingEdit}
            create={ProductTrackingCreate}
            show={ProductTrackingShow}
            options={{ label: "Product Tracking" }}
            icon={TimelineIcon}
          /> */}
          <Resource
            name="Order"
            list={OrderList}
            edit={OrderEdit}
            create={OrderCreate}
            show={OrderShow}
            icon={DevicesIcon}
          />
          <Resource
            name="Banner"
            list={BannerList}
            edit={BannerEdit}
            create={BannerCreate}
            show={BannerShow}
            icon={DesktopWindowsIcon}
          />
          <Resource
            name="Cart"
            list={CartList}
            edit={CartEdit}
            create={CartCreate}
            show={CartShow}
            icon={ShoppingCartIcon}
          />
          <Resource
            name="ProductOption"
            list={ProductOptionList}
            edit={ProductOptionEdit}
            create={ProductOptionCreate}
            show={ProductOptionShow}
            options={{ label: "Product Option" }}
            icon={ShopTwoIcon}
          />
          <Resource
            name="ProductAddon"
            list={ProductAddonList}
            edit={ProductAddonEdit}
            create={ProductAddonCreate}
            show={ProductAddonShow}
            options={{ label: "Product Addon" }}
            icon={AddToQueueIcon}
          />
          <Resource
            name="Coupon"
            list={CouponList}
            edit={CouponEdit}
            create={CouponCreate}
            show={CouponShow}
            icon={CardGiftcardIcon}
          />
          {/* <Resource
            name="CartProduct"
            list={CartProductList}
            edit={CartProductEdit}
            create={CartProductCreate}
            show={CartProductShow}
            options={{ label: "Cart Products" }}
            icon={AddShoppingCartIcon}
          /> */}
          <Resource
            name="ProductPromotion"
            list={ProductPromotionList}
            edit={ProductPromotionEdit}
            create={ProductPromotionCreate}
            show={ProductPromotionShow}
            options={{ label: "Product Promotion" }}
            icon={LoyaltyIcon}
          />
        </Admin>
      </MantineProvider>
    </div>
  );
};

export default App;

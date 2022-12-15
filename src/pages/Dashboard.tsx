import {
  ShoppingBagIcon,
  ShoppingCartIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";
import { Grid } from "@mantine/core";
import React from "react";
import StorefrontIcon from "@material-ui/icons/Storefront";
import StoreMallDirectoryIcon from "@material-ui/icons/StoreMallDirectory";
import DesktopWindowsIcon from "@material-ui/icons/DesktopWindows";

import { DataCard } from "../Components/DataCard";
const Dashboard = () => {
  const dataDashboard = [
    {
      title: "Users",
      value: 10,
      icon: (
        <UsersIcon style={{ width: "50px", height: "50px", color: "red" }} />
      ),
      // trend: "-10.00%",
      // graph: "up",
    },
    {
      title: "Shops",
      value: 12,
      icon: (
        <StorefrontIcon
          style={{ width: "50px", height: "50px", color: "blue" }}
        />
      ),
      // trend: "-10.00%",
      // graph: "up",
    },
    {
      title: "Products",
      value: 92,
      icon: (
        <StoreMallDirectoryIcon
          style={{ width: "50px", height: "50px", color: "yellowgreen" }}
        />
      ),
      // trend: "-10.00%",
      // graph: "up",
    },
    {
      title: "Product Categories",
      value: 14,
      icon: <UsersIcon style={{ width: "50px", height: "50px" }} />,
      // trend: "-10.00%",
      // graph: "up",
    },
    {
      title: "Orders",
      value: 45,
      icon: (
        <ShoppingCartIcon
          style={{ width: "50px", height: "50px", color: "green" }}
        />
      ),
      // trend: "-10.00%",
      // graph: "up",
    },
    {
      title: "Banners",
      value: 45,
      icon: <DesktopWindowsIcon style={{ width: "50px", height: "50px" }} />,
      // trend: "-10.00%",
      // graph: "up",
    },
    {
      title: "Cart",
      value: 45,
      icon: (
        <ShoppingBagIcon
          style={{ width: "50px", height: "50px", color: "green" }}
        />
      ),
      // trend: "-10.00%",
      // graph: "up",
    },
  ];
  return (
    <>
      <Grid gutter={40} style={{ marginTop: "10px" }}>
        {dataDashboard.map((card: any, index: number) => {
          return (
            <Grid.Col md={3} lg={3} className="grid grid-cols-3">
              <DataCard key={index} {...card} />
            </Grid.Col>
          );
        })}
      </Grid>
    </>
  );
};

export default Dashboard;

import * as React from "react";
import { Layout } from "react-admin";
import CustomAppBar from "./CustomBar";

export const MyLayout = (props: any) => (
  <Layout {...props} appBar={CustomAppBar} />
);

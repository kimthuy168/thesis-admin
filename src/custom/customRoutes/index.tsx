import * as React from "react";
import { Route } from "react-router-dom";
import ImageUpload from "../customComponent/ImageUpload";

const customRoutes = [
  <Route exact path="/image-upload" component={ImageUpload} />,
];
export default customRoutes;

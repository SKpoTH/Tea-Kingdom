import React from "react";
import { Router, Route } from "react-router";
import productTable from "../pages/ProductTable";
import AboutUs from "../pages/AboutUs";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ProductDetail from "../pages/ProductDetail";
import Homepage from "../pages/Home";

const Routes = props => (
  <Router {...props}>
    <Route path="/" component={Homepage} />
    <Route path="/product" component={productTable} />
    <Route path="/AboutUs" component={AboutUs} />
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />
    <Route path="/ProductDetail" component={ProductDetail} />
  </Router>
);

export default Routes;

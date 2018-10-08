import React from "react";
import { Router, Route } from "react-router";
import productTable from "../components/productTable";
import AboutUs from "../components/AboutUs";
import Login from "../components/Login";
import Register from "../components/Register";
import ProductDetail from "../components/ProductDetail";
import Homepage from "../components/Home";
import UseCase from "../components/UseCase";

const Routes = props => (
  <Router {...props}>
    <Route path="/" component={Homepage} />
    <Route path="/product" component={productTable} />
    <Route path="/AboutUs" component={AboutUs} />
    <Route exact path="/login:Semail" component={Login} />
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />
    <Route exact path="/ProductDetail:id" component={ProductDetail} />
    <Route exact path="/UseCase" component={UseCase} />
  </Router>
);

export default Routes;

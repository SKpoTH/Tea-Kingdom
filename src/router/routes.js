import React from "react";
import { Router, Route } from "react-router";
import productTable from "../components/productTable";
import Login from "../components/Login";
import Register from "../components/Register";
import ProductDetail from "../components/ProductDetail";
import Homepage from "../components/Home";
import UseCase from "../components/UseCase";
import Order from "../components/Order";
import UnderConstruction from "../components/UnderConstruction"
import Tracking from "../components/Tracking"
import EditUser from "../components/EditProfile"
import AddProduct from "../components/Addproduct"
import AboutUs from "../components/AboutUs";
import User from "../components/User";
import Admin from "../components/Admin"
import Seller from "../components/SellerProduct";
import Confirm from "../components/Bill";
import QualifyProduct from "../components/QualifyProduct";
import AddTracking from "../components/AddTracking";
import Policy from "../components/Policy";
import Favorite from "../components/Favorite";
import Help from "../components/Help"

const Routes = props => (
    <Router {...props}>
        <Route path="/" component={Homepage} />
        <Route path="/product" component={productTable} />
        <Route path="/AboutUs" component={AboutUs} />
        <Route exact path="/login:Semail" component={Login} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route exact path="/ProductDetail:id" component={ProductDetail} />
        <Route path="/UseCase" component={UseCase} />
        <Route path="/order" component={Order} />
        <Route path="/track" component={Tracking} />
        <Route path="/under" component={UnderConstruction} />
        <Route path="/edit" component={EditUser} />
        <Route path="/addproduct" component={AddProduct} />
        <Route path="/user" component={User} />
        <Route path="/admin" component={Admin} />
        <Route path="/seller" component={Seller} />
        <Route path="/confirm" component={Confirm} />
        <Route path="/itemqualify" component={QualifyProduct} />
        <Route path="/addtracking" component={AddTracking} />
        <Route path="/policy" component={Policy} />
        <Route path="/favorite" component={Favorite} />
        <Route path="/help" component={Help} />
    </Router>
);

export default Routes;

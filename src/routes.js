import React from 'react';
import {Router, Route } from 'react-router';
import xx from './components/UseCasePage';
import productTable from './components/productTable';
import AboutUs from './components/AboutUs';

const Routes = (props) => (
    <Router {...props}>
        <Route path="/xx" component={xx}/>
        <Route path="/product" component={productTable}/>
        <Route path="/itemid" component={itemid}/>
        <Route path="/AboutUs" component={AboutUs}/>
    </Router>
);

export default Routes;
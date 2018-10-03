import React from 'react';
import {Router, Route } from 'react-router';
import xx from './components/UseCasePage';
import productTable from './components/productTable';

const Routes = (props) => (
    <Router {...props}>
        <Route path="/xx" component={xx}/>
        <Route path="/product" component={productTable}/>
    </Router>
);

export default Routes;
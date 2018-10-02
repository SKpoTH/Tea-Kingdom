import React from 'react';
import {Router, Route } from 'react-router';
import productTable from './components/productTable';

const Routes = (props) => (
    <Router {...props}>
        <Route path="/productTable" component={productTable}/>
    </Router>
);

export default Routes;
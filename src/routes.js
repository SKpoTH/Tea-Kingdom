import React from 'react';
import {Router, Route } from 'react-router';
import xx from './components/UseCasePage';

import itemid from './components/ProductDetail';


const Routes = (props) => (
    <Router {...props}>
        <Route path="/xx" component={xx}/>
        <Route path="/itemid" component={itemid}/>
    </Router>
    
);

export default Routes;
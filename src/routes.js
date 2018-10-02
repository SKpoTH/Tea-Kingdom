import React from 'react';
import {Router, Route } from 'react-router';
import xx from './components/UseCasePage';

import aa from './components/ProductDetail';


const Routes = (props) => (
    <Router {...props}>
        <Route path="/xx" component={xx}/>
        <Route path="/aa" component={aa}/>
    </Router>
    
);

export default Routes;
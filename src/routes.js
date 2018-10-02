import React from 'react';
import {Router, Route } from 'react-router';

import Xx from './components/UseCasePage ';

const Routes = (props) => (
    <Router {...props}>
        <Route path="/xx" component={Xx}/>
    </Router>
);

export default Routes;
import React from 'react';
import {Router, Route } from 'react-router';
import xx from './components/UseCasePage';

const Routes = (props) => (
    <Router {...props}>
        <Route path="/xx" component={xx}/>
    </Router>
);

export default Routes;
import React from 'react';
import {Router, Route } from 'react-router';
import AboutUs from './components/AboutUs';

const Routes = (props) => (
    <Router {...props}>
        <Route path="/AboutUs" component={AboutUs}/>
    </Router>
);

export default Routes;
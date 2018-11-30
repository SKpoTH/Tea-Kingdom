import React, { Component } from 'react';
import TKD from '../template/TemplateTKD';
import 'semantic-ui-css/semantic.css';
import { Form, Responsive, } from 'semantic-ui-react';

import Computer from './Computer'
import Mobile from './Mobile'
import Tablet from './Tablet'

export default class Content extends Component {



    render() {
        return (
            <TKD>
                <Form onSubmit={this.onSubmit} >
                    <Responsive  {...Responsive.onlyMobile}>
                        <Mobile />

                    </Responsive>
                    <Responsive  {...Responsive.onlyTablet}>
                        <Tablet />

                    </Responsive>

                    <Responsive  {...Responsive.onlyComputer}>
                        <Computer />
                    </Responsive>
                </Form>
            </TKD>
        );
    }
}


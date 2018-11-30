import React, { Component } from 'react';

import Mobile from "./Mobile"
import Computer from "./Computer"
import { Responsive } from 'semantic-ui-react'
import TKD from "../template/TemplateTKD"


class Home extends Component {
    render() {
        return (

            <TKD marginNon='true'>

                <Responsive  {...Responsive.onlyMobile}>
                    <Mobile />
                </Responsive>

                <Responsive  {...Responsive.onlyComputer}>
                    <Computer />
                </Responsive>

                <Responsive  {...Responsive.onlyTablet}>
                    <Computer />
                </Responsive>



            </TKD>

        );
    }
}

export default Home;



import React, { Component } from 'react';
import styled from 'styled-components'
import Header from './Header2'
import Limit from './Limit'

import Content1 from "./Content6";
import Content2 from "./Content7";
import Content3 from "./Content8";
import Content4 from "./Content9";
import Content5 from "./Content10";
import Bottom from "./Bottom";



const Container = styled(Limit)`
  padding: 1em;
`
const AddBG = styled.div`
    background-color: lightgrey; 
`


export default class Computer extends Component {
    render() {
        return (
            <div>
                <Container fluid>
                    <Header />
                </Container>
                <Container fluid>
                    <Content1 />
                </Container>

                <Container fluid>
                    <Content3 />
                </Container>

                <Content2 />
                <Container fluid>
                    <Content4 />
                </Container>
                <Container>
                    <Bottom />
                </Container>
                <Content5 />
            </div>
        );
    }
}


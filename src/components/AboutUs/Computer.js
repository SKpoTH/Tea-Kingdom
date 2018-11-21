import React, { Component } from 'react';
import styled from 'styled-components'
import Header from './Computer/Header'
import Limit from './Limit'

import Content1 from "./Computer/Content1";
import Content2 from "./Computer/Content2";
import Content3 from "./Computer/Content3";
import Content4 from "./Computer/Content4";
import Content5 from "./Computer/Content5";
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


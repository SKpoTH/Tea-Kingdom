import React, { Component } from 'react';
import styled from 'styled-components'
import Header from './Mobile/Header2'
import Limit from './Limit'

import Content1 from "./Mobile/Content1";
import Content2 from "./Mobile/Content2";
import Content3 from "./Mobile/Content3";
import Content4 from "./Mobile/Content4";
import Content5 from "./Mobile/Content5";
import Bottom from "./Bottom";



const Container = styled(Limit)`
  padding: 1em;
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


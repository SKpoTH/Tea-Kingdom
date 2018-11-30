import React, { Component } from 'react';
import styled from 'styled-components'
import Header from './Mobile/Header2'
import Limit from './Limit'


import Content1 from "./Mobile/Content3";
import Content2 from "./Mobile/Content4"

const Container = styled(Limit)`
  padding: 1em;
`

export default class Computer extends Component {
    render() {
        return (
            <div>
                <Header />
                <Container>
                    <Content1 />
                </Container>

                <Container>
                    <Content2 />
                </Container>
            </div>
        );
    }
}


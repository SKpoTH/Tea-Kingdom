import React, { Component } from 'react';
import styled from 'styled-components'
import Header from './Header2'
import Limit from './Limit'


import Content1 from "./Content3";
import Content2 from "./Content4"

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


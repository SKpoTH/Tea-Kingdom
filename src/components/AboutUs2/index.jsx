import React, { Component } from 'react';
import styled from 'styled-components'
import Header from './Header'
import Limit from './Limit'

import Content1 from "./Content1";
import Content2 from "./Content2";
import Content3 from "./Content3";
import Content4 from "./Content4";
import Content5 from "./Content5";

import TKD from "../template/TemplateTKD"

const Container = styled(Limit)`
  padding: 1em;
`
const AddBG = styled.div`
    background-color: lightgrey; 
`

class Home extends Component {
    render() {
        return(
            <div>
            <TKD>
                <Container fluid>
                    <Header/> 
                </Container>
                <Container fluid>
                    <Content1/>
                </Container>
                
                <Container fluid>
                    <Content3/>
                </Container>

                <Content2/>
                <Container fluid>
                    <Content4/>
                </Container>

                <Content5/>
                


                
            
            </TKD>
            </div>
        );
    }
}

export default Home;



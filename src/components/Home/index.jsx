import React, { Component } from 'react';
import styled from 'styled-components'
import Header from './Header'
import Limit from './Limit'
import HeaderTKD from "../template/HeaderTKD";
import FooterTKD from "../template/FooterTKD" 
import Content1 from "./Content1";
import Content2 from "./Content2"

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
            <HeaderTKD/>
                <Header/>
                
                <Container fluid>
                    <Content1/>
                </Container>
                
                <Container>
                    <Content2/>
                </Container>
               
            <FooterTKD/>
            </div>
        );
    }
}

export default Home;
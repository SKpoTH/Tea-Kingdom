import React, { Component } from "react";
import TemplateTKD from "../template/TemplateTKD";
import styled from 'styled-components';
import headerImg from './background.jpg'
import secondImg from './background.jpg'
import { Segment, Image } from 'semantic-ui-react'


const HeaderImg = styled.div`
  background-image: url(${headerImg});  
  height : ${props => props.size || "250px"};
`

const MyText = styled.h1`
  font-family: Roboto;
  margin: auto;
  text-align: ${props => props.area || "center"};
  padding: ${props => props.pad || "100px"};
  font-size: ${props => props.size || "2em"};
  color : white;
`

class paragrahp1 extends Component {
  render() {
    return(
      <div>
      <Segment>
    <Image src={secondImg} size='small' floated='left' />
      <p>
        We make tea for drinking both hot and over ice. 
        It matters because we know it's really all about the ingredients, 
        full-left teas, selected herbs, real fruit pieces, 
        essential oils and all natural flavors 
      </p>
    </Segment>
   </div>
    );
  }
}




export default class Homepage extends Component {
  render() {
    return (
      <TemplateTKD>
        <HeaderImg >
          <MyText primary area="left">IMPORTER AND PURVEYOR OF FINE TEA SINCE 1843</MyText>
        </HeaderImg>
        
        <imgParagraph1/>

        <HeaderImg size="300px">
          <MyText primary size="1.8em" area="right">
            <h1>
              Welcome to our company
            </h1>
            Tea company provides high quality teas, and tea accessories for retail and wholesale customers.
          </MyText>
        </HeaderImg>

        <HeaderImg size="300px">
          <MyText primary size="1.8em" area="left">
            <h1>
              THE PERFECT TEA FOR YOU
            </h1>
            Having trouble narrowing down your tea selection today?
            We can help. Choose the words that best describe your mood and we'll find the perfect tea for you.
          </MyText>
        </HeaderImg>

        <HeaderImg size="300px">
          <MyText primary size="1.5em" area="center">
            "I believes that the drink should be prepared with love so that your body experiences not only physical nourishment but emotional and spiritual nourishment as well"
          </MyText>
        </HeaderImg>        
      </TemplateTKD>
    );
  }
}

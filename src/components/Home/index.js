import React, { Component } from 'react';
import TemplateTKD from '../template/TemplateTKD';
import 'semantic-ui-css/semantic.css';
import { Container ,Image } from 'semantic-ui-react'

class HomePage extends Component {
  render() {
    return (
      <div>
        <Image src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Tea_plantation_in_Ciwidey%2C_Bandung_2014-08-21.jpg/1024px-Tea_plantation_in_Ciwidey%2C_Bandung_2014-08-21.jpg' fluid />
        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' fluid />
        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' fluid />
        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' fluid />
        <Container>
            <center>Hello</center> 
            
        </Container>
      </div>
    );
  }
}




export default class Homepage extends Component {
  render() {
    return (
      <TemplateTKD>
        <HomePage />
      </TemplateTKD>
    );
  }
}



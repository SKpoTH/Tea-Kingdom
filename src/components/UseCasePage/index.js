import React, { Component } from 'react';
import HeaderTm from '../template/Header';
import FooterTm from '../template/Footer';
import 'semantic-ui-css/semantic.css';
import { Container } from 'semantic-ui-react';

class Content extends Component {
  render() {
    return (
      //code here (delete <div/> below)            
      <div/>
    );
  }
}

export default class xx extends Component {
  render() {
    return (
      <div>
        <HeaderTm/>
        <Container>
          <Content/>
        </Container>
        <FooterTm/>
      </div>
    );
  }
}

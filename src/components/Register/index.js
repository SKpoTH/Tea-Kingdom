import React, { Component } from 'react';
import TemplateTKD from '../template/TemplateTKD';
import 'semantic-ui-css/semantic.css';
import {Form , Button, Container} from 'semantic-ui-react';
import Registration from './Registration';

class Content extends Component {
  render() {
    return(
      <Registration />
    ); 
  }
}

export default class Register extends Component {
  render() {
    return (
      <TemplateTKD>
        <Content />
      </TemplateTKD>
    );
  }
}

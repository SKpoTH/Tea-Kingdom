import React, { Component } from 'react';
import TemplateTKD from '../template/TemplateTKD';
import 'semantic-ui-css/semantic.css';
import {Icon, Header,Container } from 'semantic-ui-react'


class Content extends Component {
  render() {
    return (
      <Container textAlign = 'center'>
          <Header as='h1' icon >
            <Icon name='exclamation triangle' color='red'/>
            permission denite
          </Header>
      </Container>
    );
  }
}

export default class Denite extends Component {
  render() {
    return (
      <TemplateTKD>
        <Content />
      </TemplateTKD>
    );
  }
}
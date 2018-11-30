import React, { Component } from 'react';
import TemplateTKD from '../template/TemplateTKD';
import { Message, Padding } from '../template/TKDcomponent';
import { Container } from "semantic-ui-react";
import Token from '../pomLib/token';
import Form from './form';

export default class Login extends Component {
  constructor(props) {
    if(Token.isLogin) {
      window.location = '/'
    }
    let message = {
      content: '',
      hidden: true,
      className: ''
    };
    super(props);
    if(this.props.params.Semail) {
      message = {
        content: "Register Success :"+this.props.params.Semail,
        hidden: false,
        className: 'success'
      }
    }
    this.state = {
      message: message
    }
  }

  setMessage = (mess) => {
    this.setState({ message: mess });
  }
  
  render() {
    const { message } = this.state;
    return (
      <TemplateTKD>
        <Container>
          <Message data={message} padding="true" />
          <Form setMessage={this.setMessage} />
        </Container>
      </TemplateTKD>
    );
  }
}

import React, { Component } from 'react';
import TemplateTKD from '../template/TemplateTKD';
import { Message } from '../template/TKDcomponent';
import Token from '../pomLib/token';
import Table from './table';

export default class Admin extends Component {
  constructor(props) {
    if(!Token.isLogin) {
      window.location = '/login'
    }
    super(props);
    this.state = {
      message: {
        content: '',
        hidden: true,
        className: ''
      }
    }
  }
  setMessage = (mess) => {
    this.setState({ message: mess });
  }
  render() {
    const { message } = this.state;
    return (
      <TemplateTKD>
        <Message data={message} padding="true" />
        <h1>Promote Users</h1>
        <Table setMessage={this.setMessage} />
      </TemplateTKD>
    );
  }
}

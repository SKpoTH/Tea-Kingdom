import React, { Component } from 'react';
import TemplateTKD from '../template/TemplateTKD';
import { Message, Padding } from '../template/TKDcomponent';
import ProdTable from './ProductTable';

export default class Admin extends Component {
  constructor(props) {
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
        <h1>Ours products</h1>
        <Padding length="1" />
        <ProdTable setMessage={this.setMessage} />
        <Padding length="1" />
      </TemplateTKD>
    );
  }
}

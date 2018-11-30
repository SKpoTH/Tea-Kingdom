import React, { Component } from 'react';
import 'semantic-ui-css/semantic.css';
import {
  Message as MessageSemantic,
  Dimmer,
  Loader,
  Divider
} from 'semantic-ui-react';

export class Loading extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Dimmer className={this.props.loading ? "active" : "" } inverted>
        <Loader size='large'>Loading</Loader>
      </Dimmer>
    );
  }
}

export class Message extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let number = this.props.padding ? 1 : 0;
    let Mes = React.createElement(MessageSemantic, this.props.data, null);
    return(
      <React.Fragment>
        <Padding length={number}/>
        {Mes}
      </React.Fragment>
    )
  }
}

export class Padding extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const length = Array.from(Array(Number(this.props.length)));
    return (
      <React.Fragment>
        {length.map(i => <Divider hidden />)}
      </React.Fragment>
    );
  }
}
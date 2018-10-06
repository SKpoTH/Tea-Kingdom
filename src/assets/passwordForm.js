import React, { Component } from "react";
import { Form } from "semantic-ui-react";
import "semantic-ui-css/semantic.css";

export default class NormalFrom extends Component {
  render() {
    return (
      <Form.Field>
        <label>{this.props.label}</label>
        <input
          size="small"
          type="password"
          placeholder={this.props.placeholder}
        />
      </Form.Field>
    );
  }
}

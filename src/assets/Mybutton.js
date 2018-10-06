import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import "semantic-ui-css/semantic.css";

export default class MyButton extends Component {
  render() {
    return (
      <div>
        <Button color={this.props.color}>{this.props.text}</Button>
      </div>
    );
  }
}

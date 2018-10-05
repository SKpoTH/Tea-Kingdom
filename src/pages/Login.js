import React, { Component } from "react";
import TemplateTKD from "../components/template/TemplateTKD";
import "semantic-ui-css/semantic.css";

import LoginForm from "../components/Login/LoginForm";

export default class Login extends Component {
  render() {
    return (
      <TemplateTKD>
        <LoginForm />
      </TemplateTKD>
    );
  }
}

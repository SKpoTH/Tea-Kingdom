import React, { Component } from "react";
import TemplateTKD from "../components/template/TemplateTKD";
import "semantic-ui-css/semantic.css";

import LoginForm from "../components/Login/LoginForm";

class Login extends Component {
  state = {
    msg: "Login"
  };

  render() {
    return (
      <div>
        <TemplateTKD>
          <LoginForm />
        </TemplateTKD>
      </div>
    );
  }
}

export default Login;

import React, { Component } from "react";
import TemplateTKD from "../components/template/TemplateTKD";
import "semantic-ui-css/semantic.css";
import RegisterForm from "../components/Register/RegisterForm";

class Register extends Component {
  state = {
    msg: "register"
  };

  render() {
    return (
      <div>
        <TemplateTKD>
          <RegisterForm />
        </TemplateTKD>
      </div>
    );
  }
}

export default Register;

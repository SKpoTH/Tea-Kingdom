import React, { Component } from "react";
import TemplateTKD from "../components/template/TemplateTKD";
import "semantic-ui-css/semantic.css";
import RegisterForm from "../components/Register/RegisterForm";

import Registration from '../components/Register/Registration';

class Register extends Component {
  state = {
    msg: "register"
  };

  render() {
    return (
      <div>
        <TemplateTKD>
          <Registration />
        </TemplateTKD>
      </div>
    );
  }
}

export default Register;

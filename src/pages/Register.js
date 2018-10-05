import React, { Component } from "react";
import TemplateTKD from "../components/template/TemplateTKD";
import "semantic-ui-css/semantic.css";
import RegisterForm from "../components/Register/RegisterForm";

export default class Register extends Component {
  render() {
    return (
      <TemplateTKD>
        <RegisterForm />
      </TemplateTKD>
    );
  }
}

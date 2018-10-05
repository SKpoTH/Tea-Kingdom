import React, { Component } from "react";
import "semantic-ui-css/semantic.css";
import { Form, Button, Container } from "semantic-ui-react";
import NormalForm from "../../assets/normalForm";
import PasswordForm from "../../assets/passwordForm";

class Content extends Component {
  render() {
    return (
      <Container>
        <h1>Register</h1>

        <Form>
          <NormalForm label="Email" placeholder="your@email.com" />

          <Form.Group unstackable widths={2}>
            <PasswordForm label="password" placeholder="password" />
            <PasswordForm label="retype password" placeholder="password" />
          </Form.Group>

          <Form.Group unstackable widths={2}>
            <NormalForm label="First name" placeholder="First name" />
            <NormalForm label="Last name" placeholder="Last name" />
          </Form.Group>

          <Form.Group widths={2}>
            <NormalForm label="Address" placeholder="Address" />
            <NormalForm label="Phone" placeholder="Phone" />
          </Form.Group>

          <Form.Checkbox label="I agree to the Terms and Conditions" />
          <Button>Submit</Button>
        </Form>
      </Container>
    );
  }
}

export default class Register extends Component {
  render() {
    return <Content />;
  }
}

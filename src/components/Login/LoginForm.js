import React, { Component } from "react";
import "semantic-ui-css/semantic.css";
import { Container, Button, Form } from "semantic-ui-react";
import NormalFrom from "../../assets/normalForm";
import PasswordForm from "../../assets/passwordForm";
import MyButton from "../../assets/Mybutton";

class Content extends Component {
  render() {
    return (
      <div>
        <Container>
          <h1>LOG IN</h1>
          <Form>
            <NormalFrom label="Email" placeholder="your@email.com" />
            <PasswordForm label="password" placeholder="password" />
            <MyButton color="blue" text="Login" />

            <a onclick="console.log('The link was clicked.'); return false">
              {" "}
              Forgot your password?{" "}
            </a>

            <h3>New Customer? </h3>

            <p>
              Sign up for an account to take advantage of order tracking and
              history as well as pre-filled forms during checkout on subsequent
              orders.
            </p>

            <Button>Register</Button>
          </Form>
        </Container>
      </div>
    );
  }
}

export default class Login extends Component {
  render() {
    return <Content />;
  }
}

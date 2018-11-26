import React, { Component } from "react";
import Connection from '../pomLib/connection';
import "semantic-ui-css/semantic.css";
import { Container, Button, Form, Message } from "semantic-ui-react";
import TemplateTKD from "../template/TemplateTKD";

const request = Connection.createClass();

export default class Login extends Component {
  constructor(props) {

    super(props);
    this.state = {
      message:
        { massageHidden: true, content: '', status: "" },
      email: "",
      password: "",
      eamilRe: props.params.Semail
    }
    if (this.state.eamilRe !== undefined) {
      this.state.message = { massageHidden: false, content: "Register Success : " + this.state.eamilRe, status: "success" };
    }
  }

  onLoginSubmit = (e) => {
    e.preventDefault();

    const Account = {
      email: this.email.value,
      password: this.password.value,
    }

    let checkEmpty = false;

    for (let a in Account) {
      console.log(Account[a]);
      if (Account[a] === "" || Account[a] === undefined) {
        checkEmpty = true;
      }
    }

    if (checkEmpty) {
      this.setState({
        message:
          { massageHidden: false, content: 'You must containt datas in all field.', status: "negative" }
      });
    } else {
      request.post('/api/login', Account, false)
        .then((res) => {
          console.log(res.data);
          if (res.status === "User and Password are not matched") {
            this.setState({
              message:
                { massageHidden: false, content: res.status, status: "negative" }
            });
            this.password.value = "";
            this.email.value = "";
          } else {
            localStorage.setItem('token', res.token);
            window.location = '/';
          }
        })
        .catch((error) => {
          this.setState({
            message:
            {
              massageHidden: false,
              content: error,
              status: "negative"
            }
          }
          );
        });
    }
  }

  render() {
    return (
      <TemplateTKD>
        <Container>
          <Message content={this.state.message.content} hidden={this.state.message.massageHidden} className={this.state.message.status} />
          <h1>LOG IN</h1>
          <Form onSubmit={this.onLoginSubmit} >
            <Form.Field>
              <label>Email</label>
              <input type="email" placeholder='your@email.com' ref={(input) => this.email = input} />
            </Form.Field>

            <Form.Field>
              <label>Password</label>
              <input type="password" placeholder='password' ref={(input) => this.password = input} />
            </Form.Field>
            <Button color="blue" >Login</Button>

            <h3>New Customer? </h3>

            <p>
              Sign up for an account to take advantage of order tracking and
              history as well as pre-filled forms during checkout on subsequent
              orders.
            </p>
          </Form>
          <Button onClick={() => { window.location = '/register' }}>Register</Button>
        </Container>
      </TemplateTKD>
    );
  }
}
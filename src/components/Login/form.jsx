import React, { Component } from "react";
import Connection from '../pomLib/connection';
import Token from '../pomLib/token';
import "semantic-ui-css/semantic.css";
import { Button, Form } from "semantic-ui-react";

const request = Connection.createClass();

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: ""
    }
  }

  onLoginSubmit = async (e) => {
    e.preventDefault();
    const Account = {
      email: this.email.value,
      password: this.password.value,
    }
    let isEmpty = false;
    for (let a in Account) { // check field empty
      if (Account[a] === "" || Account[a] === undefined) {
        isEmpty = true;
      }
    }
    if (isEmpty) {
      this.props.setMessage({
        content: 'You must containt datas in all field.',
        hidden: false,
        className: 'negative'
      });
    } else {
      this.setState({ loading: "loading" });
      await request.post('/api/login', Account, false)
      .then(res => {
        if (res.status === "User and Password are not matched") {
          this.props.setMessage({
            content: res.status,
            hidden: false,
            className: 'negative'
          });
          this.password.value = "";
          this.email.value = "";
          this.setState({ loading: "" });
        } else {
          Token.code = res.token;
          window.location = '/';
        }
      })
      .catch(err => {
        this.props.setMessage({
          content: err,
          hidden: false,
          className: 'negative'
        });
      });
    }
  }

  linkRegis = () => {
    window.location = '/register';
  }

  render() {
    const RegisterInvite = (
      <React.Fragment>
        <h3>New Customer? </h3>
        <p>
          Sign up for an account to take advantage of order tracking and
          history as well as pre-filled forms during checkout on subsequent
          orders.
        </p>
        <Button onClick={this.linkRegis}>Register</Button>
      </React.Fragment>
    );
    return (
      <React.Fragment>
        <h1>LOGIN</h1>
        <Form onSubmit={this.onLoginSubmit} >
          <Form.Field>
            <label>Email</label>
            <input type="email" placeholder='your@email.com' ref={(input) => this.email = input} />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input type="password" placeholder='password' ref={(input) => this.password = input} />
          </Form.Field>
          <Button color="blue" className={this.state.loading} >Login</Button>
        </Form>
        {RegisterInvite}
      </React.Fragment>
    );
  }
}
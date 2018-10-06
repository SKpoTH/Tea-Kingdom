import React, { Component } from "react";
import "semantic-ui-css/semantic.css";
import { Container, Button, Form } from "semantic-ui-react";
import NormalFrom from "../../assets/normalForm";
import PasswordForm from "../../assets/passwordForm";
import MyButton from "../../assets/Mybutton";
import axios from "axios";

class Content extends Component {
  constructor(props){
    super(props);
    
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onLoginSubmit = this.onLoginSubmit.bind(this);

    this.state = {
          email : '',
          password : ''
    }
  }

  onChangeEmail(e){
    this.setState({
      email: e.target.value
    });
  }

  onChangePassword(e){
    this.setState({
      password: e.targe.value
    });
  }

  onLoginSubmit(e){
    e.preventDefault();
    
    const Account = {
      email: this.state.email,
      password: this.state.pass
    }

    const status = {
      login: ''
    }

      axios.post('http://localhost:5000/authen/login', Account)
        .then(res => console.log(res.data));

    this.setState({
      email: '',
      password: ''
    });

    window.location = '/login';
    
  }

  render() {
    return (
      <div>
        <Container>
          <h1>LOG IN</h1>
          <Form onSubmit={ this.onLoginSubmit }>
            <NormalFrom label="Email" placeholder="your@email.com" 
                        onChange={ this.onChangeEmail } 
                        value={ this.state.email }/>
            <PasswordForm label="password" placeholder="password" 
                        onChange={ this.onChangePassword }  
                        value={ this.state.password }/>
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

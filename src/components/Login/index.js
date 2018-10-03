import React, { Component } from 'react';
import TemplateTKD from '../template/TemplateTKD';
import 'semantic-ui-css/semantic.css';
import {Container, Button, Form, } from 'semantic-ui-react';

class Content extends Component {
    render() {
        return (          
          <Container>
            <h1>LOG IN</h1>
            <Form>
            
              <Form.Field>
                <label>Email</label>
                <input placeholder='your@email.com' />
              </Form.Field>
              
              <Form.Field>
                <label>Password</label>
                <input size="small" type="password" placeholder='password' />
              </Form.Field>
    

              <Form.Field>
                <Button color='blue'>Login</Button>               
                <a onclick="console.log('The link was clicked.'); return false"> Forgot your password? </a>   
              </Form.Field>
              
              <Form.Field>
                <label><h3>New Customer? </h3></label>
              </Form.Field>

              <Container>
                <p>
                Sign up for an account to take advantage of order tracking and history as well as pre-filled forms during checkout on subsequent orders.
                </p>
                
                <Form.Field>
                <Button>Register</Button>               
              </Form.Field>

              </Container>

              </Form>
            
          </Container>
        );
    }
}

export default class Login extends Component {
  render() {
    return (
      <TemplateTKD>
        <Content />
      </TemplateTKD>
    );
  }
}

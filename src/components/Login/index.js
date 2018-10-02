import React, { Component } from 'react';
import 'semantic-ui-css/semantic.css';
import { Segment, Button, Divider } from 'semantic-ui-react'
import Header from '../../template/Header';
import Footer from '../../template/Footer';

class LoginContent extends Component {
    render() {
        return (            
            <Segment padded>
                <Button primary fluid>
                    Login
                </Button>
                <Divider horizontal>Or</Divider>
                <Button secondary fluid>
                    Sign Up Now
                </Button>
            </Segment>
        );
    }
}

export default class Login extends Component {
    render() {
      return (
        <div>
          <Header/>
          <LoginContent/>
          <Footer/>
        </div>
      );
    }
  }

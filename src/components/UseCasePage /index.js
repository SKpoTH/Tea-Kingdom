import React, { Component } from 'react';
import 'semantic-ui-css/semantic.css';
import { Segment, Button, Divider } from 'semantic-ui-react';
import Header from '../template/Header';
import Footer from '../template/Footer';


class Content extends Component {
    render() {
        return (            
            <h1>Code here</h1>
        );
    }
}

export default class Xx extends Component {
    render() {
      return (
        <div>
          <Header/>
          <Content/>
          <Footer/>
        </div>
      );
    }
  }

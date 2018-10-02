import React, { Component } from 'react';

import Header from '../template/Header';
import Footer from '../template/Footer';
import ProductDetail from './ProductDetail';

import 'semantic-ui-css/semantic.css';
import {} from 'semantic-ui-react';

class Content extends Component {
  render() {
    return (
      <ProductDetail />
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

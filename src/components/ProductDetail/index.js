import React, { Component } from 'react';
import TemplateTKD from '../template/TemplateTKD';
import 'semantic-ui-css/semantic.css';

import MainProduct from './MainProduct';
import Review from './Review';
import SubProduct from './SubProduct';

import {} from 'semantic-ui-react';

class Content extends Component {
  render() {
    return (
      <div>
        <MainProduct />
        <SubProduct />
        <Review />
      </div>
    );
  }
}

export default class ProductDetail extends Component {
  render() {
    return (
      <TemplateTKD>
        <Content />
      </TemplateTKD>
    );
  }
}

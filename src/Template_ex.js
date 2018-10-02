import React, { Component } from 'react';
import Header from './template/Header';
import Footer from './template/Footer';

export default class Template extends Component {
  render() {
    return (
      <div>
        <Header/>
        {/* your jsx */}
        <Footer/>
      </div>
    );
  }
}
import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';

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
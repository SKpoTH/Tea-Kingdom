import React, { Component } from 'react';

import TemplateTKD from '../template/TemplateTKD';
import 'semantic-ui-css/semantic.css';
import { Container } from 'semantic-ui-react';

class Content extends Component {
  render() {
    return (
      <div>
        {/* code here (don't delete <div>) */}
      </div>
    );
  }
}

export default class xx extends Component {
  render() {
    return (
      <TemplateTKD>
        <Content />
      </TemplateTKD>
    );
  }
}
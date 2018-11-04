import React, { Component } from 'react';
import TemplateTKD from '../template/TemplateTKD';
import 'semantic-ui-css/semantic.css';
import { Container, Responsive } from 'semantic-ui-react';
import Ordermobile from './OrderMobile';
import Ordercom from './OrderCom';

export default class Order extends Component {
  render() {
    return (
      <TemplateTKD marginNon='true'>
        <Container>
          <Responsive {...Responsive.onlyComputer}>
            <Ordercom />
          </Responsive>

          <Responsive {...Responsive.onlyTablet}>
            <Ordercom />
          </Responsive>

          <Responsive {...Responsive.onlyMobile}>
            <Ordermobile />
          </Responsive>
        </Container>
      </TemplateTKD>
    );
  }
}
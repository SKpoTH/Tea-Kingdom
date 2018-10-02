import React, { Component } from 'react';
import { Menu, Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.css';

const icon = "imgs/logo.png";

export default class Header extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Container>
        <Menu secondary>
          <Menu.Item><img src={icon} alt=""/></Menu.Item>
          <Menu.Item>Tea-KingDom</Menu.Item>
          <Menu.Menu position='right'>
            <Menu.Item name='Register' active={activeItem === 'Register'} onClick={this.handleItemClick} />
            <Menu.Item name='Login' active={activeItem === 'Login'} onClick={this.handleItemClick} />
          </Menu.Menu>
        </Menu>
      </Container>
    )
  }
}
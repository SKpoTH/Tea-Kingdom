import React, { Component } from 'react';
import { Menu, Container, Image } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.css';

const icon = "imgs/logo.png";
const logo = "imgs/mylogo.png";

export default class Header extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Container>
        <Menu secondary>
          {/* <Menu.Item><img src={icon} alt=""/></Menu.Item> */}
          <Menu.Item position='left'>Home</Menu.Item>
          <Image src={logo} size='medium' centered/>
          <Menu.Menu position='right'>
            <Menu.Item name='Register' active={activeItem === 'Register'} onClick={this.handleItemClick} />
            <Menu.Item name='Login' active={activeItem === 'Login'} onClick={this.handleItemClick} />
          </Menu.Menu>
        </Menu>
      </Container>
    )
  }
}
import React, { Component } from "react";

import "./ProductDetail.css";

import { Container, Header, Segment, Item, Divider } from "semantic-ui-react";

// Main Product
/*
class MenuBar extends Component {
    state = {}
  
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
    render() {
        const { activeItem } = this.state
  
        return (
        <Menu fluid widths={3}>
            <Menu.Item name='buy' active={activeItem === 'buy'} onClick={this.handleItemClick} />
            <Menu.Item name='sell' active={activeItem === 'sell'} onClick={this.handleItemClick} />
            <Menu.Item name='rent' active={activeItem === 'rent'} onClick={this.handleItemClick} />
        </Menu>
      );
    }
}
*/
export default class MainProduct extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Segment>
          <Item.Group>
            <Item>
              <Item.Image size="large" src={this.props.dataR.src} />
              <Item.Content>
                <Item.Header>
                  <Header as="h1">
                    <h1 className="productName">{this.props.dataR.name}</h1>
                  </Header>
                </Item.Header>
                <Divider />
                <Item.Meta>
                  <div className="priceSpace">
                    <h3 className="price">${this.props.dataR.price}</h3>
                  </div>
                </Item.Meta>
                <Item.Description>{this.props.dataR.description}</Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
      </Container>
    );
  }
}

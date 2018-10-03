import React, { Component } from 'react';

import './ProductDetail.css';

import { Container, Header, Segment, Item, Divider } from 'semantic-ui-react';

// Main Product
const Product = () => (
    <Container>
        <Segment>
            <Item.Group>
                <Item>
                    <Item.Image size='large' src='/imgs/black_tea_dust.jpg' />
                    <Item.Content>
                        <Item.Header>
                            <Header as='h1'><h1 className='productName'>Black tea</h1></Header>
                        </Item.Header>
                        <Divider />
                        <Item.Meta>
                            <div className='priceSpace'>
                                <h3 className='price'>$1200</h3>
                            </div>
                        </Item.Meta>
                        <Item.Description>This is the dust of black cariflonia tea from the leaves and branches</Item.Description>
                    </Item.Content>
                </Item>
            </Item.Group>
        </Segment>
    </Container>
)
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
        this.state = {};
    }

    render() {

        return (
            <Product />
        );
    }
}
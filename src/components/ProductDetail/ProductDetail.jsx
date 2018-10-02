import React, { Component } from 'react';

import './ProductDetail.css';

import { Grid, Image, Container, Header, Menu, Segment, Divider, Item, Card, Comment, Button, Form } from 'semantic-ui-react';

const MainProduct = () => (
    <Container className='mainArea'>
        <Segment>
            <MenuBar />
            <Item.Group>
                <Item>
                    <Item.Image size='large' src='/imgs/black_tea_dust.jpg' />
                    <Item.Content>
                        <Item.Header>
                            <Header as='h1' dividing><h1 className='productName'>Black tea</h1></Header>
                        </Item.Header>
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

const SubProduct = () => (
    <Container className='subArea'>
        <Card.Group>
            <Card className='mainArea'>
                <Card.Content>
                    <Card.Header>Green Tea</Card.Header>
                    <Image size='small' src='/imgs/green_tea.jpg' />
                    <Card.Meta>$ 500</Card.Meta>
                    <Card.Description>Nice one for this tea. I love it</Card.Description>
                </Card.Content>
            </Card>
            <Card className='mainArea'>
                <Card.Content>
                    <Card.Header>Green Tea</Card.Header>
                    <Image size='small' src='/imgs/green_tea.jpg' />
                    <Card.Meta>$ 500</Card.Meta>
                    <Card.Description>Nice one for this tea. I love it</Card.Description>
                </Card.Content>
            </Card>
            <Card className='mainArea'>
                <Card.Content>
                    <Card.Header>Green Tea</Card.Header>
                    <Image size='small' src='/imgs/green_tea.jpg' />
                    <Card.Meta>$ 500</Card.Meta>
                    <Card.Description>Nice one for this tea. I love it</Card.Description>
                </Card.Content>
            </Card>
        
        </Card.Group>
    </Container>
)

const Review = () => (
    <Container className='mainArea'>
        <Comment.Group>
        <Header as='h3' dividing>
        Comments
        </Header>

        <Comment>
        <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
        <Comment.Content>
            <Comment.Author as='a'>Matt</Comment.Author>
            <Comment.Metadata>
            <div>Today at 5:42PM</div>
            </Comment.Metadata>
            <Comment.Text>How artistic!</Comment.Text>
            <Comment.Actions>
            <Comment.Action>Reply</Comment.Action>
            </Comment.Actions>
        </Comment.Content>
        </Comment>

        <Comment>
        <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
        <Comment.Content>
            <Comment.Author as='a'>Elliot Fu</Comment.Author>
            <Comment.Metadata>
            <div>Yesterday at 12:30AM</div>
            </Comment.Metadata>
            <Comment.Text>
            <p>This has been very useful for my research. Thanks as well!</p>
            </Comment.Text>
            <Comment.Actions>
            <Comment.Action>Reply</Comment.Action>
            </Comment.Actions>
        </Comment.Content>
        <Comment.Group>
            <Comment>
            <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
            <Comment.Content>
                <Comment.Author as='a'>Jenny Hess</Comment.Author>
                <Comment.Metadata>
                <div>Just now</div>
                </Comment.Metadata>
                <Comment.Text>Elliot you are always so right :)</Comment.Text>
                <Comment.Actions>
                <Comment.Action>Reply</Comment.Action>
                </Comment.Actions>
            </Comment.Content>
            </Comment>
        </Comment.Group>
        </Comment>

        <Comment>
        <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />
        <Comment.Content>
            <Comment.Author as='a'>Joe Henderson</Comment.Author>
            <Comment.Metadata>
            <div>5 days ago</div>
            </Comment.Metadata>
            <Comment.Text>Dude, this is awesome. Thanks so much</Comment.Text>
            <Comment.Actions>
            <Comment.Action>Reply</Comment.Action>
            </Comment.Actions>
        </Comment.Content>
        </Comment>

        <Form reply>
        <Form.TextArea />
        <Button content='Add Reply' labelPosition='left' icon='edit' primary />
        </Form>
        </Comment.Group>
    </Container>
)


export default class ProductDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

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
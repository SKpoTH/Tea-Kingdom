import React, { Component } from 'react';
import TemplateTKD from '../template/TemplateTKD';
import 'semantic-ui-css/semantic.css';
import { Grid, Image, Container, Header, Icon, Message, Button, Segment, Radio, Form, Table, Menu } from 'semantic-ui-react'

class Content extends Component {
  state = {}
  handleChange = (e, { value }) => this.setState({ value })

  render() {
    return (
      <Container textAlign = 'center'>
          <Header as='h3' icon>
            <Icon name='cart' />
            SHOPPING CART
          </Header>



          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Picture</Table.HeaderCell>
                <Table.HeaderCell>Description</Table.HeaderCell>
                <Table.HeaderCell>Amount</Table.HeaderCell>
                <Table.HeaderCell>Price</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  <Image size = 'small' src='https://react.semantic-ui.com/images/wireframe/image.png' />
                </Table.Cell>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Image size = 'small' src='https://react.semantic-ui.com/images/wireframe/image.png' />
                </Table.Cell>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
              </Table.Row>
            </Table.Body>

            <Table.Footer>
              <Table.Row>
                <Table.HeaderCell colSpan='4'>
                  <Menu floated='right' pagination>
                    <Menu.Item as='a' icon>
                      <Icon name='chevron left' />
                    </Menu.Item>
                    <Menu.Item as='a'>1</Menu.Item>
                    <Menu.Item as='a'>2</Menu.Item>
                    <Menu.Item as='a'>3</Menu.Item>
                    <Menu.Item as='a'>4</Menu.Item>
                    <Menu.Item as='a' icon>
                      <Icon name='chevron right' />
                    </Menu.Item>
                  </Menu>
                </Table.HeaderCell>
              </Table.Row>
            </Table.Footer>
          </Table>





        

        <Grid>
          <Grid.Row>
            <Grid.Column width={2}>
             <Segment>
                <Header as='h4'>Picture</Header>
              </Segment>
            </Grid.Column>

            <Grid.Column width={7}>
              <Segment>
                <Header as='h4'>Detail</Header>
              </Segment>
            </Grid.Column>

            <Grid.Column width={3}>
              <Segment>
                <Header as='h4'>Amount</Header>
              </Segment>
            </Grid.Column>

            <Grid.Column width={3}>
              <Segment>
                <Header as='h4'>Price</Header>
              </Segment>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={2}>
              <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
            </Grid.Column>

            <Grid.Column width={7} textAlign = 'left'>
              <Message>
                <p>
                  Message
                </p>
              </Message>
            </Grid.Column>

            <Grid.Column width={3}>
              <Message>
                <p>
                  Message
                </p>
              </Message>
            </Grid.Column>

            <Grid.Column width={3}>
             <Message>
                <p>
                  Message
                </p>
              </Message>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <Container textAlign = 'left'>
          <Form>
            <Form.Field>
              Shipment : <b>{this.state.value}</b>
            </Form.Field>
            <Form.Field>
              <Radio
                label='Choose this'
                name='radioGroup'
                value='this'
                checked={this.state.value === 'this'}
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <Radio
                label='Or that'
                name='radioGroup'
                value='that'
                checked={this.state.value === 'that'}
                onChange={this.handleChange}
              />
            </Form.Field>
          </Form>
        </Container>

        <div>
          <Button animated='fade'>
            <Button.Content visible>
            BACK TO SHOPPING
            </Button.Content>
            <Button.Content hidden>
              <Icon name='arrow left' />
            </Button.Content>
          </Button>
          <Button animated='fade'>
            <Button.Content hidden>
              <Icon name='undo' />
            </Button.Content>
            <Button.Content visible>
            UPDATE CART
            </Button.Content>
          </Button>
          <Button animated='fade'>
            <Button.Content visible>
            CHECKOUT
            </Button.Content>
            <Button.Content hidden>
              <Icon name='dollar sign' />           
            </Button.Content>
          </Button>
      </div>
      </Container>
    );
  }
}

export default class Order extends Component {
  render() {
    return (
      <TemplateTKD>
        <Content />
      </TemplateTKD>
    );
  }
}
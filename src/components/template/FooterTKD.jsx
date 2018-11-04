import React, { Component } from 'react';
import { Segment, Container, Grid, Header, List, Item, Divider, Icon } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.css';
import styled from 'styled-components'

const Margin = styled.div`
  margin-top: 50px;
`

export default class FooterTKD extends Component {
  render() {
    return (
      <Margin>
        <Segment vertical className='footer'>
          <Container>
            <Grid columns='equal' stackable>
              <Grid.Column>
                <Header as='h4'>Contact Us</Header>
                <List>
                  <List.Item icon='users' content='Tea Kingdom' />
                  <List.Item icon='marker' content='Thailand, Bangkok' />
                  <List.Item icon='mail' content='TeaKingdom@ku.th' />
                  <List.Item icon='tty' content='999-999-9999' />
                </List>
              </Grid.Column>
              <Grid.Column>
                <Header as='h4'>Customer Service</Header>
                <List link>
                  <List.Item as='a'>Help</List.Item>
                  <List.Item as='a'>About Us</List.Item>
                  <List.Item as='a'>General Policies</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column>
                <Header as='h4'>Support By</Header>
                <Icon name='facebook f' size='big' />
                <Icon name='twitter' size='big' />
                <Icon name='google plus g' size='big' />
                <Icon name='instagram' size='big' />
                <Icon name='cc visa' size='big' />
                <Icon name='cc mastercard' size='big' />
                <Icon name='cc paypal' size='big' />
                <Icon name='cc amex' size='big' />
                <Item as='p'>Support for the continued development of Semantic UI comes directly from the community.</Item>
              </Grid.Column>
            </Grid>

          </Container>
          <Container textAlign='center'>
            <Item className="center">&copy; 2018 Tea-kingdom</Item>
          </Container>
        </Segment>
      </Margin>
    );
  }
}
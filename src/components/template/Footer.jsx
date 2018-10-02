import React, { Component } from 'react';
import { Segment, Container , Grid , Header , List , Item , Divider } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.css';


export default class Footer extends Component {
  render() {
    return (
      <Segment vertical className='footer'>
        <Container>
          <Grid columns='equal' stackable>
            <Grid.Column>
              <Header as='h4'>Colum1</Header>
              <List link>
                <List.Item as='a'>Apples</List.Item>
                <List.Item as='a'>Pears</List.Item>
                <List.Item as='a'>Oranges</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              <Header as='h4'>Colum2</Header>
              <List link>
                <List.Item as='a'>Apples</List.Item>
                <List.Item as='a'>Pears</List.Item>
                <List.Item as='a'>Oranges</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              <Header as='h4'>Colum3</Header>
              <Item as='p'>Support for the continued development of Semantic UI comes directly from the community.</Item>
            </Grid.Column>
          </Grid>
          <Divider/>
        </Container>
        <Container textAlign='center'>
          <Item center>&copy; 2018 Tea-kingdom</Item>
        </Container>
      </Segment>
    );
  }
}
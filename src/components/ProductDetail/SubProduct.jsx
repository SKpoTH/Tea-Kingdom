import React, { Component } from "react";

import "./ProductDetail.css";

import { Image, Container, Card, Header, Grid } from "semantic-ui-react";

class MyCard extends Component {
  render() {
    return (
      <Card>
        <Image src={this.props.src} />
        <Card.Content>
          <Card.Header>{this.props.name}</Card.Header>
          <Card.Meta>{this.props.price}</Card.Meta>
          <Card.Description>{this.props.desc}</Card.Description>
        </Card.Content>
      </Card>
    );
  }
}

const Products = () => (
  <Container className="setMargin">
    <Header as="h2">Related item</Header>
    <Grid>
      <Grid.Row columns={4}>
        <Grid.Column>
          <MyCard
            src="/imgs/green_tea.jpg"
            name="Green Tea"
            price="$ 500"
            desc="Nice this make me feel relax"
          />
        </Grid.Column>
        <Grid.Column>
          <MyCard
            src="/imgs/green_tea.jpg"
            name="Green Tea"
            price="$ 500"
            desc="Nice this make me feel relax"
          />
        </Grid.Column>
        <Grid.Column>
          <MyCard
            src="/imgs/green_tea.jpg"
            name="Green Tea"
            price="$ 500"
            desc="Nice this make me feel relax"
          />
        </Grid.Column>
        <Grid.Column>
          <MyCard
            src="/imgs/green_tea.jpg"
            name="Green Tea"
            price="$ 500"
            desc="Nice this make me feel relax"
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>
);

export default class SubProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <Products />;
  }
}

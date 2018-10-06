import React, { Component } from "react";
import { Container, Grid, Message, List } from "semantic-ui-react";
import "semantic-ui-css/semantic.css";

class MyGrid extends Component {
  render() {
    return (
      <Grid.Column width={5.5}>
        <Message>
          <Message.Header>{this.props.header}</Message.Header>
          <p>
            {this.props.role}
            <List>
              <List.Item style={{ display: "inline" }}>
                <List.Icon name="mail" />
                {this.props.mail}
              </List.Item>
            </List>
          </p>
        </Message>
        {/* <Image src='/images/wireframe/media-paragraph.png' /> */}
      </Grid.Column>
    );
  }
}

export default class Member extends Component {
  render() {
    return (
      <Container textAlign={"right"}>
        <Grid columns="three" divided>
          <Grid.Row>
            <MyGrid
              header="Arniwatt Chonkiattipoom"
              role="Chief Executive Officer"
              mail="arniwatt.c@ku.th"
            />
            <MyGrid
              header="Chanchai Chanatapaporn"
              role="Busiess Owner"
              mail="chanchai.c@ku.th"
            />
            <MyGrid
              header="Kittipob Patanavanich"
              role="Developer"
              mail="Kittipob.pa@ku.th"
            />
          </Grid.Row>

          <Grid.Row>
            <MyGrid
              header="Siwakun Kunsuk"
              role="Project Manager"
              mail="siwakun.k@ku.th"
            />
            <MyGrid
              header="Phattharaphon Romphet"
              role="Quality Assurance"
              mail="phattharaphon.r@ku.th"
            />
            <MyGrid
              header="Udom Chaowanakosol"
              role="Developer Assistant"
              mail=" Udom.ch@ku.th"
            />
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

import React, { Component } from 'react';
import Header from '../template/Header';
import Footer from '../template/Footer';
import 'semantic-ui-css/semantic.css';
import { Grid , Container , Message } from 'semantic-ui-react';

class PersonalData extends Component{
  render() {
    return (
      <Container textAlign={"center"}>
        <Grid columns='three' divided>
          <Grid.Row>
            <Grid.Column width={5}>
              <Message>
                <Message.Header>Arniwatt Chonkiattipoom</Message.Header>
                <p>Chief Executive Officer</p>
              </Message>
              {/* <Image src='/images/wireframe/media-paragraph.png' /> */}
            </Grid.Column>
            <Grid.Column width={5}>
              <Message>
                <Message.Header>Chanchai Chanatapaporn</Message.Header>
                <p>Busiess Owner</p>
              </Message>
              {/* <Image src='/images/wireframe/media-paragraph.png' /> */}
            </Grid.Column>
            <Grid.Column width={5}>
              <Message>
                <Message.Header>Kittipob</Message.Header>
                <p>Developer</p>
              </Message>
              {/* <Image src='/images/wireframe/media-paragraph.png' /> */}
            </Grid.Column>
        </Grid.Row>

        <Grid.Row>
            <Grid.Column width={5}>
              <Message>
                <Message.Header>Siwakun</Message.Header>
                <p>Project Manager</p>
              </Message>
              {/* <Image src='/images/wireframe/media-paragraph.png' /> */}
            </Grid.Column>
            <Grid.Column width={5}>
              <Message>
                <Message.Header>Pattrapon</Message.Header>
                <p>Quality Assurance</p>
              </Message>
              {/* <Image src='/images/wireframe/media-paragraph.png' /> */}
            </Grid.Column>
            <Grid.Column width={5}>
              <Message>
                <Message.Header>Udom</Message.Header>
                <p>Developer Assistant</p>
              </Message>
              {/* <Image src='/images/wireframe/media-paragraph.png' /> */}
            </Grid.Column>
        </Grid.Row>
      </Grid>
      </Container>
    );
  }
}

class Content extends Component {
  render() {
      return (
        <div>
          <Container textAlign='center'>
            <Message>
              <Message.Header>About Us</Message.Header>
            </Message>
          </Container>
          <PersonalData/>
        </div>
      );
  }
}

export default class AboutUs extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Content/>
        <Footer/>
      </div>
    );
  }
}

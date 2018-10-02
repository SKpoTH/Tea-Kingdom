import React, { Component } from 'react';
import Header from '../template/Header';
import Footer from '../template/Footer';
import 'semantic-ui-css/semantic.css';
import { Grid , Container , Message , Image , List} from 'semantic-ui-react';

class PersonalData extends Component{
  render() {
    return (
      <Container textAlign={"right"}>
        <Grid columns='three' divided>
          <Grid.Row>
            <Grid.Column width={5}>
              <Message>
                <Message.Header>Arniwatt Chonkiattipoom</Message.Header>
                <p>
                  Chief Executive Officer
                  <List>
                    <List.Item style={{display:"inline"}}>
                      <List.Icon name='mail' />
                        arniwatt.c@ku.th
                    </List.Item>
                  </List>
                </p>
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
          <Container>
            <Container textAlign='center'>
              <Message size='massive'>About Us</Message>
            </Container>
            <List>
              <List.Item icon='users' content='Tea Kingdom' />
              <List.Item icon='marker' content='Thailand, Bangkok' />
              {/* <List.Item icon='mail' content={<a href='mailto:jack@semantic-ui.com'>arniwatt.c@ku.th</a>} /> */}
              <List.Item icon='mail' content='TeaKingdom@ku.th' />
              <List.Item icon='tty' content='xxx-xxx-xxx' />
            </List>
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

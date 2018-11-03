import React, { Component } from 'react';
import 'semantic-ui-css/semantic.css';
import { Grid , Container , Message , List, Image,} from 'semantic-ui-react';

class PersonalData extends Component{
  render() {
    return (
      <Container textAlign={'right'}>
        <Grid columns='three' divided>
          <Grid.Row>
            <Grid.Column width={5.5}>
              <Message>
                <Image src='/imgs/real_p.jpg' 
                       style={{float:'left'}}
                       avatar/>
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
            </Grid.Column>
            <Grid.Column width={5.5}>
              <Message>
              <Image src='/imgs/present_pic2.jpg' 
                       style={{float:'left'}}
                       avatar/>
                <Message.Header>Chanchai Chanatapaporn</Message.Header>
                <p>
                  Business Owner
                  <List>
                    <List.Item style={{display:"inline"}}>
                      <List.Icon name='mail' />
                        chanchai.c@ku.th
                    </List.Item>
                  </List>  
                </p>
              </Message>
            </Grid.Column>
            <Grid.Column width={5.5}>
              <Message>
              <Image src='/imgs/present_pic3.jpg' 
                       style={{float:'left'}}
                       avatar/>
                <Message.Header>Kittipob Patanavanich</Message.Header>
                <p>
                  Developer
                  <List>
                    <List.Item style={{display:"inline"}}>
                      <List.Icon name='mail' />
                        Kittipob.pa@ku.th
                    </List.Item>
                  </List>  
                </p>
              </Message>
            </Grid.Column>
        </Grid.Row>

        <Grid.Row>
            <Grid.Column width={5.5}>
              <Message>
              <Image src='/imgs/present_pic4.jpg' 
                       style={{float:'left'}}
                       avatar/>
                <Message.Header>Siwakun Kunsuk</Message.Header>
                <p>
                  Project Manager
                  <List>
                    <List.Item style={{display:"inline"}}>
                      <List.Icon name='mail' />
                        siwakun.k@ku.th
                    </List.Item>
                  </List>
                </p>
              </Message>
            </Grid.Column>
            <Grid.Column width={5.5}>
              <Message>
              <Image src='/imgs/present_pic.jpg' 
                       style={{float:'left'}}
                       avatar/>
                <Message.Header>Phattharaphon Romphet</Message.Header>
                <p>
                  Quality Assurance
                  <List>
                    <List.Item style={{display:"inline"}}>
                      <List.Icon name='mail' />
                        phattharaphon.r@ku.th
                    </List.Item>
                  </List>
                </p>
              </Message>
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
            <Message color='black' size='massive'>About Us</Message>
          </Container>
          
          <PersonalData/>
        </div>
      );
  }
}

export default class AboutUs extends Component {
  render() {
    return (
        <Content />   
    );
  }
}

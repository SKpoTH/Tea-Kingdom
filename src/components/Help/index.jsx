import React, { Component } from 'react';
import TemplateTKD from '../template/TemplateTKD';
import 'semantic-ui-css/semantic.css';
import {Icon, Header,Container, Message, Image} from 'semantic-ui-react'

class Content extends Component {
  render() {
    return(
      <Container>
        <Container textAlign='center'>
          <Header as='h1'><u><b>Hot Questions</b></u></Header><br/>
        </Container>

        <Message style={{margin:'0px 0px 30px'}} size='big'>
          <Icon name='question circle' color='red' size='large'/><b>How do I register to Tea Kingdom?</b><br/>
          <Icon name='check circle' color='green' size='large'/>Signing up is quick and easy! Register using your email address. 
          You need to verify your email address before you can choose your username and password.<br/><br/>
            <div style={{margin:'0px 100px '}}>
              1. Click register button at top bar.
              <Image src='/imgs/regis1.jpg'/><br/>
              2. Enter your information, Email and password. Then click submit button. 
              <Image src='/imgs/regis2.jpg'/><br/>
              3. Done!
              <Image src='/imgs/regis3.jpg'/><br/>
            </div>
        </Message>

        <Message style={{margin:'0px 0px 30px'}} size='big'>
          <Icon name='question circle' color='red' size='large'/><b>Why do I need to verify my email address?</b><br/>
          <Icon name='check circle' color='green' size='large'/>Verifying your email address allows you to receive important order updates and notifications 
          in your email account. We will also keep you updated with the latest news, campaigns, and promos in Tea Kingdom.
        </Message>

        <Message style={{margin:'0px 0px 30px'}} size='big'>
          <Icon name='question circle' color='red' size='large'/><b>When to expect an order to arrive?</b><br/>
          <Icon name='check circle' color='green' size='large'/>Delivery of an order may vary depending on seller’s Days 
          to Ship and Courier Delivery Lead Time.
          After confirmation of order, seller will be notified to arrange a pickup. 
          Tea Kingdom supported courier will then pickup the order as scheduled.
          <div style={{margin:'0px 100px '}}>
            <Image src='/imgs/delivery.jpg'/><br/>
          </div>
        </Message>

      </Container>
    )
  }
}

export default class Help extends Component {
  render() {
    return (
      <TemplateTKD>
        <Content />
      </TemplateTKD>
    );
  }
}
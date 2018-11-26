import React, { Component } from 'react';
import TemplateTKD from '../template/TemplateTKD';
import 'semantic-ui-css/semantic.css';
import { Icon, Header, Container, Segment, Button, Divider, Form, Radio, TextArea, Image, Checkbox, Input, Select } from 'semantic-ui-react'

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
]

class Content extends Component {
  state = {}
  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state
    return (
      <Container>
        <Segment padded>
          <Header size='medium'>Enter Payment Information</Header>
          <Divider section />
          <Form>
            <Form.Group widths='equal'>
              <Form.Field control={Input} label='First name' placeholder='First name' />
              <Form.Field control={Input} label='Last name' placeholder='Last name' />
              <Form.Field control={Select} label='Gender' options={options} placeholder='Gender' />
            </Form.Group>
            <Form>
              <b>Card Type</b>
              <Form.Field
                style={{ margin: '10px 0px 0px' }}
                control={Radio}
                label='Visa'
                value='1'
                checked={value === '1'}
                onChange={this.handleChange}
              />
              <Form.Field
                control={Radio}
                label='MasterCard'
                value='2'
                checked={value === '2'}
                onChange={this.handleChange}
              />
              <Form.Field
                style={{ margin: '0px 0px 10px' }}
                control={Radio}
                label='Discover'
                value='3'
                checked={value === '3'}
                onChange={this.handleChange}
              />
            </Form>

            <Form.Field control={TextArea} rows={1} label='Card Number' placeholder='xxxx xxxx xxxx' />
            <Form.Group widths='equal'>
              <Form.Field control={TextArea} rows={1} label='Expiration Date' placeholder='MM / YY' />
              <Form.Field control={TextArea} rows={1} label='Security Code' placeholder='xxx' />
            </Form.Group>
            <Form.Field control={Checkbox} label='I agree to the Terms and Conditions' />
            <Form.Field control={Button}>Submit</Form.Field>
          </Form>

        </Segment>
      </Container>
    );
  }
}

export default class Payment extends Component {
  render() {
    return (
      <TemplateTKD>
        <Content />
      </TemplateTKD>
    );
  }
}
import React, { Component } from "react";
import TemplateTKD from "../template/TemplateTKD";
import "semantic-ui-css/semantic.css";
import { Form, Button, Checkbox, Container } from "semantic-ui-react";

class Content extends Component {
  render() {
    return (
      <Container>
        <h1>Register</h1>

        <Form>
          <Form.Field>
            <label>Email</label>
            <input placeholder="your@email.com" />
          </Form.Field>

          <Form.Group unstackable widths={2}>
            <Form.Field>
              <label>Password</label>
              <input type="password" placeholder="password" />
            </Form.Field>

            <Form.Field>
              <label>Retype Password</label>
              <input type="password" placeholder="password" />
            </Form.Field>
          </Form.Group>

          <Form.Group unstackable widths={2}>
            <Form.Input label="First name" placeholder="First name" />
            <Form.Input label="Last name" placeholder="Last name" />
          </Form.Group>

          <Form.Group widths={2}>
            <Form.Input label="Address" placeholder="Address" />
            <Form.Input label="Phone" placeholder="Phone" />
          </Form.Group>

          <Form.Checkbox label="I agree to the Terms and Conditions" />
          <Button type="submit">Submit</Button>
        </Form>
      </Container>
    );
  }
}

export default class Register extends Component {
  render() {
    return (
      <TemplateTKD>
        <Content />
      </TemplateTKD>
    );
  }
}

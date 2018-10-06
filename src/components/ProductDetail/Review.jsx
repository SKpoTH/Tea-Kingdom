import React, { Component } from "react";

import "./ProductDetail.css";

import { Container, Header, Comment, Button, Form } from "semantic-ui-react";

class MyComment extends Component {
  render() {
    return (
      <Comment>
        <Comment.Avatar src={this.props.src} />
        <Comment.Content>
          <Comment.Author as="a">{this.props.name}</Comment.Author>
          <Comment.Metadata>
            <div>{this.props.time}</div>
          </Comment.Metadata>
          <Comment.Text>{this.props.text}</Comment.Text>
          <Comment.Actions>
            <Comment.Action>Reply</Comment.Action>
          </Comment.Actions>
        </Comment.Content>
      </Comment>
    );
  }
}

const CommentSection = () => (
  <Container className="setMargin">
    <Comment.Group>
      <Header as="h2" dividing>
        Comments
      </Header>
      <MyComment
        src="https://react.semantic-ui.com/images/avatar/small/matt.jpg"
        name="Matt"
        time="Today at 5:42PM"
        text="How artistic!"
      />
      <Comment>
        <MyComment
          src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg"
          name="Elliot Fu"
          time="Yesterday at 12:30AM"
          text="This has been very useful for my research. Thanks as well!"
        />
        <Comment.Group>
          <MyComment
            src="https://react.semantic-ui.com/images/avatar/small/jenny.jpg"
            name="Jenny Hess"
            time="Just now"
            text="Elliot you are always so right :)"
          />
        </Comment.Group>
      </Comment>
      <MyComment
        src="https://react.semantic-ui.com/images/avatar/small/joe.jpg"
        name="Joe Henderson"
        time="5 days ago"
        text="Dude, this is awesome. Thanks so much"
      />

      <Form reply>
        <Form.TextArea />
        <Button content="Add Reply" labelPosition="left" icon="edit" primary />
      </Form>
    </Comment.Group>
  </Container>
);

export default class Review extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <CommentSection />;
  }
}

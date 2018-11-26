import React, { Component } from "react";
import Connection from '../pomLib/connection';
import "./ProductDetail.css";
import { Container, Header, Comment, Button, Form, Segment } from "semantic-ui-react";
import Token from "../pomLib/token";

const request = Connection.createClass();

export default class Review extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: "hidD", //main for sub review
      comment: '',
      load: [], // load = all data
      className: "loading"
    }
    this.formsRef = React.createRef();
  }

  componentDidMount() {
    this.getD();
  }

  getD = () => {
    request.post('/api/reply/load', { productID: this.props.idR })
    .then((res) => {
      this.setState({ load: res , className : "" });
    })
    .catch(err => {
      this.props.setMessage({
        content: err,
        hidden: false,
        className: 'negative'
      });
    });
  }

  sendE = () => {
    if (this.state.comment === '') return; // no comment
    const myComment = {
      productID: this.props.idR,
      id: this.state.id_host,
      comment: this.state.comment
    } // comment structure
    if (this.state.show === "hidD") { // sub comment is going to send
      request.post('/api/reply/new', myComment, true)
      .then((res) => {
        this.clearForm();
        this.getD();
      })
      .catch(err => {
        this.props.setMessage({
          content: err,
          hidden: false,
          className: 'negative'
        });
      });
    } else { // main comment is going to send
      request.post('/api/reply/sub', myComment, true)
      .then((res) => {
        this.clearForm();
        this.getD();
      })
      .catch(err => {
        this.props.setMessage({
          content: err,
          hidden: false,
          className: 'negative'
        });
      });
    }
  }
  replyToProd = () => {
    this.setState({ show: "hidD" });
  }
  clearForm = () => {
    this.setState({
      mail_reply: '',
      name_reply: '',
      show: "hidD",
      comment: '',
      id_host: ''
    });
  }
  scrollTofrom = () => {
    if(!Token.isLogin)
      return;
    this.formsRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center',
    })
  }
  render() {
    const { load ,show , name_reply, comment } = this.state; 
    var replyForm = '';
    if(Token.isLogin) {
      replyForm = (
        <Form reply>
          <div ref={this.formsRef} />
          <div className={"ui fluid right labeled input " + show}>
            <input className='info' type="text" value={"Reply : " + name_reply} disabled />
            <button className="ui button label instagram" role="button" onClick={this.replyToProd}>Reply Product</button>
          </div>
          <br />
          <Form.TextArea value={comment} onChange={(e, data) => { this.setState({ comment: data.value }) }} />
          <Button content="Add Reply" labelPosition="left" icon="edit" primary onClick={this.sendE} />
        </Form>
      );
    }
    const replyShow = load.map(item =>
      <div class="comment">
        <Comment.Avatar src={item.user.profileImage} />
        <div class="content">
          <a class="author">{item.user.firstname}</a>
          <div class="text">{item.text}</div>
          <div class="actions">
            <a onClick={() => { 
              this.setState({
                show: '',
                name_reply: item.user.firstname,
                mail_reply: item.user.email,
                id_host: item._id 
              });
              this.scrollTofrom();
            }}>Reply</a>
          </div>
        </div>
        {item.reply.map(sub =>
          <React.Fragment>
            {JSON.stringify(sub) === "{}" ? null :
              <div class="ui comments">
                <div class="comment">
                  <Comment.Avatar src={sub.prof.profileImage} />
                  <div class="content">
                    <a class="author">{sub.prof.firstname}</a>
                    <div class="text">{sub.text}</div>
                  </div>
                </div>
              </div>
            }
          </React.Fragment>
        )}
      </div>
    );
    const emptyComment = (
      <Segment secondary padded="very" className={this.state.className}>
        <p align="center">
          Nobody review this product.
        </p>
      </Segment>
    );
    return (
      <Container className="setMargin">
        <Comment.Group>
          <Header as="h2" dividing>Comments</Header>
          {JSON.stringify(load) == "[]" ? emptyComment : replyShow}
          {replyForm}
        </Comment.Group>
      </Container>
    );
  }
}
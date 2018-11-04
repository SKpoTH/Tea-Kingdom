import React, { Component } from "react";
import axios from 'axios'
import "./ProductDetail.css";

import { Container, Header, Comment, Button, Form } from "semantic-ui-react";

export default class Review extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mail_reply : '',
      show : "hidD",
      comment : '',
      id_host : '',
      load : []
    }
    axios.defaults.headers.common['Authorization'] = localStorage.getItem("token");
    this.getD();
  }
  getD = () => {
    axios.post('/api/reply/load', { productID : this.props.idR })
    .then((res) => {
      this.setState({load : res.data});
      // console.log(this.state.load)
    })
    .catch((error) => {
      console.log(error)
    })
  }
  sendE = () => {
    if(this.state.comment === '')
      return;
    if(this.state.show === "hidD") {
      const myOrder = {
        productID : this.props.idR,
        comment : this.state.comment
      }
      axios.post('/api/reply/new', myOrder)
      .then((res) => {
        // console.log(res.data)
        this.setState({
          mail_reply : '',
          show : "hidD",
          comment : '',
          id_host : ''
        });
        this.getD();
      })
      .catch((error) => {
        console.log(error)
      })
    } else {
      const myOrder = {
        id: this.state.id_host,
        comment : this.state.comment
      }
      axios.post('/api/reply/sub', myOrder)
      .then((res) => {
        // console.log(res.data)
        this.setState({
          mail_reply : '',
          show : "hidD",
          comment : '',
          id_host : ''
        });
        this.getD();
      })
      .catch((error) => {
        console.log(error)
      })
    }
  }
  
  render() {
    return (
      <Container className="setMargin">
        <Comment.Group>
          <Header as="h2" dividing>Comments</Header>
          {this.state.load.map(item =>
            <div class="comment">
              <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/matt.jpg" />
              <div class="content">
                <a class="author">{item.email}</a>
                <div class="text">{item.text}</div>
                <div class="actions">
                  <a onClick={()=> {this.setState({show: '', mail_reply: item.email, id_host: item._id})}}>Reply</a>
                </div>
              </div>
              {item.reply.map(sub => 
                <div class="ui comments">
                  <div class="comment">
                    <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg" />
                    <div class="content">
                      <a class="author">{sub.email}</a>
                      <div class="text">{sub.text}</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
          <Form reply>
            <div className={"ui fluid right labeled input "+this.state.show}>
              <input className='info' type="text" value={"Reply : "+this.state.mail_reply}  disabled/>
              <button className="ui button label instagram" role="button" onClick={()=>{this.setState({show : "hidD"})}}>Reply Product</button>
            </div>
            <br />
            <Form.TextArea value={this.state.comment} onChange={(e,data)=>{this.setState({comment : data.value})}}/>
            <Button content="Add Reply" labelPosition="left" icon="edit" primary onClick={this.sendE} />
          </Form>
        </Comment.Group>
      </Container>
    );
  }
}
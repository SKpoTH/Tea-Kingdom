import React, { Component } from "react";
import axios from 'axios'
import "./ProductDetail.css";

import { Container, Header, Comment, Button, Form } from "semantic-ui-react";

export default class Review extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mail_reply : '',
      show : "hidden",
      comment : '',
      load : [
        {
            "_id": "5bddc59596b48a00ba0c5580",
            "productID": "5bdd9023a7753d00a2b3613d",
            "email": "a@a.a",
            "text": "ssssssssssss",
            "reply": [],
            "__v": 0
        },
        {
            "_id": "5bddc62396b48a00ba0c5581",
            "productID": "5bdd9023a7753d00a2b3613d",
            "email": "a@a.a",
            "text": "ssssssssssss",
            "reply": [],
            "__v": 0
        },
        {
            "_id": "5bddc62396b48a00ba0c5582",
            "productID": "5bdd9023a7753d00a2b3613d",
            "email": "a@a.a",
            "text": "ssssssssssss",
            "reply": [],
            "__v": 0
        },
        {
            "_id": "5bddc62496b48a00ba0c5583",
            "productID": "5bdd9023a7753d00a2b3613d",
            "email": "a@a.a",
            "text": "ssssssssssss",
            "reply": [
                {
                    "_id": "5bddca523203f700d0796b9c",
                    "email": "a@a.a",
                    "text": "dfghjkllkjhgfdghjklsss"
                },
                {
                    "_id": "5bddca6d3203f700d0796b9d",
                    "email": "a@a.a",
                    "text": "sssssssss"
                },
                {
                    "_id": "5bddca883203f700d0796b9e",
                    "email": "a@a.a",
                    "text": "sssssssss"
                },
                {
                    "_id": "5bddca883203f700d0796b9f",
                    "email": "a@a.a",
                    "text": "sssssssss"
                },
                {
                    "_id": "5bddca883203f700d0796ba0",
                    "email": "a@a.a",
                    "text": "sssssssss"
                },
                {
                    "_id": "5bddca883203f700d0796ba1",
                    "email": "a@a.a",
                    "text": "sssssssss"
                },
                {
                    "_id": "5bddca883203f700d0796ba2",
                    "email": "a@a.a",
                    "text": "sssssssss"
                },
                {
                    "_id": "5bddca893203f700d0796ba3",
                    "email": "a@a.a",
                    "text": "sssssssss"
                }
            ],
            "__v": 8
        },
        {
            "_id": "5bddc6857a12f100c53cd0ff",
            "productID": "5bdd9023a7753d00a2b3613d",
            "email": "a@a.a",
            "text": "dddddd",
            "reply": [],
            "__v": 0
        },
        {
            "_id": "5bddcd7faadcbd00db502536",
            "productID": "5bdd9023a7753d00a2b3613d",
            "email": "a@a.a",
            "text": "ssss",
            "reply": [],
            "__v": 0
        },
        {
            "_id": "5bddcd7faadcbd00db502537",
            "productID": "5bdd9023a7753d00a2b3613d",
            "email": "a@a.a",
            "text": "ssss",
            "reply": [],
            "__v": 0
        },
        {
            "_id": "5bddcd80aadcbd00db502538",
            "productID": "5bdd9023a7753d00a2b3613d",
            "email": "a@a.a",
            "text": "ssss",
            "reply": [],
            "__v": 0
        },
        {
            "_id": "5bddcd80aadcbd00db502539",
            "productID": "5bdd9023a7753d00a2b3613d",
            "email": "a@a.a",
            "text": "ssss",
            "reply": [],
            "__v": 0
        },
        {
            "_id": "5bddcd80aadcbd00db50253a",
            "productID": "5bdd9023a7753d00a2b3613d",
            "email": "a@a.a",
            "text": "ssss",
            "reply": [],
            "__v": 0
        },
        {
            "_id": "5bddcd80aadcbd00db50253b",
            "productID": "5bdd9023a7753d00a2b3613d",
            "email": "a@a.a",
            "text": "ssss",
            "reply": [],
            "__v": 0
        }
    ]
    }
    axios.defaults.headers.common['Authorization'] = localStorage.getItem("token");
    // this.getD();
  }
  getD = () => {
    axios.post('/api/reply/load', { productID : this.props.idR })
    .then((res) => {
      this.setState({load : res.data});
    })
    .catch((error) => {
      console.log(error)
    })
  }
  sendE = () => {
    if(this.state.comment === '')
      return;
    if(this.state.show === "hidden") {
      const myOrder = {
        productID : this.props.idR,
        comment : this.state.comment
      }
      axios.post('/api/reply/new', myOrder)
      .then((res) => {
        console.log(res.data)
      })
      .catch((error) => {
        console.log(error)
      })
    } else {
      const myOrder = {
        id: "5bddc62496b48a00ba0c5583",
        comment : this.state.comment
      }
      axios.post('/api/reply/sub', myOrder)
      .then((res) => {
        console.log(res.data)
      })
      .catch((error) => {
        console.log(error)
      })
    }
  }
  render() {
    return (
      <Container className="setMargin">
          {[1, 2, 3].map(xx => {
            <Button>{xx}</Button>
            console.log(xx)
          })}
        <Comment.Group>
          <Header as="h2" dividing>Comments</Header>
          {/* <div class="comment">
            <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/matt.jpg" />
              <div class="content">
                <a class="author">Matt</a>
                <div class="text">How artistic!</div>
                <div class="actions">
                <a onClick={()=> {this.setState({show: '', mail_reply: "Matt"})}}>Reply</a>
              </div>
            </div>
          </div> */}
          {/* <div class="comment">
            <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/matt.jpg" />
              <div class="content">
                <a class="author">Matt</a>
                <div class="text">How artistic!</div>
                <div class="actions">
                <a onClick={()=> {this.setState({show: '', mail_reply: "Matt"})}}>Reply</a>
              </div>
            </div>
          </div> */}
          {/* <Comment>
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
          </Comment> */}
          <Form reply>
            <div className={"ui fluid right labeled input "+this.state.show}>
              <input className='info' type="text" value={"Reply : "+this.state.mail_reply}  disabled/>
              <button className="ui button label instagram" role="button" onClick={()=>{this.setState({show : "hidden"})}}>Reply Product</button>
            </div>
            <br />
            <Form.TextArea onChange={(e,data)=>{this.setState({comment : data.value})}}/>
            <Button content="Add Reply" labelPosition="left" icon="edit" primary onClick={this.sendE} />
          </Form>
        </Comment.Group>
      </Container>
    );
  }
}
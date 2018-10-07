import React, { Component } from "react";
import "semantic-ui-css/semantic.css";
import { Container, Button, Form, Message } from "semantic-ui-react";
import NormalFrom from "../../assets/normalForm";
import PasswordForm from "../../assets/passwordForm";
import MyButton from "../../assets/Mybutton";
import axios from "axios";

class Content extends Component {
  constructor(props){
    super(props);
        this.state = {
          message : 
			      { massageHidden : true, content :'', status: ""},
          email : "",
          password : ""
    }
  }

  onLoginSubmit = (e) => {
    e.preventDefault();
    
    const Account = {
      email : this.email.value,
      password : this.password.value,
    }
    let checkEmpty = false;
    for(let a in Account) {
      console.log(Account[a]);
			if(Account[a] === "" || Account[a] === undefined) {
				checkEmpty = true;
			}
		}
    if(checkEmpty) {
			this.setState( {message : 
        { massageHidden : false, content :'You must containt datas in all field.', status: "negative"}});
		} else {
			axios.post('http://localhost:5000/login/login', Account)
				.then((res) => {
					if(res.data.status === "fail") {
						this.setState( {message : 
              { massageHidden : false, content :res.data.status , status: "negative"}});
              this.password.value = "";
              this.email.value = "";
					} else {
						window.location = '/';
					}
				})
				.catch((error) => {
					this.setState( {message : 
            { massageHidden : false, 
              content :"Error : "+error.response.status+" => "+error.response.data.split("<pre>")[1].split("</pre>")[0], 
              status: "negative"}}
            );
				});
		}    
  }

  render() {
    return (
      <div>
        <Container>
          <Message content={this.state.message.content} hidden={this.state.message.massageHidden} className={this.state.message.status}/>
          <h1>LOG IN</h1>
          <Form onSubmit={ this.onLoginSubmit } >
            <Form.Field>
              <label>Email</label>
              <input type="email" placeholder='your@email.com' ref={(input) => this.email = input} />
            </Form.Field>

            <Form.Field>
              <label>Password</label>
              <input type="password" placeholder='password' ref={(input) => this.password = input} />
            </Form.Field>
            <MyButton color="blue" text="Login" />

            <a onclick="console.log('The link was clicked.'); return false">
              {" "}
              Forgot your password?{" "}
            </a>

            <h3>New Customer? </h3>

            <p>
              Sign up for an account to take advantage of order tracking and
              history as well as pre-filled forms during checkout on subsequent
              orders.
            </p>
          </Form>
          <Button onClick={() => {window.location = '/register'}}>Register</Button>
        </Container>
      </div>
    );
  }
}

export default class Login extends Component {
  render() {
    return <Content />;
  }
}

import React, { Component } from "react";
import axios from "axios";
import TemplateTKD from "../template/TemplateTKD";
import "semantic-ui-css/semantic.css";

export default class Login extends Component {
  constructor(props){
    super(props);
      this.state = { a : true }
  }

  onEventSomething = () => {
    this.setState({ a : !this.state.a });
  }

  onEventSend = (e) => {
    e.preventDefault();
    let data = {}
    axios.get('/api/????',{ headers: { Authorization: localStorage.getItem("token") } })
    .then((res) => {
      console.log(res.data);
    })
    .catch((error) => {
      console.log(error.response.status);
    });    
  }

  render() {
    return (
      <TemplateTKD>
        state a is
        {this.state.a ? <h1>true</h1> : <h1>false</h1>}
        <button onClick={this.onEventSomething}>try by your self</button>
      </TemplateTKD>
    );
  }
}
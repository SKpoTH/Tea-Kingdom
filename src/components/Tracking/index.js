import React, { Component } from 'react';
import TemplateTKD from '../template/TemplateTKD';
import 'semantic-ui-css/semantic.css';
import { Container } from 'semantic-ui-react'
import { getData } from "../API/get"
import Track from "./Tracking"

const url_get = '/api/tracking/load'
const url_get_addr = '/api/userData/load'

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: { messageHidden: true, content: '', status: "" },
      addr: "",
      status: "",
      date: ""
    }
    this.handleGET();
  }
  async handleGET(){
    const tmp_Track = await getData(url_get)
    const tmp_Addr = await getData(url_get_addr)
    // console.log("DATA FORM GET0 >> ",tmp_Track)
    // console.log("DATA FORM GET1 >> ",tmp_Addr)
    this.setState({
      status : tmp_Track.data.status,
      date : tmp_Track.data.date,
      addr : tmp_Addr.data.address
    })
    console.log("THIS.STATE > ",this.state)
  }

  render() {
    return (
      <Container textAlign='center'>
      
        <Track DataRender={this.state}/>

      </Container>
    );
  }
}

export default class Tracking extends Component {
  render() {
    return (
      <TemplateTKD>
        <Content />
      </TemplateTKD>
    );
  }
}
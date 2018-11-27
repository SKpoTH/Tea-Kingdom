import React, { Component } from 'react';
import TemplateTKD from '../template/TemplateTKD';
import 'semantic-ui-css/semantic.css';
import { Container } from 'semantic-ui-react'
import { getData } from "../API/get"
import Track from "./Tracking"

const url = '/api/tracking/consumer/load'

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
    const tmp = await getData(url)
    this.setState({
      status : tmp.data.data.status,
      date : tmp.data.data.date
    })
  }

  render() {
    return (
      <Container textAlign='center'>
        {/* อาจจะพัง ยังไม่ได้ลอง เพราะเปลี่ยน folder server */}
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
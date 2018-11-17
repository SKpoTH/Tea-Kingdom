import React, { Component } from 'react';
import axios from 'axios'
import TemplateTKD from '../template/TemplateTKD';
import 'semantic-ui-css/semantic.css';
import { Icon, Header, Container, Segment, Grid, Table, Responsive } from 'semantic-ui-react'

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: { messageHidden: true, content: '', status: "" },
      addr: "",
      status: "",
      date: ""
    }
    this.getData();
  }
  getData = () => {
    console.log("getdata")
    axios.get('/api/tracking/consumer_load', { headers: { Authorization: localStorage.getItem("token") } })
      .then((res) => {
        console.log("this is res->", res)
        this.setState({
          status: res.data.data.status,
          date: res.data.data.date
        });
        console.log(this.state.status)
      })
      .catch((error) => {
        console.log(error)
      });
  };
  // getAddr = () => {
  //   axios.get('/api/track/load', { headers: { Authorization: localStorage.getItem("token") } })
  //     .then((res) => {
  //       console.log(res)
  //       this.setState({
  //         addr: this.refs.data.Addr
  //       });
  //       console.log(this.state.addr)
  //     })
  // }

  render() {
    return (
      <Container textAlign='center'>

        <Header as='h2' icon>
          <Icon name='truck' />
          <u>Tracking</u>
        </Header>


        <Responsive minWidth={768}>

          <Grid padded>
            <Grid.Row>
              <Grid.Column width={2} textAlign='left'>
                <Icon name='map marker alternate' /><b>Address</b>
              </Grid.Column>
              <Grid.Column width={12} textAlign='left'>
                50 Ngam Wong Wan Rd. Ladyao Chatuchak Bangkok 10900
                  <br />
                {this.state.userAddr}
              </Grid.Column>
            </Grid.Row>
          </Grid>

          <Segment celled textAlign='left' inverted color='olive'>
            <Icon name='truck' /><b>Tracking Information</b>
            <Table celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell width={1}>Date</Table.HeaderCell>
                  {/* <Table.HeaderCell width={2}>Location</Table.HeaderCell> */}
                  <Table.HeaderCell width={2}>Status</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                <Table.Row>
                  <Table.Cell>{this.state.date}</Table.Cell>
                  {/* <Table.Cell>{this.state.track.location}</Table.Cell> */}
                  <Table.Cell>{this.state.status}</Table.Cell>
                </Table.Row>

                {/* {this.state.track.map( item =>
                    <Table.Row>
                      <Table.Cell>{item.date}</Table.Cell>
                      <Table.Cell>{item.location}</Table.Cell>
                      <Table.Cell>{item.messagetouser}</Table.Cell>
                    </Table.Row>
                  )} */}
              </Table.Body>
            </Table>
          </Segment>
        </Responsive>


        <Responsive maxWidth={767}>
          <Grid celled>
            <Grid.Row>
              <Grid.Column width={5} textAlign='center' verticalAlign='middle'>
                <Icon name='map marker alternate' /><b>Address</b>
              </Grid.Column>
              <Grid.Column width={11} textAlign='left'>
                50 Ngam Wong Wan Rd. Ladyao Chatuchak Bangkok 10900
                  </Grid.Column>
            </Grid.Row>
          </Grid>
          <Segment textAlign='left'>
            <Icon name='truck' /><b>Tracking Information</b>
            {/* {this.state.track.map( item =>
                <Segment color='teal'>
                  <Grid padded>
                    <Grid.Row>
                      <Grid.Column width={6} textAlign='left'>
                        <b>Date</b>
                      </Grid.Column>
                      <Grid.Column>
                        {item.date}
                      </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                      <Grid.Column width={6} textAlign='left'>
                        <b>Location</b>
                      </Grid.Column>
                      <Grid.Column>
                        {item.location}
                      </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                      <Grid.Column width={6} textAlign='left'>
                        <b>Status</b>
                      </Grid.Column>
                      <Grid.Column>
                        {item.messagetouser}
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                </Segment>
                )} */}
          </Segment>
        </Responsive>

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
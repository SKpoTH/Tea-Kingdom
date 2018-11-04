import React, { Component } from 'react';
import TemplateTKD from '../template/TemplateTKD';
import 'semantic-ui-css/semantic.css';
import {Icon, Header,Container,Segment,Grid,Table,Responsive,Divider, Message} from 'semantic-ui-react'

class Content extends Component {
  render() {
    return (
      <Container textAlign = 'center'>

         <Header as='h2' icon>
            <Icon name='truck' />
            <u>Tracking</u>
          </Header>


          <Responsive minWidth={768}>
            <Grid padded>
              <Grid.Row>
                <Grid.Column width={4} textAlign='left'>
                  <Icon name='list alternate outline' /><b>Tracking Number</b>
                </Grid.Column>
                <Grid.Column width={12} textAlign='left'>
                  <b>SHP4005987790</b>
                </Grid.Column>
              </Grid.Row>
            </Grid>

            <Grid padded>
              <Grid.Row>
                <Grid.Column width={4} textAlign='left'>
                  <Icon name='map marker alternate' /><b>Address</b>
                </Grid.Column>
                <Grid.Column width={12} textAlign='left'>
                  50 Ngam Wong Wan Rd. Ladyao Chatuchak Bangkok 10900
                </Grid.Column>
              </Grid.Row>
            </Grid>

            <Grid padded>
              <Grid.Row>
                <Grid.Column width={4} textAlign='left'>
                  <Icon name='envelope outline' /><b>Shipment Detail</b>
                </Grid.Column>
                <Grid.Column width={12} textAlign='left'>
                  Kerry
                </Grid.Column>
              </Grid.Row>
            </Grid>
          
            <Segment celled textAlign = 'left' inverted color='olive'>
              <Icon name='truck' /><b>Tracking Information</b>
              <Table celled>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell width={1}>Date</Table.HeaderCell>
                    <Table.HeaderCell width={1}>Time</Table.HeaderCell>
                    <Table.HeaderCell width={2}>Location</Table.HeaderCell>
                    <Table.HeaderCell width={2}>Status</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  <Table.Row>
                    <Table.Cell>01/01/2018</Table.Cell>
                    <Table.Cell>11.00</Table.Cell>
                    <Table.Cell>Chonburi</Table.Cell>
                    <Table.Cell>Delivered</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>02/01/2018</Table.Cell>
                    <Table.Cell>13.00</Table.Cell>
                    <Table.Cell>Bangkok</Table.Cell>
                    <Table.Cell>Arrived Hub</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>03/01/2018</Table.Cell>
                    <Table.Cell>09.00</Table.Cell>
                    <Table.Cell>Bangkok</Table.Cell>
                    <Table.Cell>Picked Up</Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </Segment>
          </Responsive>




          <Responsive maxWidth={767}>
            <Grid celled>
                <Grid.Row>
                  <Grid.Column width={5} textAlign='center' verticalAlign='middle'>
                    <Icon name='list alternate outline' /><b>Tracking Number</b>
                  </Grid.Column>
                  <Grid.Column width={11} textAlign='left'>
                    <b>SHP4005987790</b>
                  </Grid.Column>
                </Grid.Row>
              </Grid>

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

              <Grid celled>
                <Grid.Row>
                  <Grid.Column width={5} textAlign='center' verticalAlign='middle'>
                    <Icon name='envelope outline' /><b>Shipment Detail</b>
                  </Grid.Column>
                  <Grid.Column width={11} textAlign='left'>
                    Kerry
                  </Grid.Column>
              </Grid.Row>
            </Grid>

            <Segment textAlign='left'>
              <Icon name='truck' /><b>Tracking Information</b>
                <Segment color='teal'>
                  <Grid padded>
                    <Grid.Row>
                      <Grid.Column width={6} textAlign='left'>
                        <b>Date</b>
                      </Grid.Column>
                      <Grid.Column>
                        01/01/2018
                      </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                      <Grid.Column width={6} textAlign='left'>
                        <b>Time</b>
                      </Grid.Column>
                      <Grid.Column>
                        11.00
                      </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                      <Grid.Column width={6} textAlign='left'>
                        <b>Location</b>
                      </Grid.Column>
                      <Grid.Column>
                        Chonburi
                      </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                      <Grid.Column width={6} textAlign='left'>
                        <b>Status</b>
                      </Grid.Column>
                      <Grid.Column>
                        Delivered
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                </Segment>

                <Segment color='teal'>
                  <Grid padded>
                    <Grid.Row>
                      <Grid.Column width={6} textAlign='left'>
                        <b>Date</b>
                      </Grid.Column>
                      <Grid.Column>
                        02/01/2018
                      </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                      <Grid.Column width={6} textAlign='left'>
                        <b>Time</b>
                      </Grid.Column>
                      <Grid.Column>
                        13.00
                      </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                      <Grid.Column width={6} textAlign='left'>
                        <b>Location</b>
                      </Grid.Column>
                      <Grid.Column>
                        Bangkok
                      </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                      <Grid.Column width={6} textAlign='left'>
                        <b>Status</b>
                      </Grid.Column>
                      <Grid.Column>
                        Arrived Hub
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                </Segment>

                <Segment color='teal'>
                  <Grid padded>
                    <Grid.Row>
                      <Grid.Column width={6} textAlign='left'>
                        <b>Date</b>
                      </Grid.Column>
                      <Grid.Column>
                        03/01/2018
                      </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                      <Grid.Column width={6} textAlign='left'>
                        <b>Time</b>
                      </Grid.Column>
                      <Grid.Column>
                        09.00
                      </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                      <Grid.Column width={6} textAlign='left'>
                        <b>Location</b>
                      </Grid.Column>
                      <Grid.Column>
                        Bangkok
                      </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                      <Grid.Column width={6} textAlign='left'>
                        <b>Status</b>
                      </Grid.Column>
                      <Grid.Column>
                        Picked Up
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                </Segment>

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
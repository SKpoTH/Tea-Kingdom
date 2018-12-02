import React, { Component } from 'react';
import 'semantic-ui-css/semantic.css';
import { Icon, Header, Segment, Grid, Table, Responsive } from 'semantic-ui-react'

export default class Track extends Component {
    render() {
        return (
            <React.Fragment>
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
                            {this.props.DataRender.addr}
                            <br />
                        </Grid.Column>
                        </Grid.Row>
                    </Grid>
 
                    <Segment celled textAlign='left' inverted color='olive'>
                        <Icon name='truck' /><b>Tracking Information</b>
                        <Table celled>
                        <Table.Header>
                            <Table.Row>
                            <Table.HeaderCell width={1}>Date</Table.HeaderCell>
                            <Table.HeaderCell width={2}>Status</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        {this.props.DataRender.tracking.map( item =>
                        <Table.Body>
                            <Table.Row>
                            <Table.Cell>{item.date}</Table.Cell>
                            <Table.Cell>{item.status}</Table.Cell>
                            </Table.Row>

                        </Table.Body>
                         )}

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
                            {this.props.DataRender.addr}
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>

                    <Segment textAlign='left'>
                        <Icon name='truck' /><b>Tracking Information</b>
                        <Segment color='teal'>
                        {this.props.DataRender.tracking.map( item => 
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
                                <b>Status</b>
                                </Grid.Column>
                                <Grid.Column>
                                {item.status}
                                </Grid.Column>
                            </Grid.Row>
                            </Grid>
                        )}
                        </Segment>
                    </Segment>
                    </Responsive>

            </React.Fragment>
        )
    }
}
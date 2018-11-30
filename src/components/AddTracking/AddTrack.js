import React, { Component } from 'react';
import 'semantic-ui-css/semantic.css';
import { Table, Dropdown,Button, Icon} from 'semantic-ui-react'
import { postData } from "../API/post"

const telluser = [
    { key: '0', text: 'Get Order from Customer', value: 'Get Order from Customer' },
    { key: '1', text: 'Recieve product from Seller', value: 'Recieve product from Seller' },
    { key: '2', text: 'Packing all product', value: 'Packing all product' },
    { key: '3', text: 'Send to Customer', value: 'Send to customer' },
    { key: '4', text: 'Done', value: 'Done' }
]

const url_post = '/api/admin/tracking/update'

class MyTrack extends Component {
    constructor(props){
        super(props)
        this.state = {
            paint : false,
            Mystatus : this.props.status
        }
    }
    async update (e,data){
        let update = [];
        update.push({
            orderID: this.props.orderID,
            status: data
        })
        const returnPost = await postData(url_post,update)
        // console.log("RETURN FROM POST > ",returnPost)
        if(returnPost == "Successfully Updated"){
            this.setState({
                paint : true,
                Mystatus : data
            })
        }

    }

    render() {
        return(
            <React.Fragment>
                <Table striped>

                    <Table.Body>
                        <Table.Row>
                            <Table.Cell width='4'>
                                <span>{this.props.ID}</span>
                            </Table.Cell>
                            <Table.Cell width='3'>
                                <span>{this.props.email}</span>
                            </Table.Cell>
                            <Table.Cell width='4' collapsing textAlign='right'>
                                <Dropdown options={telluser} value={this.state.Mystatus}
                                          onChange={(e,data) => this.update(e,data.value)} />
                            </Table.Cell>
                            <Table.Cell width='1'>
                                <Button size='mini' floated='right' color={this.state.paint ? 'green' : 'red'}>
                                    <Icon fitted name='check'></Icon>
                                </Button>
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>

                </Table>
                
            </React.Fragment>
        )
    }
}

export default class AddTrack extends Component {
    render() {
        return (
            <React.Fragment>
                <h1>Tracking by Admin</h1>
                {/* {console.log("AddTrack DataRender > ",this.props.DataRender)} */}
                <Table>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell width='4'>OrderID</Table.HeaderCell>
                            <Table.HeaderCell width='3'>Email</Table.HeaderCell>
                            <Table.HeaderCell width='4' textAlign='right'>Status</Table.HeaderCell>
                            <Table.HeaderCell width='1' textAlign='right'>Update</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                </Table>
                {this.props.DataRender.mymessage.map((order) => (
                    <MyTrack email  = {order.email}
                             status = {order.status}
                             orderID = {order.orderID}
                             ID = {order._id}
                    />
                ))}
            </React.Fragment>
        )
    }
}
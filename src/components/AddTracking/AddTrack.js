import React, { Component } from 'react';
import 'semantic-ui-css/semantic.css';
import { Table, Dropdown} from 'semantic-ui-react'
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
    async update (e,data){
        let update = [];
        update.push({
            orderID: this.props.orderID,
            status: data
        })
        const returnPost = await postData(url_post,update)
        console.log("RETURN FROM POST > ",returnPost)

    }

    render() {
        return(
            <React.Fragment>
                <Table celled striped>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell width='4'>Order</Table.HeaderCell>
                            <Table.HeaderCell width='4' textAlign='right'>Status</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>
                                <span>{this.props.email} </span>
                            </Table.Cell>
                            <Table.Cell collapsing textAlign='right'>
                                <Dropdown options={telluser} placeholder={this.props.status}
                                          onChange={(e,data) => this.update(e,data.value)} />
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>

                </Table>
                {/* <Button style={{margin:"0px 0px 10px"}} size='small' floated='right' primary onClick={this.update()}>Update</Button> */}
    
            </React.Fragment>
        )
    }
}

export default class AddTrack extends Component {
    render() {
        return (
            <React.Fragment>
                <h1>Tracking by Admin</h1>
                {console.log("AddTrack DataRender > ",this.props.DataRender)}
                {this.props.DataRender.mymessage.map((order) => (
                    <MyTrack email  = {order.email}
                             status = {order.status}
                             orderID = {order.orderID}
                    />
                ))}
            </React.Fragment>
        )
    }
}
import React, { Component } from 'react';
import axios from 'axios'
import 'semantic-ui-css/semantic.css';
import { Table, Button, Dropdown, Message, Divider } from 'semantic-ui-react'
import TemplateTKD from "../template/TemplateTKD";

const telluser = [
    { key: '0', text: 'Get Order from Customer', value: 'Get Order from Customer' },
    { key: '1', text: 'Recieve product from Seller', value: 'Recieve product from Seller' },
    { key: '2', text: 'Packing all product', value: 'Packing all product' },
    { key: '3', text: 'Send to Customer', value: 'Send to customer' },
    { key: '4', text: 'Done', value: 'Done' }
]
const mystation = [
    { key: '0', text: 'Bangkok', value: 'Bangkok' },
    { key: '1', text: 'Chonburi', value: 'Chonburi' },
    { key: '2', text: 'Phuket', value: 'Phuket' },
    { key: '3', text: 'Surin', value: 'Surin' }
]

export default class AddTracking extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message:
                { massageHidden: true, content: '', status: "" },
            mymessage: []
        }
        this.getData()
    }
    getData = () => {
        axios.get('/api/tracking/admin_load', { headers: { Authorization: localStorage.getItem("token") } })
            .then((res) => {
                this.setState({
                    mymessage: res.data.data
                })
                console.log("mymessage : ", this.state.mymessage)
            })
            .catch((error) => {
                console.log(error);
            })
    }
    updateStatus = (index, words) => {
        this.setState({
            mymessage: [
                ...this.state.mymessage.slice(0, index),
                Object.assign({}, this.state.mymessage[index], words),
                ...this.state.mymessage.slice(index + 1)
            ]
        });
        console.log("index->", index, " words->", words)
    }

    updateAll = () => {
        let update = [];
        for (let i in this.state.mymessage) {
            // console.log("send data =>",this.state.mymessage[i])
            update.push({
                orderID: this.state.mymessage[i].orderID,
                status: this.state.mymessage[i].status,
                // station : this.state.station[i].
            })
        }
        console.log("this is update ->", update)
        axios.post('/api/tracking/update_state', update, { headers: { Authorization: localStorage.getItem("token") } })
            .then((res) => {
                console.log("send")
                console.log(res.data)
                //this.getData()
                window.location = '/addtracking'
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <TemplateTKD>
                <Message content={this.state.message.content} hidden={this.state.message.massageHidden} className={this.state.message.status} />

                <h1>Tracking by Admin</h1>
                <Table celled striped>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Order</Table.HeaderCell>
                            <Table.HeaderCell textAlign='right'>Message</Table.HeaderCell>
                            {/* <Table.HeaderCell textAlign='right'>Station</Table.HeaderCell> */}
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {this.state.mymessage.map((order, i) =>
                            <Table.Row>
                                <Table.Cell>
                                    <span>{order.email} </span>
                                </Table.Cell>
                                <Table.Cell collapsing textAlign='right'>
                                    <Dropdown options={telluser} placeholder={this.state.mymessage[i].status} onChange={(event, data) => this.updateStatus(i, { 'status': data.value })} />
                                </Table.Cell>
                                {/* <Table.Cell collapsing textAlign='right'>
                                <Dropdown options={mystation} placeholder="Bangkok" onChange={(event,data) => this.updateStatus(i,{'station' : data.value})} />
                            </Table.Cell> */}
                            </Table.Row>
                        )}
                    </Table.Body>

                </Table>
                <Button size='small' floated='right' primary onClick={this.updateAll}>Update</Button>
                <Divider hidden />
                <Divider hidden />
            </TemplateTKD>
        )
    }
}
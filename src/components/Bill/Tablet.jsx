import React, { Component } from 'react';

import 'semantic-ui-css/semantic.css';
import { Segment, Button, Divider, Grid, Form } from 'semantic-ui-react';

import styled from 'styled-components'
import Connection from '../pomLib/connection';

const request = Connection.createClass();


const Head = styled.div`
    font-size: 25px; 
    font-weight: bold;
    margin-bottom : 10px;
`


export default class Tablet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message:
                { massageHidden: true, content: '', status: "" },
            product: [],
            card_id: '',
            cvv: '',
            exp: '',

        }
        this.getData();
        this._handleSubmit = this._handleSubmit.bind(this);
        // axios.defaults.headers.common['Authorization'] = localStorage.getItem("token"); //Importand 
    }

    _handleSubmit(e) {
        e.preventDefault();
    }

    getData = () => {
        request.get('/api/order/load', true)

            // axios.get('/api/order/load', { headers: { Authorization: localStorage.getItem("token") } })
            .then((res) => {
                console.log(res.status)
                this.setState({
                    product: res.data.product
                });
            })
            .catch((error) => {
                this.setState({ cantLoad: true });
                this.setState({
                    message:
                    {
                        massageHidden: false,
                        // content: "Error : " + error.response.status + " => " + error.response.data.split("<pre>")[1].split("</pre>")[0],
                        status: "negative"
                    }
                }
                );
            });
    };

    cancel = (event) => {
        console.log('cancel');

        request.post('/api/payment/cancel', null, true)
        // axios.post('/api/payment/cancel', null, { headers: { Authorization: localStorage.getItem("token") } })
        window.location = '/order';
    }

    checkEmpty(billData) {
        for (let a in billData) {
            if (billData[a] === "" || billData[a] === undefined) {
                return true
            }
        }
        return false
    }

    emptyData() {
        this.setState({
            message:
                { massageHidden: false, content: 'You must containt datas in all field.', status: "negative" }
        });
    }

    sendData(billData) {
        // axios.post('/api/payment/confirm', billData, { headers: { Authorization: token } })
        request.post('/api/payment/confirm', billData, true)
            .then((res) => {
                console.log(res.status);
                window.location = '/track';
            })
            .catch((error) => {
                this.setState({ cantLoad: true });
                this.setState({
                    message:
                    {
                        massageHidden: false,
                        // content: "Error : " + error.response.status + " => " + error.response.data.split("<pre>")[1].split("</pre>")[0],
                        status: "negative"
                    }
                }
                );
            })

    }

    onSubmit = (event) => {
        event.preventDefault();

        const billData = {
            id: this.state.card_id,
            exp: this.state.exp,
            cvv: this.state.cvv
        }

        console.log(billData);

        if (this.checkEmpty(billData)) {
            this.emptyData()
        } else {
            this.sendData(billData)
        }
    }

    render() {
        let prePrice = 0, Shipment = 40;
        return (
            <Grid>
                <Grid.Column width={10}>
                    <Segment.Group color='white' >
                        <Segment basic>
                            <Head>Confirmation Ordering</Head>
                        </Segment>
                        <Segment.Group>
                            {this.state.product.map(item =>
                                <Segment.Group horizontal color='white'>

                                    <div style={{ width: '4' }}>
                                        <Segment textAlign='left' basic style={{ border: 'white' }}>
                                            {item.amount}
                                        </Segment>
                                    </div>

                                    <Segment textAlign='left' basic style={{ border: 'white' }}>
                                        {item.name}
                                    </Segment>

                                    <Segment textAlign='right' basic style={{ border: 'white' }}>
                                        {prePrice += item.amount * item.price}
                                    </Segment>

                                </Segment.Group>
                            )}
                        </Segment.Group>

                        <Segment.Group horizontal style={{ border: 'white' }}>
                            <Segment basic style={{ border: 'white' }}>Product Price : </Segment>
                            <Segment basic style={{ border: 'white' }} textAlign='right'>{prePrice}</Segment>
                        </Segment.Group>

                        <Segment.Group horizontal style={{ border: 'white' }}>
                            <Segment basic style={{ border: 'white' }}>Shipment Fee  : </Segment>
                            <Segment basic style={{ border: 'white' }} textAlign='right'>{Shipment}</Segment>
                        </Segment.Group>

                        <Segment.Group horizontal style={{ border: 'white' }}>
                            <Segment basic style={{ border: 'white' }}>Total Price : </Segment>
                            <Segment basic style={{ border: 'white' }} textAlign='right'>{prePrice + Shipment}</Segment>
                        </Segment.Group>
                    </Segment.Group>

                    <Divider hidden />
                    <Divider hidden />
                </Grid.Column>

                <Grid.Column width={5}>
                    <Head> Payment </Head>

                    <Form.Input label='Card ID' placeholder='card id: xxxx xxxx xxxx xxxx' onChange={(e, data) => { this.state.card_id = data.value }} />
                    <Form.Input label='exp' placeholder='exp : YY/MM' onChange={(e, data) => { this.state.exp = data.value }} />
                    <Form.Input label='cvv' placeholder='cvv' onChange={(e, data) => { this.state.cvv = data.value }} />

                    <Button.Group size='medium' widths='2'>
                        <Button primary type='submit' >Submit</Button>
                        <Button negative onClick={this.cancel}> Cancel </Button>
                    </Button.Group>
                </Grid.Column>

            </Grid>
        )
    }
}
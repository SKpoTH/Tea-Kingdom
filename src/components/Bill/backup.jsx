import React, { Component } from 'react';
import TemplateTKD from '../template/TemplateTKD';
import 'semantic-ui-css/semantic.css';
import { Header, Segment, Button, Divider, Grid, Form } from 'semantic-ui-react';
import axios from 'axios';
import styled from 'styled-components'

const Head = styled.div`
    font-size: 25px; 
    font-weight: bold;
    margin-bottom : 10px;
`
class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message:
                { massageHidden: true, content: '', status: "" },
            product: [],
        }
        this.checkout = this.checkout.bind(this);

        this.getData();
    }
    getData = () => {
        axios.get('/api/order/load', { headers: { Authorization: localStorage.getItem("token") } })
            .then((res) => {
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

    checkout = () => {
        // axios.get('/api/payment/pay_confirm', { headers: { Authorization: localStorage.getItem("token") } })
        //     .then((res) => {
        //         console.log(res.data.status);
        //         // window.location = '/track';
        //     });

        const bill = {
            card_id: this.card_id,
            exp: this.exp,
            cvv: this.cvv,
        }

        let checkEmpty = false;
        for (let a in bill) {
            if (bill[a] === "" || bill[a] === undefined) {
                checkEmpty = true;
            }
        }
        if (checkEmpty) {
            console.log('empty');
            this.setState({
                message:
                    { massageHidden: false, content: 'You must containt datas in all field.', status: "negative" }
            });
        } else {
            window.location = '/track';
            axios.post('/api/payment/credit_card', bill, { headers: { Authorization: localStorage.getItem("token") } })
                .then((res) => {
                    if (res.data.status = "Wrong card number") {
                        this.setState({
                            message:
                                { massageHidden: false, content: res.data.status, status: "negative" }
                        });
                    }
                    else {
                        console.log(res.data.status);
                        this.getData();
                    }
                })
                .catch((error) => {
                    this.setState({ cantLoad: true });
                    this.setState({
                        message:
                        {
                            massageHidden: false,
                            status: "negative"
                        }
                    }
                    );
                })


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
                    <Form checkout={this.checkout} size='small'>
                        <Form.Field>
                            <label>Card ID</label>
                            <input placeholder='card id : xxxx xxxx xxxx xxx' ref={(input) => this.card_id = input} />
                        </Form.Field>

                        <Form.Field>
                            <label>exp </label>
                            <input placeholder='exp: YY/MM' ref={(input) => this.card_id = input} />
                        </Form.Field>

                        <Form.Field>
                            <label>cvv </label>
                            <input type="password" placeholder='cvv id : xxx' ref={(input) => this.card_id = input} />
                        </Form.Field>


                        <br />
                    </Form>
                    <Button floated='right' color='green' onClick={this.checkout}>Confirm</Button>
                </Grid.Column>
            </Grid>
        );
    }
}

export default class Order extends Component {
    render() {
        return (
            <TemplateTKD>
                <Content />
            </TemplateTKD>
        );
    }
}
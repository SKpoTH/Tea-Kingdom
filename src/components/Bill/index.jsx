import React, { Component } from 'react';
import TKD from '../template/TemplateTKD';
import 'semantic-ui-css/semantic.css';
import { Segment, Button, Divider, Grid, Form, Responsive, Message } from 'semantic-ui-react';
import axios from 'axios';
import styled from 'styled-components'

const Head = styled.div`
    font-size: 25px; 
    font-weight: bold;
    margin-bottom : 10px;
`
export default class Content extends Component {
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
        axios.defaults.headers.common['Authorization'] = localStorage.getItem("token"); //Importand 
    }

    _handleSubmit(e) {
        e.preventDefault();
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

    onSubmit = (event) => {
        event.preventDefault();

        //data
        var billData = new FormData();

        billData.set('card_id', this.state.card_id);
        billData.set('exp', this.state.exp);
        billData.set('cvv', this.state.cvv);

        console.log(this.state.file);

        var checkEmpty = false;

        for (var a in this.state) {
            if (this.state[a] === "" || this.state[a] === undefined) {
                console.log("Don't have data at -> " + a);
                checkEmpty = true;
            }
        }

        if (checkEmpty) {
            this.setState({
                message:
                    { massageHidden: false, content: 'You must containt datas in all field.', status: "negative" }
            });
        } else {
            axios.post('/api/payment/credit_card', billData, { headers: { Authorization: localStorage.getItem("token") } })
                .then((res) => {
                    console.log(res.data.status);
                    window.location = '/track';

                    // if (res.data.status = "Wrong card number") {
                    //     this.setState({
                    //         message:
                    //             { massageHidden: false, content: res.data.status, status: "negative" }
                    //     });
                    // }
                    // else {
                    //     console.log(res.data.status);
                    //     this.getData();
                    //     window.location = '/track';
                    // }
                })
                .catch((error) => {
                    this.setState({ cantLoad: true });
                    this.setState({
                        message:
                        {
                            massageHidden: false,
                            content: "Error : " + error.response.status + " => " + error.response.data.split("<pre>")[1].split("</pre>")[0],
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
            <TKD>
                <Form onSubmit={this.onSubmit} >
                    <Responsive  {...Responsive.onlyMobile}>
                        ;
                    </Responsive>
                    <Responsive  {...Responsive.onlyTablet}>
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
                                <Form.Input label='cvv' placeholder='cvv' onChange={(e, data) => { this.state.card_id = data.value }} />
                                <Button primary type='submit'>Submit</Button>
                            </Grid.Column>

                        </Grid>
                    </Responsive>
                    <Responsive  {...Responsive.onlyComputer}>
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
                                <Form.Input label='cvv' placeholder='cvv' onChange={(e, data) => { this.state.card_id = data.value }} />
                                <Button primary type='submit'>Submit</Button>
                            </Grid.Column>

                        </Grid>
                    </Responsive>
                </Form>
            </TKD>
        );
    }
}


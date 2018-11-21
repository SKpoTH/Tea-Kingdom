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

const Marg = styled.div`
    margin-right: 25px;
    margin-left: 25px;
    margin-bottom: 25px;
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
                    product: res.data.data.product
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
        axios.post('/api/payment/cancel', null, { headers: { Authorization: localStorage.getItem("token") } })
        window.location = '/order';
    }



    onSubmit = (event) => {
        event.preventDefault();

        const billData = {
            id: this.state.card_id,
            exp: this.state.exp,
            cvv: this.state.cvv
        }

        var checkEmpty = false;

        for (let a in billData) {
            if (billData[a] === "" || billData[a] === undefined) {
                checkEmpty = true;
            }

        }



        console.log(billData);

        if (checkEmpty) {
            this.setState({
                message:
                    { massageHidden: false, content: 'You must containt datas in all field.', status: "negative" }
            });
        } else {
            axios.post('/api/payment/confirm', billData, { headers: { Authorization: localStorage.getItem("token") } })
                .then((res) => {
                    console.log(res.data.status);
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
    }

    render() {
        let prePrice = 0, Shipment = 40;
        return (
            <TKD>
                <Form onSubmit={this.onSubmit} >
                    <Responsive  {...Responsive.onlyMobile}>
                        <Marg>
                            <Segment.Group color='white' >

                                <Segment basic>
                                    <Head><center>Confirmation Ordering</center></Head>
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
                            <Segment.Group color='white' >

                                <Segment basic>
                                    <Head><center> Payment </center> </Head>
                                </Segment>

                                <Marg>
                                    <Form.Input label='Card ID' placeholder='card id: xxxx xxxx xxxx xxxx' onChange={(e, data) => { this.state.card_id = data.value }} />
                                    <Form.Input label='exp' placeholder='exp : YY/MM' onChange={(e, data) => { this.state.exp = data.value }} />
                                    <Form.Input label='cvv' placeholder='cvv' onChange={(e, data) => { this.state.cvv = data.value }} />


                                    <Button.Group size='medium' widths='2'>
                                        <Button onClick={this.checkInput} primary type='submit' >Submit</Button>
                                        <Button negative onClick={this.cancel}> Cancel </Button>
                                    </Button.Group>
                                </Marg>

                            </Segment.Group>
                        </Marg>
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
                                <Form.Input label='cvv' placeholder='cvv' onChange={(e, data) => { this.state.cvv = data.value }} />

                                <Button.Group size='medium' widths='2'>
                                    <Button primary type='submit' >Submit</Button>
                                    <Button negative onClick={this.cancel}> Cancel </Button>
                                </Button.Group>
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
                                <Form.Input label='cvv' placeholder='cvv' onChange={(e, data) => { this.state.cvv = data.value }} />

                                <Button.Group size='medium' widths='2'>
                                    <Button primary type='submit' >Submit</Button>
                                    <Button negative onClick={this.cancel}> Cancel </Button>
                                </Button.Group>

                            </Grid.Column>
                        </Grid>
                    </Responsive>
                </Form>
            </TKD>
        );
    }
}


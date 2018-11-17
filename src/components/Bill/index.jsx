import React, { Component } from 'react'
import axios from 'axios'
import 'semantic-ui-css/semantic.css'
import { Form, Button, Message, Image, Responsive, Grid, Container } from 'semantic-ui-react';
import TemplateTKD from "../template/TemplateTKD";
import styled from 'styled-components';

const Margin = styled.div`
    margin-top : 20px;
    margin-bottom : 20px;
`

export default class Bill extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message:
                { messageHidden: true, content: '', status: '' },
            product: [],
            card_id: '',
            exp: '',
            cvv: '',
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
                        content: "Error : " + error.response.status + " => " + error.response.data.split("<pre>")[1].split("</pre>")[0],
                        status: "negative"
                    }
                }
                );
            });
    };

    checkout = () => {
        axios.get('/api/payment/pay_confirm', { headers: { Authorization: localStorage.getItem("token") } })
            .then((res) => {
                console.log(res.data.status);
                window.location = '/track';
            });

        var userData = new FormData();

        userData.set('card_id', this.state.card_id);
        userData.set('exp', this.state.exp);
        userData.set('cvv', this.state.cvv);

        console.log(this.state.file);
        let checkEmpty = false;
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

}
import React, { Component } from 'react';
import TemplateTKD from '../template/TemplateTKD';
import 'semantic-ui-css/semantic.css';
import { Container, Responsive } from 'semantic-ui-react';
import { Image, Button, Table, Icon, Grid, Label } from 'semantic-ui-react'
import axios from 'axios';
import styled from 'styled-components'

const Head = styled.div`
    font-size: 25px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 20px;
    
`

export default class Favorite extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message:
                { massageHidden: true, content: '', status: "" },
            product: [],
            index: 0
        }

        this.getData();
    }

    updateItem = (index, itemAttributes) => {
        this.setState({
            product: [
                ...this.state.product.slice(0, index),
                Object.assign({}, this.state.product[index], itemAttributes),
                ...this.state.product.slice(index + 1)
            ]
        });
    }

    checkList = (productID) => {
        const sent = {
            productID: productID
        }

        let list;

        axios.post('....', sent, { headers: { Authorization: localStorage.getItem("token") } })
            .then(res => {
                console.log('==========================');
                list = res.data.data.amount;
                return list;
            })
            .catch(err => {
                console.log('Error');
            })
    }

    sendData = () => {
        const sent = {
            product: this.state.product
        }

        axios.post('...', sent, { headers: { Authorization: localStorage.getItem("token") } })
            .then((res) => {
                console.log(res.data.status);
                this.getData();
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

    removeItem = (index) => {
        const sent = {
            productID: this.state.product[index]._id
        }

        console.log(this.state.product[index]._id);

        axios.post('api/favourite/remove_favourite', sent, { headers: { Authorization: localStorage.getItem("token") } })
            .then((res) => {
                console.log(res.data.status);
                this.getData();
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

    removeOrder = () => {
        axios.get('...', { headers: { Authorization: localStorage.getItem("token") } })
            .then((res) => {
                console.log(res.data.status);
                this.getData();
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

    getData = () => {
        axios.get('...', { headers: { Authorization: localStorage.getItem("token") } })
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

    render() {
        let Count = 1;
        return (
            <TemplateTKD marginNon='true'>
                <Container>
                    <Responsive {...Responsive.onlyComputer}>
                        <Head>Favorite</Head>
                        <Table celled fixed>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell width='1'></Table.HeaderCell>
                                    <Table.HeaderCell width='4'><center>Product</center></Table.HeaderCell>
                                    <Table.HeaderCell width='3'><center>Name</center></Table.HeaderCell>
                                    <Table.HeaderCell width='2'><center>Detail</center></Table.HeaderCell>
                                    <Table.HeaderCell width='2'><center>Delete</center></Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>

                            {this.state.product.map((item, i) =>
                                <Table.Body>
                                    <Table.Row>
                                        <Table.Cell width='1'>{Count++}</Table.Cell>
                                        <Table.Cell width='4'>
                                            <Image src={item.productImage} style={{ width: '20%', height: '20%', display: 'inline' }} />
                                        </Table.Cell>
                                        <Table.Cell width='3'>
                                            {item.name}
                                        </Table.Cell>
                                        <Table.Cell width='2'>
                                            Detail
                                        </Table.Cell>
                                        <Table.Cell width='2'>
                                            <Button color='red' icon='remove' onClick={() => { this.removeItem(i) }} />
                                        </Table.Cell>
                                    </Table.Row>
                                </Table.Body>
                            )}
                        </Table>
                        <Grid>
                            <Grid.Column floated='left' width={5}>
                                <Button primary onClick={() => { this.sendData() }} >Update</Button>
                                <Button color='red' onClick={() => { this.removeOrder() }} >Clear</Button>

                            </Grid.Column>
                            <Grid.Column floated='right' width={3}>
                                <Button primary onClick={() => { window.location = '/confirm' }}>Checkout</Button>
                            </Grid.Column>

                        </Grid>
                        <br />
                    </Responsive>

                    <Responsive {...Responsive.onlyTablet}>
                        ;
                    </Responsive>

                    <Responsive {...Responsive.onlyMobile}>
                        ;
                    </Responsive>
                </Container>
            </TemplateTKD>
        );
    }
}
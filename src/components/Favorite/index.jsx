import React, { Component } from 'react';
import TemplateTKD from '../template/TemplateTKD';
import 'semantic-ui-css/semantic.css';
import { Container, Responsive } from 'semantic-ui-react';
import { Image, Button, Table, Card, Grid, Label } from 'semantic-ui-react'
import axios from 'axios';
import styled from 'styled-components'
// import mget from './get'

//wait//-------------------------

const Head = styled.div`
    font-size: 25px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 20px;
    
`
const Marg = styled.div`
    margin: 20px;
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

    removeItem = (index) => {
        const sent = {
            productID: this.state.product[index].productID
        }

        console.log(sent.productID);

        axios.post('api/favourite/remove', sent, { headers: { Authorization: localStorage.getItem("token") } })
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

    // addToCart = () => {

    // }

    seeFullDetail = (event, { ident }) => {
        event.preventDefault();
        window.location = "/ProductDetail" + ident;
    }


    getData = () => {
        axios.get('/api/userData/load/', { headers: { Authorization: localStorage.getItem("token") } })
            .then((res) => {
                console.log(res.data.data);
                this.setState({
                    product: res.data.data.favourite
                });
                console.log(this.state.product)
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

                                            <Button color="blue" content="see details" icon="eye" ident={item.productID} onClick={this.seeFullDetail} />
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
                                <Button color='red' onClick={() => { this.removeOrder() }} >Clear</Button>

                            </Grid.Column>
                            <Grid.Column floated='right' width={3}>
                                <Button primary onClick={() => { window.location = '/confirm' }}>Checkout</Button>
                            </Grid.Column>

                        </Grid>
                        <br />
                    </Responsive>

                    <Responsive {...Responsive.onlyTablet}>
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
                                            <Button color="blue" center content="see details" ident={item.productID} onClick={this.seeFullDetail} />
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

                    <Responsive {...Responsive.onlyMobile}>
                        <Head>
                            Favorite
                        </Head>

                        {this.state.product.map((item, i) =>
                            <Card.Group centered>
                                <Card color='black'>
                                    <Card.Content>
                                        <Card.Header><center>{item.name}</center></Card.Header>
                                        <Marg>
                                            <Image size='small' src={item.productImage} />
                                        </Marg>

                                        <Card.Meta><center>{item.brand}</center></Card.Meta>

                                        <h5 style={{ marginTop: '5px' }}><center>Price : {item.price} ฿</center></h5>
                                        <h5 style={{ marginTop: '5px' }}><center>Amount : {item.amount}</center></h5>
                                    </Card.Content>

                                    <Card.Content>
                                        <Button.Group size='mini'>
                                            <Button color='red' onClick={() => { this.removeItem(i) }} >Remove</Button>
                                            <Button color='blue' onClick={() => { (this.state.product[i].amount - 1) > 0 ? this.updateItem(i, { amount: this.state.product[i].amount - 1 }) : null }}>Minus</Button>
                                            <Button color='green' onClick={() => { this.updateItem(i, { amount: this.state.product[i].amount + 1 }) }} >Plus</Button>
                                            <Button color="blue" content="see details" ident={item.productID} onClick={this.seeFullDetail} />
                                        </Button.Group>
                                    </Card.Content>

                                </Card>
                            </Card.Group>
                        )}

                        <br />
                        <br />

                        <Grid centered>
                            <Button primary onClick={() => { this.sendData() }} >Update</Button>
                            <Button color='red' onClick={() => { this.removeOrder() }} >Clear</Button>
                            <Button primary onClick={() => { window.location = '/confirm' }}>Checkout</Button>

                        </Grid>

                        <br />
                        <br />
                    </Responsive>
                </Container>
            </TemplateTKD>
        );
    }
}
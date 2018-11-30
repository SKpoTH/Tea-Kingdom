import React, { Component } from 'react';
import TemplateTKD from '../template/TemplateTKD';
import 'semantic-ui-css/semantic.css';
import { Container, Responsive, Divider } from 'semantic-ui-react';
import { Image, Button, Table, Grid } from 'semantic-ui-react'

import styled from 'styled-components'

import Connection from '../pomLib/connection';


const request = Connection.createClass();

const Head = styled.div`
        font-size: 25px;
        font-weight: bold;
        text-align: center;
        margin-bottom: 20px;
        
    `
const Marg = styled.div`
        margin: 20px;
    `

const BigFont = styled.div`
        font-size: 18px;
        font-weight: bold;
        text-align: center;
    `
const SmallFont = styled.div`
        font-size: 16px;
        text-align: center;
`
const Bottom = styled.div`
    margin-bottom: 5px;
    margin-top : 30px;

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
        request.post('api/favourite/remove', sent, true)
            .then((res) => {
                console.log(res.status);
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


    seeFullDetail = (event, { ident }) => {
        event.preventDefault();
        window.location = "/ProductDetail" + ident;
    }


    getData = () => {
        request.get('/api/userData/load/', true)
            .then((res) => {
                console.log(res.data);
                this.setState({
                    product: res.data.favourite
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

        return (
            <TemplateTKD marginNon='true'>
                <Container>
                    <Responsive {...Responsive.onlyComputer}>

                        <Head>Favorite</Head>
                        <Table celled fixed>
                            <Table.Header>
                                <Table.Row>

                                    <Table.HeaderCell width='3'><center>Product</center></Table.HeaderCell>
                                    <Table.HeaderCell width='3'><center>Name</center></Table.HeaderCell>
                                    <Table.HeaderCell width='2'><center>Detail</center></Table.HeaderCell>
                                    <Table.HeaderCell width='1'><center>Delete</center></Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>

                            {this.state.product.map((item, i) =>
                                <Table.Body>
                                    <Table.Row>

                                        <Table.Cell width='3'>
                                            <center><Image src={item.productImage} style={{ width: '20%', height: '20%', display: 'inline' }} /></center>
                                        </Table.Cell>
                                        <Table.Cell width='3'>
                                            <BigFont>{item.name}</BigFont>
                                        </Table.Cell>
                                        <Table.Cell width='2'>
                                            <center><Button content="see details" icon="eye" ident={item.productID} onClick={this.seeFullDetail} /></center>
                                        </Table.Cell>
                                        <Table.Cell width='1'>
                                            <center><Button color='red' icon='remove' onClick={() => { this.removeItem(i) }} /></center>
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
                                {/* <Button primary onClick={() => { window.location = '/confirm' }}>Checkout</Button> */}
                            </Grid.Column>

                        </Grid>
                        <br />
                    </Responsive>

                    <Responsive {...Responsive.onlyTablet}>
                        <Head>Favorite</Head>
                        <Table celled fixed>
                            <Table.Header>
                                <Table.Row>

                                    <Table.HeaderCell width='4'><center>Product</center></Table.HeaderCell>
                                    <Table.HeaderCell width='3'><center>Name</center></Table.HeaderCell>
                                    <Table.HeaderCell width='2'><center>Detail</center></Table.HeaderCell>
                                    <Table.HeaderCell width='2'><center>Delete</center></Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>

                            {this.state.product.map((item, i) =>
                                <Table.Body>
                                    <Table.Row>

                                        <Table.Cell width='4'>
                                            <center><Image src={item.productImage} style={{ width: '20%', height: '20%', display: 'inline' }} /></center>
                                        </Table.Cell>
                                        <Table.Cell width='3'>
                                            <BigFont>  {item.name}</BigFont>
                                        </Table.Cell>
                                        <Table.Cell width='2'>
                                            <Button center content="see details" ident={item.productID} onClick={this.seeFullDetail} />
                                        </Table.Cell>
                                        <Table.Cell width='2'>
                                            <center><Button color='red' icon='remove' onClick={() => { this.removeItem(i) }} /></center>
                                        </Table.Cell>
                                    </Table.Row>
                                </Table.Body>
                            )}
                        </Table>
                        <Grid>
                            <Grid.Column floated='left' width={5}>
                                {/* <Button primary onClick={() => { this.sendData() }} >Update</Button> */}
                                <Button color='red' onClick={() => { this.removeOrder() }} >Clear</Button>

                            </Grid.Column>
                            <Grid.Column floated='right' width={3}>
                                {/* <Button primary onClick={() => { window.location = '/confirm' }}>Checkout</Button> */}
                            </Grid.Column>

                        </Grid>
                        <br />

                    </Responsive>

                    <Responsive {...Responsive.onlyMobile}>
                        <Head>
                            Favorite
                            </Head>
                        <Divider />

                        {this.state.product.map((item, i) =>
                            <Marg>
                                <Container>
                                    <Grid>
                                        <Grid.Row>
                                            <Grid.Column width={5}>
                                                <Image size='medium' src={item.productImage} />
                                            </Grid.Column>

                                            <Grid.Column width={10}>
                                                <Grid.Row>
                                                    <SmallFont>{item.name}</SmallFont>

                                                    <SmallFont>From:  {item.brand}</SmallFont>

                                                    <SmallFont> Price: THB  {item.price}</SmallFont>
                                                    <Divider />
                                                    <Bottom attached='bottom'>
                                                        <center>
                                                            <Button.Group size='medium' attached='bottom'>
                                                                <Button color='red' onClick={() => { this.removeItem(i) }} >Remove</Button>
                                                                <Button color="blue" icon='eye' content="see details" ident={item.productID} onClick={this.seeFullDetail} />
                                                            </Button.Group>
                                                        </center>
                                                    </Bottom>

                                                </Grid.Row>
                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid>

                                </Container>
                            </Marg>
                        )}
                        <Divider />
                        <br />
                        <Grid centered>
                            {/* <Button primary onClick={() => { this.sendData() }} >Update</Button> */}
                            <Button color='red' onClick={() => { this.removeOrder() }} >Clear</Button>
                            {/* <Button primary onClick={() => { window.location = '/confirm' }}>Checkout</Button> */}
                        </Grid>

                        <br />
                        <br />
                    </Responsive>
                </Container>
            </TemplateTKD>
        );
    }
}
import React, { Component } from "react";
import TKD from "../template/TemplateTKD";
import { Container, Divider, Image, Grid } from "semantic-ui-react";
import styled from 'styled-components'
import picTest from "./test.jpg"
import BG from "./back.png"


const Margin = styled.div`
    margin: 2em 0;
`
const Head = styled.div`
    font-size: 16px;
    text-align: center;
    font-weight: 300;
    margin: 1em 0;
    color: black;
 
`

const Normal = styled.div`
    font-size: 16px;
    text-align: center;
    font-weight: 300;
    margin: 1em 0;
    color: black;
   
`

const AddBG = styled.div`
    background-image: url(${BG});
    min-height : 200px;
    border: 1px solid #000;
   
`
const AddFootBg = styled.div`
    ${'' /* background-image: url(${BG}); */}
    ${'' /* background-color: darkgreen; */}
    min-height : 200px;
`
export default class Mobile extends Component {
    // <fetch here>

    render() {
        return (
            <Container>


                <h1> Profile </h1>
                <AddBG>
                    <shiftTop>
                        <br />
                        <Image size='medium' circular centered src={this.props.data.src} />
                    </shiftTop>
                    <Divider />

                    <AddFootBg>
                        <br />


                        <Grid>
                            <Grid.Row>
                                <Grid.Column width={6}>
                                    <Head>Name: </Head>
                                </Grid.Column>
                                <Divider />
                                <Grid.Column width={8}>
                                    <Normal>{this.props.data.Fname} {this.props.data.Lname}</Normal>

                                </Grid.Column>

                            </Grid.Row>
                            <Divider />
                            <Grid.Row>
                                <Grid.Column width={6}>
                                    <Head>Email: </Head>
                                </Grid.Column>
                                <Divider />
                                <Grid.Column width={8}>
                                    <Normal>{this.props.data.email}</Normal>
                                </Grid.Column>

                            </Grid.Row>
                            <Divider />
                            <Grid.Row>
                                <Grid.Column width={6}>
                                    <Head>Address: </Head>
                                </Grid.Column>
                                <Divider />
                                <Grid.Column width={8}>
                                    <Normal>{this.props.data.address}</Normal>
                                </Grid.Column>

                            </Grid.Row>
                            <Divider />
                            <Grid.Row>
                                <Grid.Column width={6}>
                                    <Head>Phone: </Head>
                                </Grid.Column>
                                <Divider />
                                <Grid.Column width={8}>
                                    <Normal>{this.props.data.phone}</Normal>
                                </Grid.Column>

                            </Grid.Row>


                        </Grid>
                        <br />
                    </AddFootBg>

                </AddBG>
                }




            </Container >
        );
    }
}
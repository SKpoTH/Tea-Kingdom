import React, { Component } from "react";

import { Container, Divider, Image, Grid, Button } from "semantic-ui-react";
import styled from 'styled-components'
import BG from "./back.png"
import Header from "./Header"


const Margin = styled.div`
    margin: 2em 0;
`
const Head = styled.div`
    font-size: 30px;
    text-align: center;
    font-weight: 400;
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
const ContainerMargin = styled.div`
    margin: 1em 0;
    margin-left : 1em 0;

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
                <Header />
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={5}>
                            <Image size='medium' circular centered src={this.props.data.src} />
                            <Head> {this.props.data.Fname} </Head>
                            <Head> {this.props.data.Lname} </Head>
                            <Divider />
                            <Normal> {this.props.data.email}</Normal>
                            <Normal> Phone : {this.props.data.phone}</Normal>
                            <Divider />
                            <center><Button onClick={() => { window.location = '/edit' }} primary size='big'> Edit my profile</Button></center>

                        </Grid.Column>

                        <Grid.Column width={10}>
                            <br />
                            <Margin>
                                <ContainerMargin>
                                    <Container text>
                                        <Head>About Me</Head>
                                        <Divider />
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                  Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
                  consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                  In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
                  link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus
                                </p>
                                    </Container>
                                </ContainerMargin>

                                <ContainerMargin>
                                    <Container text>
                                        <Head>Address</Head>
                                        <Divider />
                                        <Normal>
                                            {this.props.data.address}
                                        </Normal>

                                    </Container>

                                </ContainerMargin>

                            </Margin>


                        </Grid.Column>
                    </Grid.Row>
                </Grid>




            </Container>
        );
    }
}
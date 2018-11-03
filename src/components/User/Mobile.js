import React, { Component } from "react";
import TKD from "../template/TemplateTKD";
import { Container, Divider, Image } from "semantic-ui-react";
import styled from 'styled-components'

const Margin = styled.div`
    margin: 1em 0;
`
const Head = styled.div`
  font-size: 30px;
  text-align: center;
  font-weight: 600;
  margin: 1em 0;
`

const Normal = styled.div`
    font-size: 25px;
    text-align: center;
    font-weight: 300;
    margin: 1em 0;
`



export default class Mobile {
    render() {
        return (
            <TKD>
                <Container>
                    <Margin>
                        <Image size='medium' src={this.props.data.src} />
                    </Margin>
                    <Divider />
                    <Head>{this.props.data.Fname}</Head>
                    <Head>{this.props.data.Lname}</Head>
                    <Normal>{this.props.data.email}</Normal>
                    <Normal>{this.props.data.address}</Normal>
                    <Normal>{this.props.data.phone}</Normal>

                </Container>
            </TKD>
        );
    }
}
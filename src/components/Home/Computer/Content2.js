import React, { Component } from 'react';
import styled from 'styled-components'
import "semantic-ui-css/semantic.css";
import { Image, Container, Reveal } from 'semantic-ui-react'
import pic from '../pic/tea1.jpg'
import pic2 from '../pic/store.jpg'



const Margin = styled.div`
    margin-top: 30px;
    margin-bottom: 165px;
    margin: 1em;
`
const Para = styled.div`
    text-align: center;
    margin-bottom: 30px;
    font-size: 20px;
    
`
const Head = styled.div`
    margin-top: 15px;
    text-align: center;
    margin-bottom: 15px;
    font-size: 30px;
    
`





export default class Content1 extends Component {
    render() {
        return (
            <Container fluid>
                <Margin>

                    <Reveal animated='small fade' >
                        <Reveal.Content visible>
                            <Image src={pic} href='/product' />
                        </Reveal.Content>
                        <Reveal.Content hidden>
                            <Image src={pic2} href='/product' />
                        </Reveal.Content>
                    </Reveal>

                    <br />
                    <Head>We provide</Head>
                    <Para>
                        High quality teas, and tea accessories  for retail and wholesale customers.
        </Para>

                    <Head>The Perfect Tea for you</Head>

                    <Para>
                        We can help. Choose the words that best describe your mood and we'll find the perfect tea for you.
        </Para>

                    <Head>
                        Importer of fine tea since 1894
        </Head>

                    <Para>
                        "I believes that the drink should be prepared with love so that your body experiences not only physical nourishment but emotional and spiritual nourishment as well"
        </Para>
                </Margin>
            </Container>
        );
    }
}
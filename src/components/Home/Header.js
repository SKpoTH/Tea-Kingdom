import React, { Component } from 'react';
import styled from 'styled-components'
import pic from './head.jpg'
import "semantic-ui-css/semantic.css";


const Head = styled.div`
    background-position: center 50%;
    background-image: url(${pic});
    background-size: cover;
    min-height: 400px;
    padding-top: 150px
`

const Text = styled.div`
    text-align: center;
    margin: 50px;
    font-size: 50px;   
    font-weight: 400;
    color: white;
    font-family: sans-serif;
`

export default () => (
    <Head>
        <Text>
            Tea Kingdom
        </Text>
    </Head>
)

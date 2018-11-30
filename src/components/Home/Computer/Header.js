import React, { Component } from 'react';
import styled from 'styled-components'
import pic from '../pic/head.jpg'
import "semantic-ui-css/semantic.css";


const Head = styled.div`
    background-position: center 50%;
    background-image: url(${pic});
    background-size: cover;
    min-height: 400px;
    position: relative;
`

const Text = styled.div`
    text-align: center;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    font-size: 50px; 
    line-height: 1.2em;  
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

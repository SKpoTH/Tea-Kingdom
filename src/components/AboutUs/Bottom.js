import React, { Component } from 'react';
import styled from 'styled-components'
import pic from './pic/bottom.jpg'
import "semantic-ui-css/semantic.css";


const Head = styled.div`
    background-position: center 50%;
    background-image: url(${pic});
    background-size: cover;
    min-height: 300px;
    position: relative;
`
export default () => (
    <Head>

    </Head>
)

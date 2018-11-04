import React, { Component } from 'react';
import styled from 'styled-components'
import "semantic-ui-css/semantic.css";


const Center = styled.div`
    text-align: center;
    margin-top: 30px;
    font-size: 20px;
`
const Margin = styled.div`
    margin: 1em 0;
`
const Head = styled.div`
  font-size: 20px;
  font-weight: 600;
`


export default class Content1 extends Component {
  render() {
    return (
      <Center>
        <Margin>
          <Head>
            Find the best tea for you
          </Head>
        </Margin>

        <Margin>
          <p>
            We make tea for drinking both hot and over ice.
             It matters because we know it's really all about the ingredients,
             full-left teas, selected herbs, real fruit pieces,
             essential oils and all natural flavors
          </p>
        </Margin>
      </Center>
    );

  }

}
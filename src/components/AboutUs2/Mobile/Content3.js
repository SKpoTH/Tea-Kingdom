import React, { Component } from 'react';
import styled from 'styled-components'
import "semantic-ui-css/semantic.css";
import { Divider } from 'semantic-ui-react'

const Center = styled.div`
    text-align: left;
    margin-top: 30px;
    font-size: 20px;
`
const Margin = styled.div`
    margin: 1em 0;
`
const Head = styled.div`
  font-size: 25px;
  font-weight: 600;
`


export default class Content1 extends Component {
  render() {
    return (
      <Center>
        <Margin>
          <Head>
            Main Goal
          </Head>
        </Margin>
        <Divider />
        <Margin>
          <p>
            The company's main goal is to provide high-quality tea for a reasonable price, and make it affordable to everyone.
          </p>
        </Margin>

      </Center>
    );

  }

}

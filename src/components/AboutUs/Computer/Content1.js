import React ,{Component} from 'react';
import styled from 'styled-components'
import "semantic-ui-css/semantic.css";
import { Divider } from 'semantic-ui-react'

const Center = styled.div`
    text-align: left;
    margin-top: 30px;
    font-size: 25px;
` 
const Margin = styled.div`
    margin: 1em 0;
`
const Head = styled.div`
  font-size: 30px;
  font-weight: 600;
`


export default class Content1 extends Component {
  render(){
    return (
      <Center>
        <Margin>
          <Head>
            About our company
          </Head>
        </Margin>
        <Divider />
        <Margin>
          <p>
           Tea Kingdom is a tea company that was founded on 2018, and during that short period - it has successfully estabilished it self as a strong force on the tea market in Thailand. 
          </p>
        </Margin>
      </Center>
    );

  }

}

import React ,{Component} from 'react';
import styled from 'styled-components'
import "semantic-ui-css/semantic.css";
import { Divider } from 'semantic-ui-react'

const Center = styled.div`
    text-align: left;
    margin-: 30px;
    font-size: 20px;
` 
const Margin = styled.div`
    margin: 1em 0;
`


export default class Content1 extends Component {
  render(){
    return (
      <Center>
        <Margin>
          <p>
            Thanks to the goal, the company accomplished gaining trust and popularity in no time. Many people have tried product from Tea kingdom and there has been great customer feedback. Most of the tea sold in Tea kingdom import from worldwide tea shop. In addition to the Thai tea, the company also offers Indian, Chinese and South African tea. The wide range of products offered is intriguing - even to the most discerning tea specialists.
          </p>

          <p>
            In the production and selection of tea; the company pays an exceptionally close attention to the producers and plantations to ensure perfection. Tea Kingdom only accepts the finest ingredients, seek the best quality, the freshness of tea leaves.
          </p>
        </Margin>
      </Center>
    );

  }

}

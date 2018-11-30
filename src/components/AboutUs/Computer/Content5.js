import React, { Component } from 'react';
import styled from 'styled-components'
import "semantic-ui-css/semantic.css";


const Quote = styled.div`
    text-align: center;
    margin-top: 30px;
    font-size: 25px;
    width: 60%;
    margin: 1em 0;
`



export default class Content1 extends Component {
  render() {
    return (
      <center>
        <Quote>
          <p>
            A jewel of a place. If the Southern accents were British you would think you were in a tea shop in England. Food and service are wonderful, and the gifts, oh, the gifts. Owner Sandy Ramsey searches for unique, not to be found anywhere else in the area items to tempt diners. It usually works for me! A must do when visiting Springfield.
          </p>
        </Quote>
        — Sharon G.
      </center>
    );

  }

}

import React, { Component } from "react";
import { Image } from "semantic-ui-react";
import TemplateTKD from "../template/TemplateTKD";

const src = "./background.jpg";

class Home extends Component {
  render() {
    return (
      <Image src={src} size="massive" centered fluid />
    );
  }
}


export default class Homepage extends Component {
  render() {
    return (
      <TemplateTKD>
        <Home />
      </TemplateTKD>
    );
  }
}

import React, { Component } from "react";
import TemplateTKD from "../components/template/TemplateTKD";
import "semantic-ui-css/semantic.css";
import Member from "../components/Home/Member";
import { Image } from "semantic-ui-react";

class HomePage extends Component {
  render() {
    return (
      <div>
        <Image
          src="https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/E5A-UKCHl/videoblocks-tranquil-scene-of-fresh-green-tea-leaves-sway-by-wind-tea-plantation-nature-background_sgxdmv-n2l_thumbnail-full01.png"
          fluid
        />
        <Member />
      </div>
    );
  }
}

export default class Homepage extends Component {
  render() {
    return (
      <TemplateTKD>
        <HomePage />
      </TemplateTKD>
    );
  }
}

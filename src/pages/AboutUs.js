import React, { Component } from "react";
import TemplateTKD from "../components/template/TemplateTKD";
import "semantic-ui-css/semantic.css";
import Member from "../components/AboutUs/AboutUs";

class AboutUs extends Component {
  state = {
    msg: "AboutUs"
  };

  render() {
    return (
      <div>
        <TemplateTKD>
          <Member />
        </TemplateTKD>
      </div>
    );
  }
}

export default AboutUs;

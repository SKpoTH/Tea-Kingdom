import React, { Component } from "react";
import TemplateTKD from "../components/template/TemplateTKD";
import "semantic-ui-css/semantic.css";
import Member from "../components/AboutUs/AboutUs";

class Content extends Component {
  render() {
    return <div>{/* code here (don't delete <div>) */}</div>;
  }
}

export default class AboutUs extends Component {
  render() {
    return (
      <TemplateTKD>
        <Member />
      </TemplateTKD>
    );
  }
}

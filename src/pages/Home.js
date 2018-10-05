import React, { Component } from "react";
import TemplateTKD from "../components/template/TemplateTKD";
import "semantic-ui-css/semantic.css";
import Member from "../components/Home/Member";
import HomeHead from "../components/Home/Header";

class Home extends Component {
  state = {
    msg: "Home"
  };

  render() {
    return (
      <div>
        <TemplateTKD>
          <HomeHead />
          <Member />
        </TemplateTKD>
      </div>
    );
  }
}

export default Home;

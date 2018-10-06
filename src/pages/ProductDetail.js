import React, { Component } from "react";
import TemplateTKD from "../components/template/TemplateTKD";
import "semantic-ui-css/semantic.css";

import MainProduct from "../components/ProductDetail/MainProduct";
import SubProduct from "../components/ProductDetail/SubProduct";
import Review from "../components/ProductDetail/Review";

class ProductDetail extends Component {
  state = {
    msg: "productDetail"
  };

  render() {
    return (
      <div>
        <TemplateTKD>
          <MainProduct />
          <SubProduct />
          <Review />
        </TemplateTKD>
      </div>
    );
  }
}

export default ProductDetail;

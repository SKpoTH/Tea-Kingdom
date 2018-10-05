import React, { Component } from "react";
import TemplateTKD from "../components/template/TemplateTKD";
import "semantic-ui-css/semantic.css";
import ProductTable from "../components/productTable/ProductTable";

export default class ProdTable extends Component {
  render() {
    return (
      <TemplateTKD>
        <ProductTable />
      </TemplateTKD>
    );
  }
}

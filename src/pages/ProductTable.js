import React, { Component } from "react";
import TemplateTKD from "../components/template/TemplateTKD";
import "semantic-ui-css/semantic.css";
import ProductTable from "../components/productTable/ProductTable";

class ProdTable extends Component {
  state = {
    msg: "productTable"
  };

  render() {
    return (
      <div>
        <TemplateTKD>
          <ProductTable />
        </TemplateTKD>
      </div>
    );
  }
}

export default ProdTable;

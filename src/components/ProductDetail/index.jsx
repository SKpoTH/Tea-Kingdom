import React, { Component } from "react";
import TemplateTKD from "../template/TemplateTKD";
import "semantic-ui-css/semantic.css";

import MainProduct from "./MainProduct";
import SubProduct from "./SubProduct";
import Review from "./Review";
import axios from 'axios'
import { Message, Dimmer, Loader } from "semantic-ui-react";

class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message:
        { massageHidden: true, content: '', status: "" },
      id: props.params.id,
      loading: "active"
    }
  }
  componentDidMount() {
    this.getData();
  }
  getData = () => {
    axios.post('/api/product/load/one', { productID: this.state.id })
      .then((res) => {
        let jsonReturn = res.data.data;
        // console.log(jsonReturn);
        if (res.data.status === "found") {
          this.setState({
            name: jsonReturn.name,
            brand: jsonReturn.brand,
            type: jsonReturn.type,
            discountPrice: jsonReturn.discountPrice,
            price: jsonReturn.price,
            weight: jsonReturn.weight,
            region: jsonReturn.region,
            description: jsonReturn.description,
            review: jsonReturn.review,
            score: jsonReturn.score,
            process: jsonReturn.process,
            amount: jsonReturn.amount,
            pending: jsonReturn.pending,
            productImage: jsonReturn.productImage,
            discount: jsonReturn.discount,
            cantLoad: false,
            loading: ""
          })

        } else {
          this.setState({
            message:
              { massageHidden: false, content: 'We don\'t have this product.', status: "negative" },
            cantLoad: true,
            loading: ""
          });
        }

      })
      .catch((error) => {
        this.setState({ cantLoad: true });
        this.setState({
          message:
          {
            massageHidden: false,
            content: "Error : " + error.response.status + " => " + error.response.data.split("<pre>")[1].split("</pre>")[0],
            status: "negative",
            loading: ""
          }
        }
        );
      });
  };
  render() {
    return (
      <TemplateTKD>
        <Dimmer className={this.state.loading} inverted>
          <Loader size='large'>Loading</Loader>
        </Dimmer>
        <Message content={this.state.message.content} hidden={this.state.message.massageHidden} className={this.state.message.status} />
        {this.state.cantLoad ? null : <MainProduct dataR={this.state} />}
        {/* <SubProduct /> */}
        {this.state.cantLoad ? null : <Review idR={this.state.id} />}
      </TemplateTKD>
    );
  }
}

export default ProductDetail;

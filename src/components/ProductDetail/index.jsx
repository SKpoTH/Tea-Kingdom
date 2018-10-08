import React, { Component } from "react";
import TemplateTKD from "../template/TemplateTKD";
import "semantic-ui-css/semantic.css";

import MainProduct from "./MainProduct";
import SubProduct from "./SubProduct";
import Review from "./Review";
import axios from 'axios'
import { Message } from "semantic-ui-react";

class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message : 
				{ massageHidden : true, content :'', status: ""},
      id : props.params.id
    }
    this.getData()
  }
  getData = () => {
    var self = this;
    axios.post('http://localhost:5000/product_detail/load', {productID: this.state.id} )
				.then((res) => {
          let jsonReturn = res.data;
					if(jsonReturn.status === "found") {
            self.setState({
              name: jsonReturn.name,
              src: jsonReturn.src,
              price: jsonReturn.price,
              description: jsonReturn.description,
              cantLoad : false
            })
          } else {
            self.setState( {cantLoad : true} );
            self.setState( {message : 
              { massageHidden : false, content :'We don\'t have this product.', status: "negative"}});
          }
				})
				.catch((error) => {
          self.setState({ cantLoad : true });
					self.setState({ message : 
            { massageHidden : false, 
              content :"Error : "+error.response.status+" => "+error.response.data.split("<pre>")[1].split("</pre>")[0], 
              status: "negative"}}
            );
				});
  };
  render() {
    return (
      <TemplateTKD>
        <Message content={this.state.message.content} hidden={this.state.message.massageHidden} className={this.state.message.status}/>
        {this.state.cantLoad ? null : <MainProduct dataR={this.state} />}          
        <SubProduct />
        <Review />
      </TemplateTKD>
    );
  }
}

export default ProductDetail;

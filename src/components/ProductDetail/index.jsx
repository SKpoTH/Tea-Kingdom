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
    axios.post('/api/product_detail/load', { productID: this.state.id } )
				.then((res) => {
          let jsonReturn = res.data;
          // console.log(jsonReturn);
					if(jsonReturn.status === "found") {
            this.setState({
              name: jsonReturn.name,
              brand: jsonReturn.brand,
              type: jsonReturn.type,
              discountPrice: jsonReturn.discountPrice,
              price: jsonReturn.price,
              weight: jsonReturn.weight,
              region: jsonReturn.region,
              description:jsonReturn.description,
              review: jsonReturn.review,
              score: jsonReturn.score,
              process: jsonReturn.process,
              amount: jsonReturn.amount,
              pending: jsonReturn.pending,
              productImage: jsonReturn.productImage,
              discount: jsonReturn.discount,
              cantLoad : false
            })

          } else {
            this.setState( {cantLoad : true} );
            this.setState( {message : 
              { massageHidden : false, content :'We don\'t have this product.', status: "negative"}});
          }

				})
				.catch((error) => {
          this.setState({ cantLoad : true });
					this.setState({ message : 
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
        {/* <SubProduct /> */}
        {this.state.cantLoad ? null : <Review idR={this.state.id}/>}
      </TemplateTKD>
    );
  }
}

export default ProductDetail;

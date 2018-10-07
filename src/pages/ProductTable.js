import React, { Component } from "react";
import TemplateTKD from "../components/template/TemplateTKD";
import "semantic-ui-css/semantic.css";
import ProductTable from "../components/productTable/ProductTable";
import { Message, Button } from "semantic-ui-react";
import axios from 'axios'

class ProdTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message : 
        { massageHidden : true, content :'', status: ""},
      page :undefined,
      itemPperPage : 9,
      maxPage : undefined,
      spritCard : [],
    }
    this.allcard = [];
    this.getData()
  }
  
  loadDataPage = (page2) => {
    this.state.spritCard = [];
    for(let i = (page2-1)*this.state.itemPperPage; i < page2*this.state.itemPperPage; i++) {
      if(this.allcard[i] !== undefined)
        this.state.spritCard.push(this.allcard[i]);
      else
        break;
    }
    this.setState({page : page2});
  }

  getData = () => {
    var self = this;
    axios.post('http://localhost:5000/product/load')
				.then((res) => {
          this.allcard = res.data;
          this.setState( {maxPage : Math.ceil(this.allcard.length/this.state.itemPperPage) });
          this.loadDataPage(1)
				})
				.catch((error) => {
					self.setState( {message : 
            { massageHidden : false, 
              content :"Error : "+error.response.status+" => "+error.response.data.split("<pre>")[1].split("</pre>")[0], 
              status: "negative"}}
            );
				});
  };

  render() {
    return (
      <div>
        <TemplateTKD>
          <Message content={this.state.message.content} hidden={this.state.message.massageHidden} className={this.state.message.status}/>
          {this.state.spritCard ? <ProductTable all={this.state.spritCard} /> : null}
          <center>
            <Button.Group compact>
              {Array.from({length: this.state.maxPage}, (v, k) => k+1).map(item => (
                <Button content={item} compact className={item === this.state.page ? "disabled" : ""} onClick={() => {this.loadDataPage(item)}} />
              ))}
            </Button.Group>
          </center>
        </TemplateTKD>
      </div>
    );
  }
}

export default ProdTable;

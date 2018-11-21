import React, { Component } from "react";
import TemplateTKD from "../template/TemplateTKD";
import "semantic-ui-css/semantic.css";
import ProductT from "./ProductT";
import { Message, Button, Dimmer, Loader } from "semantic-ui-react";
import axios from 'axios'

class ProdTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message:
        { massageHidden: true, content: '', status: "" },
      page: undefined,
      itemPperPage: 6,
      maxPage: undefined,
      loading: "active"
    }
    this.allcard = [];
    this.spritCard = [];
  }

  loadDataPage = (page2) => {
    this.spritCard = [];
    for (let i = (page2 - 1) * this.state.itemPperPage; i < page2 * this.state.itemPperPage; i++) {
      if (this.allcard[i] !== undefined)
        this.spritCard.push(this.allcard[i]);
      else
        break;
    }
    this.setState({ page: page2 });
  }
  componentDidMount() {
    this.getData();
    console.log("load success");
  }
  getData = () => {
    var self = this;
    axios.post('/api/product/load')
      .then((res) => {
        this.allcard = res.data.data;
        this.setState({ maxPage: Math.ceil(this.allcard.length / this.state.itemPperPage), loading: "" });
        this.loadDataPage(1)
      })
      .catch((error) => {
        self.setState({
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
        {this.spritCard ? <ProductT all={this.spritCard} /> : null}
        <center>
          <Button.Group compact>
            {Array.from({ length: this.state.maxPage }, (v, k) => k + 1).map(item => (
              <Button content={item} compact className={item === this.state.page ? "disabled" : ""} onClick={() => { this.loadDataPage(item); window.scrollTo(0, 0); }} />
            ))}
          </Button.Group>
        </center>
      </TemplateTKD>
    );
  }
}

export default ProdTable;

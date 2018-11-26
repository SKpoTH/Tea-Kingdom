import React, { Component } from "react";
import TemplateTKD from "../template/TemplateTKD";
import "semantic-ui-css/semantic.css";
import { Message, Loading, Padding } from '../template/TKDcomponent';
import MainProduct from "./MainProduct";
import Review from "./Review";
import Connection from '../pomLib/connection';

const request = Connection.createClass();

class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: {
        content: '',
        hidden: true,
        className: ''
      },
      loading: true,
      cantLoad: false,
      loadData: {}
    }
  }
  componentDidMount() {
    this.getData();
  }
  getData = () => {
    request.post('/api/product/load/one', { productID: this.props.params.id }, false)
      .then(res => {
        if (res.status === "Successfully Loaded a Product") {
          this.setState({
            loadData: res.data,
            cantLoad: false,
            loading: false
          })
        } else {
          this.setState({
            message: {
              content: 'We don\'t have this product.',
              hidden: false,
              className: 'negative'
            },
            cantLoad: true,
            loading: false
          });
        }
      })
      .catch(err => {
        this.setMessage({
          content: err,
          hidden: false,
          className: 'negative'
        });
      });
  };
  setMessage = (mess) => {
    this.setState({ message: mess });
  }
  render() {
    const { message, loading, loadData } = this.state;
    const id = this.props.params.id;
    return (
      <TemplateTKD>
        <Loading loading={loading}/>
        <Message data={message} />
        <Padding length="1" />
        {this.state.cantLoad ? null : <MainProduct dataR={loadData} setMessage={this.setMessage} />}
        {this.state.cantLoad ? null : <Review idR={id} setMessage={this.setMessage}/>}
      </TemplateTKD>
    );
  }
}

export default ProductDetail;

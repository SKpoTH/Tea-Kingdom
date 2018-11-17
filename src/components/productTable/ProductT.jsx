import React, { Component } from "react";
import "semantic-ui-css/semantic.css";
import "./style.css";
import { Card, Image, Button, Icon, Message, Divider } from "semantic-ui-react";
import axios from 'axios'

class EEElement extends Component {
  send = () => {
    const myOrder = {
      productID : this.props.id,
      amount: 1
    }
    axios.post('/api/add_to_cart/add', myOrder)
        .then((res) => {console.log(res.data)})
				.catch((error) => {
          console.log(error)
        });
    window.location = "/order";
  };

  render() {
    return (
      <Card color="red">
        <Message attached color="black">
          <Message.Header>
            <center>{this.props.name}</center>
          </Message.Header>
        </Message>
        <Image src={this.props.img} alt="" size='medium'/>
        <Card.Content>
          <Card.Description className="max-lines">{this.props.des}</Card.Description>
          <Card.Description>
            <h3 className="inlineE">฿{this.props.discount ?  this.props.discountPrice : this.props.price}</h3>
            &nbsp;&nbsp;&nbsp;
            <h4 className="oldPrice">{this.props.discount ? "฿"+this.props.price : null} </h4>
          </Card.Description>
        </Card.Content>
        <Card.Content>
          <div className="ui two buttons">
            <Button color="red" content="favorite" icon="heart" onClick={() => {this.send()}} />
            <Button color="blue" content="see details" icon="eye" onClick={() => {window.location = "/ProductDetail"+this.props.id }} />
          </div>
        </Card.Content>
      </Card>
    );
  }
}

export default class productT extends Component {
  render() {
    return (
      <React.Fragment>
        <Card.Group centered>
          {this.props.all.map(item => (
            <EEElement name={item.name} 
                      des={item.description} 
                      img={item.productImage} 
                      price={item.price} 
                      discountPrice={item.discountPrice}
                      discount={item.discount}
                      id={item._id} />
          ))}
        </Card.Group>
        <Divider hidden />
      </React.Fragment>
      );
  }
}

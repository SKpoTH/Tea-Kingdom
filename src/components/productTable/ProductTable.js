import React, { Component } from "react";
import "semantic-ui-css/semantic.css";
import { Card, Image, Button, Icon, Message, Divider } from "semantic-ui-react";

class EEElement extends Component {
  render() {
    return (
      <Card color="red">
        <Message attached color="black">
          <Message.Header>
            <center>{this.props.name}</center>
          </Message.Header>
        </Message>
        <Image src={this.props.img} alt="" />
        <Card.Content>
          <Card.Description>{this.props.des}</Card.Description>
          <Card.Description as="h3">
            <Icon name="dollar" />
            {this.props.price}
          </Card.Description>
        </Card.Content>
        <Card.Content>
          <div className="ui two buttons">
            <Button color="red" content="favorite" icon="heart" />
            <Button color="blue" content="see details" icon="eye" onClick={() => {window.location = "/ProductDetail"+this.props.id }} />
          </div>
        </Card.Content>
      </Card>
    );
  }
}

export default class productTable extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <Card.Group centered>
          {this.props.all.map(item => (
            <EEElement name={item.productName} 
                      des={item.productDes} 
                      img={item.imgurl} 
                      price={item.productPrice} 
                      id={item.productId} />
          ))}
        </Card.Group>
        <Divider hidden />
      </React.Fragment>
      );
  }
}

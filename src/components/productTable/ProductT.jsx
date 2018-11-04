import React, { Component } from "react";
import "semantic-ui-css/semantic.css";
import "./style.css";
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
          <Card.Description className="max-lines">{this.props.des}</Card.Description>
          <Card.Description as="h3">
            <Icon name="btc" />
            {this.props.price}
          </Card.Description>
        </Card.Content>
        <Card.Content>
          <div className="ui two buttons">
            <Button color="red" content="favorite" icon="heart"  onClick={() => {window.location = "/under" }}/>
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
                      id={item._id} />
          ))}
        </Card.Group>
        <Divider hidden />
      </React.Fragment>
      );
  }
}

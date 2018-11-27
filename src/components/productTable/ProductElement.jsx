import React, { Component } from "react";
import { Card, Image, Button, Message } from "semantic-ui-react";
import { Padding } from "../template/TKDcomponent";
import Connection from '../pomLib/connection';
import Token from '../pomLib/token';
import "semantic-ui-css/semantic.css";
import "./style.css";

const request = Connection.createClass();

class ProductElement extends Component {
  constructor(props) {
    super(props);
  }

  addFev = (event, { ident }) => {
    event.preventDefault();
    request.post('/api/favourite/add', { productID : ident }, true)
    .then(res => {
      this.props.setMessage({
        content: res,
        hidden: false,
        className: 'success'
      });
    })
    .catch(err => {
      if(Token.isLogin)
        this.props.setMessage({
          content: err,
          hidden: false,
          className: 'negative'
        });
      else
        this.props.setMessage({
          content: "Please login to use favorites function",
          hidden: false,
          className: 'warning'
        });
    });
    window.scrollTo({ top: 0 ,behavior: 'smooth' });
  }

  seeFullDetail = (event, { ident }) => {
    event.preventDefault();
    window.location = "/ProductDetail"+ident;
  }

  render() {
    const { name, des, img, price, discountPrice, discount, id } = this.props;
    const headCard = (
      <Message attached color="black">
        <Message.Header>
          <center>{name}</center>
        </Message.Header>
      </Message>
    );
    const content = (
      <Card.Content>
        <Card.Description className="max-lines">{des}</Card.Description>
        <Card.Description>
          <h3 className="inlineE">฿{discount ?  discountPrice : price}</h3>
          &nbsp;&nbsp;&nbsp;
          <h4 className="oldPrice">{discount ? "฿"+price : null} </h4>
        </Card.Description>
      </Card.Content>
    );
    const twoButton = (
      <Card.Content>
        <div className="ui two buttons">
          <Button color="red" content="favorite" icon="heart" ident={id} onClick={this.addFev} />
          <Button color="blue" content="see details" icon="eye" ident={id} onClick={this.seeFullDetail} />
        </div>
      </Card.Content>
    );
    return (
      <Card color="red">
        {headCard}
        <Image src={img} alt="" size='medium'/>
        {content}
        {twoButton}
      </Card>
    );
  }
}

export default class ElementTable extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { setMessage, productOnePage } = this.props;
    return (
      <React.Fragment>
        <Card.Group centered>
          {productOnePage.map(item => (
            <ProductElement 
              name={item.name} 
              des={item.description} 
              img={item.productImage} 
              price={item.price} 
              discountPrice={item.discountPrice}
              discount={item.discount}
              id={item._id}
              setMessage={setMessage}
            />
          ))}
        </Card.Group>
        <Padding length="1" />
      </React.Fragment>
      );
  }
}

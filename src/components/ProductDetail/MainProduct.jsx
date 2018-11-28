import React, { Component } from "react";
import Connection from '../pomLib/connection';
import Token from '../pomLib/token';
import "./ProductDetail.css";
import { Container, Header, Segment, Item, Divider, Label, Icon, Input, Button, Grid } from "semantic-ui-react";

const request = Connection.createClass();

export default class MainProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1
    }
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({ value: event.target.value });
  }

  outSelect = (event) => {
    event.preventDefault();
    if (this.state.value <= 0)
      this.setState({ value: 1 });
    else if (this.state.value > this.props.dataR.amount)
      this.setState({ value: this.props.dataR.amount });
    else if (this.state.value > 1000)
      this.setState({ value: 999 });
    else if (typeof (this.state.value) != "number")
      this.setState({ value: 1 });
  }

  plus = (event) => {
    event.preventDefault();
    if (this.state.value == '') return;
    if (this.state.value + 1 < 1000 && this.state.value + 1 <= this.props.dataR.amount)
      this.setState({ value: Number(this.state.value) + 1 });
  }

  minus = (event) => {
    event.preventDefault();
    if (this.state.value - 1 > 0)
      this.setState({ value: Number(this.state.value) - 1 });
  }

  addFev = (event, { ident }) => {
    event.preventDefault();
    request.post('/api/favourite/add', { productID: ident }, true)
      .then(res => {
        this.props.setMessage({
          content: res,
          hidden: false,
          className: 'success'
        });
      })
      .catch(err => {
        if (Token.isLogin)
          this.props.setMessage({
            content: err,
            hidden: false,
            className: 'negative'
          });
        else
          this.messageLogin();
      });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  messageLogin = () => {
    this.props.setMessage({
      content: "Please login to use favorites function",
      hidden: false,
      className: 'warning'
    });
  }

  send = (event, { ident }) => { //checking login
    event.preventDefault();
    const myOrder = {
      productID: ident,
      amount: this.state.value
    }
    console.log(myOrder)
    request.post('/api/order/add', myOrder, true)
      .then(() => {
        window.location = "/order";
      })
      .catch(err => {
        console.log(err)
        if (Token.isLogin)
          this.props.setMessage({
            content: err,
            hidden: false,
            className: 'negative'
          });
        else
          this.messageLogin();
      });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  render() {
    const { productImage, name, discount, discountPrice, price, score, description, brand, amount, id } = this.props.dataR;
    const pictureFragment = <Item.Image size="large" src={productImage} />;
    const twoButtonFragment = (
      <React.Fragment>
        <Button color="blue" content="add to cart" ident={id} icon="cart" onClick={this.send} />
        <Button color="red" icon="heart" iden={id} onClick={this.addFev} />
      </React.Fragment>
    );
    const headFragment = (
      <Item.Header>
        <Header>
          <div className="productName">
            <Icon name="leaf" className="inlineE" />
            <h1 className="inlineE">{name}</h1>
          </div>
        </Header>
      </Item.Header>
    );
    const priceFragment = (
      <div className="priceSpace">
        <h3 className="inlineE">฿{discount ? discountPrice : price} </h3>
        <h4 className="oldPrice">{discount ? "฿" + price : null} </h4>
        &nbsp;&nbsp;&nbsp;
        <Label color='olive'>
          <Icon name='star' /> {score}
        </Label>
      </div>
    );
    const descriptionFragement = <Item.Description className="padd15" as='p'>{description}</Item.Description>;
    const brandFragement = (
      <React.Fragment>
        <Icon name="fort awesome" className='CON' />
        <div className='CON'>{brand}</div>
      </React.Fragment>
    );
    const amountFragement = (
      <React.Fragment>
        <b>Amount :</b> &nbsp;
        <Input labelPosition='right' type='text'>
          <Label className="PointerEdit button" onClick={this.minus}><Icon name="minus" fitted /></Label>
          <input className="centerText" maxlength="3" size="3" value={this.state.value} onChange={this.handleChange}
            onBlur={this.outSelect} />
          <Label className="PointerEdit button" onClick={this.plus}><Icon name="plus" fitted /></Label>
        </Input>
        <br />
        <Item.Extra className="indent">There are {amount} available</Item.Extra>
        <br />
      </React.Fragment>
    );
    return (
      <Container>
        <Segment>
          <Grid columns={2} stackable stretched>
            <Grid.Row>
              <Grid.Column textAlign="center">
                {pictureFragment}
              </Grid.Column>
              <Grid.Column>
                <Item.Group>
                  <Item>
                    <Item.Content>
                      {headFragment}
                      <Divider />
                      <Item.Meta>
                        {priceFragment}
                      </Item.Meta>
                      {descriptionFragement}
                      <Item.Content>
                        {brandFragement}
                        <br /><br />
                        {amountFragement}
                        {twoButtonFragment}
                        <Divider className="margin7" hidden />
                      </Item.Content>
                    </Item.Content>
                  </Item>
                </Item.Group>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </Container>
    );
  }
}

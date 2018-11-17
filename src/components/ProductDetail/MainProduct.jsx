import React, { Component } from "react";
import axios from 'axios'
import "./ProductDetail.css";

import { Container, Header, Segment, Item, Divider, Label, Icon, Input, Button , Grid } from "semantic-ui-react";

export default class MainProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value : 1,
      inputUsing : false,
      mouseCount : 0
    }
    axios.defaults.headers.common['Authorization'] = localStorage.getItem("token");
  }
  handleChange = (event) => {
    if((event.target.value > 0 && event.target.value <1000  && event.target.value <= this.props.dataR.amount) || event.target.value == '')
        this.setState({value: event.target.value});
      
  }
  plus = () => {
    if(this.state.value == '') return;
    if(this.state.value+1 < 1000 && this.state.value+1 <= this.props.dataR.amount)
      this.setState({value: Number(this.state.value)+1});
  }
  minus = () => {
    if(this.state.value-1 > 0)
      this.setState({value: Number(this.state.value)-1});
  }
  checkout = () => {
    if(this.state.mouseCount == 1) {
      this.setState({mouseCount: 0});
      if(this.state.value == '') {
        this.setState({value: 1});
      }
    }
  }
  
  send = () => {
    const myOrder = {
      productID : this.props.dataR.id,
      amount: this.state.value    
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
      <Container onMouseDown ={this.checkout}>
        <Segment>
          <Grid columns={2} stackable stretched>
            <Grid.Row>
              <Grid.Column textAlign="center">
                <Item.Image size="large" src={this.props.dataR.productImage} />
              </Grid.Column>


              <Grid.Column>


                <Item.Group>
                  <Item>
                    <Item.Content>
                      <Item.Header>
                        <Header>
                          <div className="productName">
                            <Icon name="leaf" className="inlineE"/>
                            <h1 className="inlineE">{this.props.dataR.name}</h1>
                          </div>
                        </Header>
                      </Item.Header>
                      <Divider/>
                      <Item.Meta> 
                        <div className="priceSpace">
                          <h3 className="inlineE">฿{this.props.dataR.discount ?  this.props.dataR.discountPrice: this.props.dataR.price} </h3>
                          <h4 className="oldPrice">{this.props.dataR.discount ? "฿"+this.props.dataR.price : null} </h4>
                          &nbsp;&nbsp;&nbsp;
                          <Label color='olive'>
                            <Icon name='star' /> {this.props.dataR.score}
                          </Label>
                        </div>
                      </Item.Meta>
                      <Item.Description className="padd15" as='p'>{this.props.dataR.description}</Item.Description>
                      <Item.Content>
                        <Icon name="fort awesome" className='CON'/><div className='CON'>{this.props.dataR.brand}</div>
                        <br/><br/>
                        <b>Amount :</b> &nbsp;
                        <Input labelPosition='right' type='text'>
                          <Label className="PointerEdit button" onClick={this.minus}><Icon name="minus" fitted/></Label>
                          <input className="centerText" maxlength="3" size="3" value={this.state.value} onChange={this.handleChange} 
                            onSelect={() => this.setState({inputUsing: true, mouseCount: 1})} />
                          <Label className="PointerEdit button" onClick={this.plus}><Icon name="plus" fitted/></Label>
                        </Input>
                        <br/>
                        <Item.Extra className="indent">There are {this.props.dataR.amount} available</Item.Extra>
                        <br/>
                        <Button color="blue" content="add to cart" icon="cart" onClick={() => {this.send()}} />
                        <Button color="red" icon="heart" onClick={() => {this.send()}} />
                        <Divider className="margin7" hidden/>
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

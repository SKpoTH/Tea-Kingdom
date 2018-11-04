import React, { Component } from 'react';
import 'semantic-ui-css/semantic.css';
import { Image, Button, Card, Container, Header, Grid } from 'semantic-ui-react'
import axios from 'axios';
// import MyRender from './Render';
import './style.css';

export default class OrderCom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message:
        { massageHidden: true, content: '', status: "" },
      product: [],
      index: 0
    }
    //this.onUpdate = this.onUpdate.bind(this);
    this.checkout = this.checkout.bind(this);

    this.getData();

    //authorization
    //axios.defaults.headers.common['Authorization'] = localStorage.getItem("token");
  }

  updateItem = (index, itemAttributes) => {
    this.setState({
      product: [
        ...this.state.product.slice(0, index),
        Object.assign({}, this.state.product[index], itemAttributes),
        ...this.state.product.slice(index + 1)
      ]
    });
  }

  // Send Data to update database
  sendData = () => {
    const sent = {
      product: this.state.product
    }

    axios.post('/api/order/update', sent, { headers: { Authorization: localStorage.getItem("token") } })
      .then((res) => {
        console.log(res.data.status);
        this.getData();
      })
      .catch((error) => {
        this.setState({ cantLoad: true });
        this.setState({
          message:
          {
            massageHidden: false,
            // content: "Error : " + error.response.status + " => " + error.response.data.split("<pre>")[1].split("</pre>")[0],
            status: "negative"
          }
        }
        );
      })
  }

  // Remove a product in order
  removeItem = (index) => {
    const sent = {
      productID: this.state.product[index]._id
    }

    console.log(this.state.product[index]._id);

    axios.post('/api/order/remove_product_from_order', sent, { headers: { Authorization: localStorage.getItem("token") } })
      .then((res) => {
        console.log(res.data.status);
        this.getData();
      })
      .catch((error) => {
        this.setState({ cantLoad: true });
        this.setState({
          message:
          {
            massageHidden: false,
            // content: "Error : " + error.response.status + " => " + error.response.data.split("<pre>")[1].split("</pre>")[0],
            status: "negative"
          }
        }
        );
      })
  }

  removeOrder = () => {
    axios.get('/api/order/remove_order', { headers: { Authorization: localStorage.getItem("token") } })
      .then((res) => {
        console.log(res.data.status);
        this.getData();
      })
      .catch((error) => {
        this.setState({ cantLoad: true });
        this.setState({
          message:
          {
            massageHidden: false,
            // content: "Error : " + error.response.status + " => " + error.response.data.split("<pre>")[1].split("</pre>")[0],
            status: "negative"
          }
        }
        );
      })
  }

  // Get loaded Data from back-end
  getData = () => {
    axios.get('/api/order/load', { headers: { Authorization: localStorage.getItem("token") } })
      .then((res) => {
        this.setState({
          product: res.data.product
        });
      })
      .catch((error) => {
        this.setState({ cantLoad: true });
        this.setState({
          message:
          {
            massageHidden: false,
            // content: "Error : " + error.response.status + " => " + error.response.data.split("<pre>")[1].split("</pre>")[0],
            status: "negative"
          }
        }
        );
      });
  };

  checkout = () => {
    window.location = '/under';
  }

  render() {
    return (
      <Container>
        <Header as='h1' color='green'>
          Order List
        </Header>

        {this.state.product.map((item, i) =>
          <Card.Group centered>
            <Card color='black'>
              <Card.Content>
                <Card.Header><center>{item.name}</center></Card.Header>
                <br />
                <Image size='small' src={item.productImage} style={{ margin: '0px 0px 5% 20%' }} />
                <br />

                <Card.Meta><center>{item.brand}</center></Card.Meta>

                <h5 style={{ marginTop: '5px' }}><center>Price : {item.price} ฿</center></h5>
                <h5 style={{ marginTop: '5px' }}><center>Amount : {item.amount}</center></h5>
              </Card.Content>

              <Card.Content>
                <Button.Group floated='left'>
                  <Button color='red' onClick={() => { this.removeItem(i) }} >Remove</Button>
                  <Button color='blue' onClick={() => { (this.state.product[i].amount-1) > 0 ? this.updateItem(i, { amount: this.state.product[i].amount - 1 }) : null }}>Minus</Button>
                  <Button color='green' onClick={() => { this.updateItem(i, { amount: this.state.product[i].amount + 1 }) }} >Plus</Button>
                  
                </Button.Group>
              </Card.Content>

            </Card>
          </Card.Group>
        )}

        <br />
        <br />
        <Grid centered>
          <Button color='red' onClick={() => { this.removeOrder() }} >Clear</Button>
          <Button primary onClick={() => { this.sendData() }} >Update</Button>
          <Button color='yellow' onClick={() => {window.location='/confirm'}}>Checkout</Button>
        </Grid>

        <br />
        <br />

      </Container>

    );
  }
}

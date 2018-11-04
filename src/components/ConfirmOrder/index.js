import React, { Component } from 'react';
import TemplateTKD from '../template/TemplateTKD';
import 'semantic-ui-css/semantic.css';
import {Header, Segment, Button, Divider} from 'semantic-ui-react';
import axios from 'axios';

class Content extends Component {
    constructor(props){
		super(props);
		this.state = { 
			message:
				{ massageHidden: true, content: '', status: "" },
            product: []
        }
        this.checkout = this.checkout.bind(this);

		this.getData();
    }
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
        axios.get('/api/payment/pay_confirm', { headers: { Authorization: localStorage.getItem("token") } })
            .then((res) => {
                console.log(res.data.status);
                window.location='/product';
        });
	}
    render() {
        let prePrice =0,Shipment=40;
        return (
            <div>
            <Segment.Group style={{border:'white'}} >
                <Segment basic>
                    <Header><b style={{textDecoration:'underline',fontSize:'20px'}}>Confirmation Ordering</b></Header>
                </Segment>
                <Segment.Group>
                    {this.state.product.map( item => 
                        <Segment.Group horizontal style={{border:'white'}}>
                            <div style={{width:'4'}}>
                                <Segment textAlign='left' basic style={{border:'white'}}>
                                    {item.amount}
                                </Segment>
                            </div>
                            <Segment textAlign='left' basic style={{border:'white'}}>
                                    {item.name}
                            </Segment>
                            <Segment textAlign='right' basic style={{border:'white'}}>
                                    {prePrice += item.amount * item.price}
                            </Segment>
                        </Segment.Group>
                     )}
                </Segment.Group>
                <Segment.Group horizontal style={{border:'white'}}>
                    <Segment basic style={{border:'white'}}>Product Price : </Segment>
                    <Segment basic style={{border:'white'}} textAlign='right'>{prePrice}</Segment>
                </Segment.Group>
                <Segment.Group horizontal style={{border:'white'}}>
                    <Segment basic style={{border:'white'}}>Shipment Fee  : </Segment>
                    <Segment basic style={{border:'white'}} textAlign='right'>{Shipment}</Segment>
                </Segment.Group>
                <Segment.Group horizontal style={{border:'white'}}> 
                    <Segment basic style={{border:'white'}}>Earned Point  : </Segment>
                    <Segment basic style={{border:'white'}} textAlign='right'>{prePrice/100}</Segment>
                </Segment.Group>
                <Segment.Group horizontal style={{border:'white'}}> 
                    <Segment basic style={{border:'white'}}>Total Price : </Segment>
                    <Segment basic style={{border:'white'}} textAlign='right'>{prePrice+Shipment}</Segment>
                </Segment.Group>
            </Segment.Group>
            <Button floated='right' color='green' onClick={this.checkout}>Confirm</Button>
            <Divider hidden/>
            <Divider hidden/>
            </div>
        );
    }
}

export default class Order extends Component {
    render() {
      return (
        <TemplateTKD>
          <Content/>
        </TemplateTKD>
      );
    }
  }
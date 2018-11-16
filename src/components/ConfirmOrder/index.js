import React, { Component } from 'react';
import TemplateTKD from '../template/TemplateTKD';
import 'semantic-ui-css/semantic.css';
import { Header, Segment, Button, Divider, Grid, Form } from 'semantic-ui-react';
import axios from 'axios';

class Content extends Component {
	constructor(props) {
		super(props);
		this.state = {
			message:
				{ massageHidden: true, content: '', status: "" },
			product: [],
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
				window.location = '/product';
			});

		const bill = {
			card_id: this.card_id,
			exp: this.exp,
			cvv: this.cvv,
		}
		let checkEmpty = false;
		for (let a in bill) {
			if (bill[a] === "" || bill[a] === undefined) {
				checkEmpty = true;
			}
		}
		if (checkEmpty) {
			this.setState({
				message:
					{ massageHidden: false, content: 'You must containt datas in all field.', status: "negative" }
			});
		} else {
			window.location = '/product';
			axios.post('/api/...', bill, { headers: { Authorization: localStorage.getItem("token") } })
				.then((res) => {

					if (res.data.status = "Wrong card number") {
						this.setState({
							message:
								{ massageHidden: false, content: res.data.status, status: "negative" }
						});
					}
					else {
						console.log(res.data.status);
						this.getData();
					}
				})
				.catch((error) => {
					this.setState({ cantLoad: true });
					this.setState({
						message:
						{
							massageHidden: false,
							status: "negative"
						}
					}
					);
				})


		}

	}


	render() {
		let prePrice = 0, Shipment = 40;
		return (
			<Grid>
				<Grid.Column width={10}>
					<Segment.Group color='white' >
						<Segment basic>
							<Header><b style={{ textDecoration: 'underline', fontSize: '20px' }}>Confirmation Ordering</b></Header>
						</Segment>
						<Segment.Group>
							{this.state.product.map(item =>
								<Segment.Group horizontal color='white'>
									<div style={{ width: '4' }}>
										<Segment textAlign='left' basic style={{ border: 'white' }}>
											{item.amount}
										</Segment>
									</div>
									<Segment textAlign='left' basic style={{ border: 'white' }}>
										{item.name}
									</Segment>
									<Segment textAlign='right' basic style={{ border: 'white' }}>
										{prePrice += item.amount * item.price}
									</Segment>
								</Segment.Group>
							)}
						</Segment.Group>
						<Segment.Group horizontal style={{ border: 'white' }}>
							<Segment basic style={{ border: 'white' }}>Product Price : </Segment>
							<Segment basic style={{ border: 'white' }} textAlign='right'>{prePrice}</Segment>
						</Segment.Group>
						<Segment.Group horizontal style={{ border: 'white' }}>
							<Segment basic style={{ border: 'white' }}>Shipment Fee  : </Segment>
							<Segment basic style={{ border: 'white' }} textAlign='right'>{Shipment}</Segment>
						</Segment.Group>
						<Segment.Group horizontal style={{ border: 'white' }}>
							<Segment basic style={{ border: 'white' }}>Earned Point  : </Segment>
							<Segment basic style={{ border: 'white' }} textAlign='right'>{prePrice / 100}</Segment>
						</Segment.Group>
						<Segment.Group horizontal style={{ border: 'white' }}>
							<Segment basic style={{ border: 'white' }}>Total Price : </Segment>
							<Segment basic style={{ border: 'white' }} textAlign='right'>{prePrice + Shipment}</Segment>
						</Segment.Group>
					</Segment.Group>

					<Divider hidden />
					<Divider hidden />
				</Grid.Column>
				<Grid.Column width={5}>
					<h1> Payment </h1>
					<Form checkout={this.checkout}>
						<Form.Field>
							<label>Card ID</label>
							<input type="card id" placeholder='card id : xxxx xxxx xxxx xxx' ref={(input) => this.card_id = input} />
						</Form.Field>
						<Form.Field>
							<label>exp </label>
							<input type="exp" placeholder='exp: YY/MM' ref={(input) => this.card_id = input} />
						</Form.Field>
						<Form.Field>
							<label>cvv</label>
							<input type="password" placeholder='cvv id : xxx' ref={(input) => this.card_id = input} />
						</Form.Field>
						<br />
					</Form>
					<Button floated='right' color='green' onClick={this.checkout}>Confirm</Button>
				</Grid.Column>
			</Grid>
		);
	}
}

export default class Order extends Component {
	render() {
		return (
			<TemplateTKD>
				<Content />
			</TemplateTKD>
		);
	}
}
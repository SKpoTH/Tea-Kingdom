import React, { Component } from 'react';
import 'semantic-ui-css/semantic.css';
import { Image, Button, Table, Icon, Grid, Label } from 'semantic-ui-react'

// import './style.css';
import Connection from '../pomLib/connection';

const request = Connection.createClass();

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
		request.post('/api/order/update', sent, true)
			// axios.post('/api/order/update', sent, { headers: { Authorization: localStorage.getItem("token") } })
			.then((res) => {
				console.log(res.status);
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
				});
			})
	}

	// Remove a product in order
	removeItem = (index) => {
		const sent = {
			productID: this.state.product[index]._id
		}

		console.log(this.state.product[index]._id);
		request.post('/api/order/remove/one', sent, true)
			// axios.post('/api/order/remove/one', sent, { headers: { Authorization: localStorage.getItem("token") } })
			.then((res) => {
				console.log(res.status);
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
		request.get('/api/order/remove/all', true)
			// axios.get('/api/order/remove/all', { headers: { Authorization: localStorage.getItem("token") } })
			.then((res) => {
				console.log(res.status);
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

	// Get stock info of product
	getStock = () => {
		for (let i in this.state.product) {
			//console.log(this.state.product[i]);
			let stockProduct = {
				productID: this.state.product[i].productID
			}

			request.post('/api/product/load/one', stockProduct)
				// axios.post('/api/product/load/one', stockProduct)
				.then(res => {
					console.log(res.status);
					this.state.product[i].stock = res.data.amount;
				})
				.catch(err => {
					console.log('Error');
				})
		}
		// console.log(this.state.product);
	}

	// Get loaded Data from back-end
	getData = () => {
		request.get('/api/order/load', true)
			// axios.get('/api/order/load', { headers: { Authorization: localStorage.getItem("token") } })
			.then((res) => {
				console.log(res.status);
				this.setState({
					product: res.data.product
				});

				this.getStock();
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

		let Count = 1;

		return (
			<div>
				<h1>Order Cart</h1>
				<Table celled fixed>
					<Table.Header>
						<Table.Row>
							<Table.HeaderCell width='1'></Table.HeaderCell>
							<Table.HeaderCell width='5'><h3><center>Product</center></h3></Table.HeaderCell>
							<Table.HeaderCell width='2'><h3><center>Price</center></h3></Table.HeaderCell>
							<Table.HeaderCell width='4'><h3><center>Amount</center></h3></Table.HeaderCell>
							<Table.HeaderCell width='2'><h3><center>Total</center></h3></Table.HeaderCell>
							<Table.HeaderCell width='2'><h3><center>Delete</center></h3></Table.HeaderCell>
						</Table.Row>
					</Table.Header>

					{this.state.product.map((item, i) =>
						<Table.Body>
							<Table.Row>
								<Table.Cell width='1'>{Count++}</Table.Cell>
								<Table.Cell width='5'>
									<center><Image src={item.productImage} size='small' />
										<h3>{item.name}</h3></center>
								</Table.Cell>
								<Table.Cell width='2'>
									<h4 className='inlineE'>
										{item.discount ? item.discountPrice : item.price}
									</h4>
									&nbsp;&nbsp;&nbsp;
									<h4 className='oldPrice'>
										{item.discount ? item.price : null}
									</h4>
								</Table.Cell>
								<Table.Cell width='4'>
									<center>
										<Label className="PointerEdit button" onClick={() => { (this.state.product[i].amount - 1) > 0 ? this.updateItem(i, { amount: this.state.product[i].amount - 1 }) : null }}>
											<Icon name="minus" fitted />
										</Label>
										{item.amount}
										<Label className="PointerEdit button" onClick={() => { (this.state.product[i].amount + 1) < 30 ? this.updateItem(i, { amount: this.state.product[i].amount + 1 }) : null }}>
											<Icon name="plus" fitted />
										</Label>
									</center>
								</Table.Cell>
								<Table.Cell width='2'>
									<center>
										<h4 className='inlineE'>
											{
												item.discount ?
													item.discountPrice * item.amount :
													item.price * item.amount
											}
										</h4>
										&nbsp;&nbsp;&nbsp;
									<h4 className='oldPrice'>
											{
												item.discount ?
													item.price * item.amount :
													null
											}
										</h4>
									</center>
								</Table.Cell>
								<Table.Cell width='2'>
									<center>
										<Button color='red' icon='remove' onClick={() => { this.removeItem(i) }} />
									</center>
								</Table.Cell>
							</Table.Row>
						</Table.Body>
					)}
				</Table>
				<Grid>
					<Grid.Column floated='left' width={5}>
						<Button primary onClick={() => { this.sendData() }} >Update</Button>
						<Button color='red' onClick={() => { this.removeOrder() }} >Clear</Button>

					</Grid.Column>
					<Grid.Column floated='right' width={3}>
						<Button primary onClick={() => { window.location = '/confirm' }}>Checkout</Button>
					</Grid.Column>

				</Grid>


			</div>
		);
	}
}

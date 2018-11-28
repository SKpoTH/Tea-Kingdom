import React, { Component } from 'react';
import axios from 'axios'
import 'semantic-ui-css/semantic.css';
import { Form, Button, Message, Image, Responsive, Grid, Container } from 'semantic-ui-react';
import TemplateTKD from "../template/TemplateTKD";
import styled from 'styled-components';

import Connection from '../pomLib/connection';

const request = Connection.createClass();



const UploadImage = styled.div`
    margin-top: 20px ;
	margin-bottom: 20px;
`

export default class EditUser extends Component {
	constructor(props) {
		super(props);

		this.state = {
			message:
				{ massageHidden: true, content: '', status: "" },
			Fname: '',
			Lname: '',
			address: '',
			phone: '',
		}

		this._handleImageChange = this._handleImageChange.bind(this);
		this._handleSubmit = this._handleSubmit.bind(this);
		// axios.defaults.headers.common['Authorization'] = localStorage.getItem("token"); //Importand 

	}

	_handleSubmit(e) {
		e.preventDefault();
	}

	_handleImageChange(e) {
		e.preventDefault();

		let reader = new FileReader();

		let file = e.target.files[0];

		reader.onloadend = () => {
			this.setState({
				file: file,
				imagePreviewUrl: reader.result
			});
		}

		reader.readAsDataURL(file)
		// reader.readAsArrayBuffer(file)
	}

	CheckEmpty(state) {
		for (let a in state) {
			if (state[a] === "" || state[a] === undefined) {
				return true;
			}
		}
		return false
	}

	CheckFileEmpty(file) {
		if (file === undefined) {
			console.log('No upload File');
			return true
		}
		return false
	}

	emptyData() {
		this.setState({
			message:
				{ massageHidden: false, content: 'You must containt datas in all field.', status: "negative" }
		});
	}

	errorPage(error) {
		this.setState({
			message:
			{
				massageHidden: false,
				content: "Error : " + error.response.status + " => " + error.response.data.split("<pre>")[1].split("</pre>")[0],
				status: "negative"
			}
		}
		);

	}

	sendData(userData) {
		// axios({
		// 	method: 'post',
		// 	url: '/api/userData/edit',
		// 	data: userData,
		// 	config: { headers: { 'Content-Type': 'multipart/form-data' } }
		// })
		request.postPicture('/api/userData/edit', userData)
			.then((res) => {
				console.log(res.status);
				window.location = '/user';

			})
			.catch((error) => {
				this.errorPage(error)
			});

	}

	submitData(state, file, userData) {
		if (this.CheckEmpty(state) && this.CheckFileEmpty(file)) {
			this.emptyData()
		} else {
			this.sendData(userData)
		}

	}

	onSubmit = (event) => {
		event.preventDefault();

		//data 
		var userData = new FormData();

		userData.set('firstname', this.state.Fname);
		userData.set('lastname', this.state.Lname);
		userData.set('address', this.state.address);
		userData.set('phone', this.state.phone);
		userData.append('profileImage', this.state.file);


		console.log(this.state.file);

		// var checkEmpty = false;
		// for (var a in this.state) {
		// 	if (this.state[a] === "" || this.state[a] === undefined) {
		// 		console.log("Don't have data at -> " + a);
		// 		checkEmpty = true;
		// 	}
		// }

		//Check if image file is empty
		// if (this.state.file === undefined) {
		// 	console.log('No upload File');
		// 	checkEmpty = true;
		// }

		this.submitData(this.state, this.state.file, userData)

		// if (this.CheckEmpty(this.state) && this.CheckFileEmpty(this.state.file)) {
		// 	this.emptyData()
		// } else {
		// 	this.sendData(userData)
		// 	// axios({
		// 	// 	method: 'post',
		// 	// 	url: '/api/userData/edit',
		// 	// 	data: userData,
		// 	// 	config: { headers: { 'Content-Type': 'multipart/form-data' } }
		// 	// })
		// 	// 	.then((res) => {
		// 	// 		console.log(res.data.status);
		// 	// 		window.location = '/user';
		// 	// 		// window.location = '/login' + user.email;
		// 	// 	})
		// 	// 	.catch((error) => {
		// 	// 		this.setState({
		// 	// 			message:
		// 	// 			{
		// 	// 				massageHidden: false,
		// 	// 				content: "Error : " + error.response.status + " => " + error.response.data.split("<pre>")[1].split("</pre>")[0],
		// 	// 				status: "negative"
		// 	// 			}
		// 	// 		}
		// 	// 		);
		// 	// 	});
		// }
	}

	render() {
		let { imagePreviewUrl } = this.state;
		let $imagePreview = null;
		if (imagePreviewUrl) {
			$imagePreview = (<img src={imagePreviewUrl} style={{ width: '100%', height: '100%' }} />);
		}
		else {
			$imagePreview = (
				<center>
					<UploadImage>
						<Image src='/imgs/unupload_image.png' size='medium' wrapped />
					</UploadImage>
				</center>
			);
		}


		return (

			<TemplateTKD>
				<Message content={this.state.message.content} hidden={this.state.message.massageHidden} className={this.state.message.status} />
				<Form onSubmit={this.onSubmit} >
					<Responsive  {...Responsive.onlyMobile}>
						<Container>
							<h1>Edit User</h1>
							<center><h2>Profile</h2></center>
							<form onSubmit={this._handleSubmit}>
								{$imagePreview}
								<input type="file" onChange={this._handleImageChange} />
							</form>

							<br />
							<Form.Input label='First name' placeholder='First name' onChange={(e, data) => this.setState({ Fname: data.value })} />
							<Form.Input label='Last name' placeholder='Last name' onChange={(e, data) => this.setState({ Lname: data.value })} />

							<Form.Input label='Address' placeholder='Address' onChange={(e, data) => this.setState({ address: data.value })} />
							<Form.Input label='Phone' placeholder='Phone' onChange={(e, data) => this.setState({ phone: data.value })} />
							<Button primary type='submit'>Submit</Button>
						</Container>


					</Responsive>
					<Responsive  {...Responsive.onlyTablet}>

						<Container>
							<h1>Edit User</h1>


							<Grid>
								<Grid.Row>
									<Grid.Column width={5}>
										<center><h2>Profile</h2></center>
										<form onSubmit={this._handleSubmit}>
											{$imagePreview}
											<input type="file" onChange={this._handleImageChange} />
										</form>

									</Grid.Column>
									<Grid.Column width={8}>
										<br />
										<Form.Input label='First name' placeholder='First name' onChange={(e, data) => this.setState({ Fname: data.value })} />
										<Form.Input label='Last name' placeholder='Last name' onChange={(e, data) => this.setState({ Lname: data.value })} />

										<Form.Input label='Address' placeholder='Address' onChange={(e, data) => this.setState({ address: data.value })} />
										<Form.Input label='Phone' placeholder='Phone' onChange={(e, data) => this.setState({ phone: data.value })} />
										<Button primary type='submit'>Submit</Button>
									</Grid.Column>

								</Grid.Row>

							</Grid>

						</Container>
					</Responsive>
					<Responsive {...Responsive.onlyComputer}>

						<Container>
							<h1>Edit User</h1>


							<Grid>
								<Grid.Row>
									<Grid.Column width={5}>
										<center><h2>Profile</h2></center>
										<form onSubmit={this._handleSubmit}>
											{$imagePreview}
											<input type="file" onChange={this._handleImageChange} />
										</form>

									</Grid.Column>
									<Grid.Column width={8}>
										<br />
										<Form.Input label='First name' placeholder='First name' onChange={(e, data) => this.setState({ Fname: data.value })} />
										<Form.Input label='Last name' placeholder='Last name' onChange={(e, data) => this.setState({ Lname: data.value })} />

										<Form.Input label='Address' placeholder='Address' onChange={(e, data) => this.setState({ address: data.value })} />
										<Form.Input label='Phone' placeholder='Phone' onChange={(e, data) => this.setState({ phone: data.value })} />
										<Button primary type='submit'>Submit</Button>
									</Grid.Column>

								</Grid.Row>

							</Grid>

						</Container>
					</Responsive>




				</Form>

			</TemplateTKD >
		);
	}
}
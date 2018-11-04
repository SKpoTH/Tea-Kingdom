import React, { Component } from 'react';
import axios from 'axios'
import 'semantic-ui-css/semantic.css';
import { Form, Button, Message, Image } from 'semantic-ui-react';
import TemplateTKD from "../template/TemplateTKD";
import styled from 'styled-components';

const UploadImage = styled.div`
    margin-top: 20px;
	margin-bottom: 20px;
`

export default class EditUser extends Component {
	constructor(props) {
		super(props);
		this.state = {
			message:
				{ massageHidden: true, content: '', status: "" },
			firstname: '',
			lastname: '',
			address: '',
			phone: '',

		}
		this._handleImageChange = this._handleImageChange.bind(this);
		this._handleSubmit = this._handleSubmit.bind(this);
		axios.defaults.headers.common['Authorization'] = localStorage.getItem("token"); //Importand 

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

		var checkEmpty = false;

		for (var a in this.state) {
			if (this.state[a] === "" || this.state[a] === undefined) {
				console.log("Don't have data at -> " + a);
				checkEmpty = true;
			}
		}
		//Check if image file is empty
		if (this.state.file === undefined) {
			console.log('No upload File');
			checkEmpty = true;
		}

		if (checkEmpty) {
			this.setState({
				message:
					{ massageHidden: false, content: 'You must containt datas in all field.', status: "negative" }
			});
		} else {
			axios({
				method: 'post',
				url: 'api/edit_profile/edit',
				data: userData,
				config: { headers: { 'Content-Type': 'multipart/form-data' } }
			})
				.then((res) => {
					console.log(res.data.status);
					window.location = '/user';
					// window.location = '/login' + user.email;
				})
				.catch((error) => {
					this.setState({
						message:
						{
							massageHidden: false,
							content: "Error : " + error.response.status + " => " + error.response.data.split("<pre>")[1].split("</pre>")[0],
							status: "negative"
						}
					}
					);
				});
		}
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
				<h1>Edit User</h1>
				<Form onSubmit={this.onSubmit} >

					<form onSubmit={this._handleSubmit}>
						{$imagePreview}
						<input type="file" onChange={this._handleImageChange} />
						{/* <Button type='file' onChange={this._handleImageChange}>Upload</Button> */}
						{/* <button type="submit" onClick={this._handleSubmit} style={{display:'block'}}>Upload Image</button> */}
					</form>


					<Form.Group unstackable widths={2}>
						<Form.Input label='firstname' placeholder='First name' onChange={(e, data) => { this.state.firstname = data.value }} />
						<Form.Input label='lastname' placeholder='Last name' onChange={(e, data) => { this.state.lastname = data.value }} />
					</Form.Group>

					<Form.Group widths={2}>
						<Form.Input label='address' placeholder='Address' onChange={(e, data) => { this.state.address = data.value }} />
						<Form.Input label='phone' placeholder='Phone' onChange={(e, data) => { this.state.phone = data.value }} />
					</Form.Group>


					<Button type='submit'>Submit</Button>
				</Form>
			</TemplateTKD>
		);
	}
}
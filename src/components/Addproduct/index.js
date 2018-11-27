import React, { Component } from 'react';
import axios from 'axios'
import 'semantic-ui-css/semantic.css';
import { Form, Button, Message, Modal, Checkbox, TextArea, Responsive, Grid, Image, Label, Header, Popup } from 'semantic-ui-react';
import TemplateTKD from "../template/TemplateTKD";
import styled from 'styled-components'


const Center = styled.div`
	text-align: center;
	font-size: 30px;
	margin-top: 20px;
	margin-bottom: 40px;
`

const UploadImage = styled.div`
    margin-top: 20px;
	margin-bottom: 20px;
`


const Comment = styled.div`
	margin-top: 25px;
	background: 'white';
`

const SubmitSection = styled.div`
	margin-top: 25px;
`

const options = [
	{ key: 't', text: 'Tea', value: 'tea' },
	{ key: 'e', text: 'Equipment', value: 'equipment' }
]

export default class AddProduct extends Component {
	constructor(props) {
		super(props);
		this.state = {
			message:
				{ massageHidden: true, content: '', status: "" },
			agree: false,
			name: '',
			company: '',
			brand: '',
			process: '',
			region: '',
			amount: '',
			type: '',
			email: 'skpoxpolice@gmailc.com',
			discount: false,
			price: '',
			discountPrice: '',
			score: '50',
			weight: '',
			description: ''
		}
		// photo
		this._handleImageChange = this._handleImageChange.bind(this);
		this._handleSubmit = this._handleSubmit.bind(this);

		axios.defaults.headers.common['Authorization'] = localStorage.getItem("token");
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

		var bodyFormData = new FormData();

		bodyFormData.set('name', this.state.name);
		bodyFormData.set('company', this.state.company);
		bodyFormData.set('brand', this.state.brand);
		bodyFormData.set('process', this.state.process);
		bodyFormData.set('region', this.state.region);
		bodyFormData.set('amount', this.state.amount);

		bodyFormData.set('type', this.state.type);
		bodyFormData.set('email', 'skpoxpolice@gmail.com');
		bodyFormData.set('discount', this.state.discount);
		bodyFormData.set('price', this.state.price);
		bodyFormData.set('discountPrice', this.state.discountPrice);
		bodyFormData.set('score', '50');

		bodyFormData.set('weight', this.state.weight);
		bodyFormData.set('description', this.state.description);
		bodyFormData.append('productImage', this.state.file);

		console.log(this.state.file);

		var isEmpty = false;

		//Check if image file is empty
		for (var a in this.state) {
			if (this.state[a] === "" || this.state[a] === undefined) {
				console.log("Don't have data at -> " + a);
				isEmpty = true;
			}
		}

		//Check if image file is empty
		if (this.state.file === undefined) {
			console.log('No upload File');
			isEmpty = true;
		}

		if (isEmpty) {
			this.setState({
				message: { massageHidden: false, content: 'You must contain data in all field.', status: "negative" }
			});
		} else if (!this.state.agree) {
			this.setState({
				message:
					{ massageHidden: false, content: 'You must consider ours agreement.', status: "negative" }
			});
		} else {
			//console.log(addnewproduct);
			axios({
				method: 'post',
				url: 'api/add_product/add',
				data: bodyFormData,
				config: { headers: { 'Content-Type': 'multipart/form-data' } }
			})
				.then((res) => {
					if (res.data.status === "no company name") {
						this.setState({
							message: { massageHidden: false, content: res.data.status, status: "negative" }
						});
					} else {
						console.log(res.data.status);
						window.location = '/seller';
					}
				})
				.catch(err => console.error(err));
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
				<Form onSubmit={this.onSubmit} >
					<Responsive {...Responsive.onlyMobile}>
						<Center>Add New Product</Center>


						{/* Upload Image Section */}
						<center>
							<div>
								<form onSubmit={this._handleSubmit}>
									{$imagePreview}
									<input type="file" onChange={this._handleImageChange} />
									{/* <Button type='file' onChange={this._handleImageChange}>Upload</Button> */}
									{/* <button type="submit" onClick={this._handleSubmit} style={{display:'block'}}>Upload Image</button> */}
								</form>
							</div>
						</center>

						{/* Fill the Form Section */}

						<Form>
							<Form.Field>
								<br />

								<Form.Input label='Product Name' placeholder='Name' onChange={(e, data) => { this.state.name = data.value }} />

							</Form.Field>

							<Form.Group unstackable widths={2}>
								<Form.Input label='Company Name' placeholder='company name' onChange={(e, data) => { this.state.company = data.value }} />
								<Form.Input label='Brand' placeholder='brand' onChange={(e, data) => { this.state.brand = data.value }} />
							</Form.Group>
							<br />

							<Form.Group unstackable widths={3}>
								<Form.Input label='Price (Baht)' placeholder='Baht' onChange={(e, data) => { this.state.price = data.value }} />

								<Popup
									trigger={<Form.Input label='Discount Price' placeholder='Baht' onChange={(e, data) => { this.state.discountPrice = data.value }} />}
									content='The discount Price will use when you active Discount Period'
									position='top center'
									size='tiny'
									inverted
								/>

								<Form.Input label='Stock' placeholder='Initial amount of prodcut' onChange={(e, data) => { this.state.amount = data.value }} />

							</Form.Group>





							{/* Properties Detail Section */}
							<Header as='h3'>Proporties Detail</Header>

							<Form.Group unstackable widths={2}>
								<Form.Select fluid label='Type' options={options} placeholder='Type of Prodcut' onChange={(e, data) => { this.state.type = data.value }} />
								<Form.Input label='Weight' placeholder='Weight Per One Product' onChange={(e, data) => { this.state.weight = data.value }} />
							</Form.Group>
							<br />
							<Form.Group unstackable widths={2}>
								<Form.Input label='Process' placeholder='ซอง / ผง / ใบ' onChange={(e, data) => { this.state.process = data.value }} />
								<Form.Input label='Region' placeholder='Japan / China / English / Other' onChange={(e, data) => { this.state.region = data.value }} />
							</Form.Group>
							<br />
							<Form>
								<Form.Field>
									<label>Description</label>
									<TextArea autoHeight placeholder='Add your description here!' onChange={(e, data) => { this.state.description = data.value }} />
								</Form.Field>
							</Form>
						</Form>

						{/* Accept condition and Submit Section */}

						<SubmitSection>
							<Form.Group inline>
								<Form.Field control={Checkbox} onChange={() => { this.setState({ agree: !this.state.agree }) }} />
								I agree to the&nbsp;
<Modal trigger={<a style={{ cursor: 'pointer' }}>Terms and Conditions</a>}>
									<Modal.Header>Agreement</Modal.Header>
									<Modal.Content>
										<p>I swear that data above is all true.
											Editing the data, seller must get approve from admin and the data will be update at 02.00 am on the next day.
			If you have any problem please contact us. </p>
									</Modal.Content>
								</Modal>
							</Form.Group>

							<Button type='submit'>Submit</Button>
						</SubmitSection>




					</Responsive>






					<Responsive {...Responsive.onlyTablet}>
						<Center>Add New Product</Center>


						{/* Upload Image Section */}
						<center>
							<div>
								<form onSubmit={this._handleSubmit}>
									{$imagePreview}
									<input type="file" onChange={this._handleImageChange} />
									{/* <Button type='file' onChange={this._handleImageChange}>Upload</Button> */}
									{/* <button type="submit" onClick={this._handleSubmit} style={{display:'block'}}>Upload Image</button> */}
								</form>
							</div>
						</center>

						{/* Fill the Form Section */}

						<Form>
							<Form.Field>
								<br />

								<Form.Input label='Product Name' placeholder='Name' onChange={(e, data) => { this.state.name = data.value }} />

							</Form.Field>

							<Form.Group unstackable widths={2}>
								<Form.Input label='Company Name' placeholder='company name' onChange={(e, data) => { this.state.company = data.value }} />
								<Form.Input label='Brand' placeholder='brand' onChange={(e, data) => { this.state.brand = data.value }} />
							</Form.Group>
							<br />

							<Form.Group unstackable widths={3}>
								<Form.Input label='Price (Baht)' placeholder='Baht' onChange={(e, data) => { this.state.price = data.value }} />

								<Popup
									trigger={<Form.Input label='Discount Price' placeholder='Baht' onChange={(e, data) => { this.state.discountPrice = data.value }} />}
									content='The discount Price will use when you active Discount Period'
									position='top center'
									size='tiny'
									inverted
								/>

								<Form.Input label='Stock' placeholder='Initial amount of prodcut' onChange={(e, data) => { this.state.amount = data.value }} />

							</Form.Group>





							{/* Properties Detail Section */}
							<Header as='h3'>Proporties Detail</Header>

							<Form.Group unstackable widths={2}>
								<Form.Select fluid label='Type' options={options} placeholder='Type of Prodcut' onChange={(e, data) => { this.state.type = data.value }} />
								<Form.Input label='Weight' placeholder='Weight Per One Product' onChange={(e, data) => { this.state.weight = data.value }} />
							</Form.Group>
							<br />
							<Form.Group unstackable widths={2}>
								<Form.Input label='Process' placeholder='ซอง / ผง / ใบ' onChange={(e, data) => { this.state.process = data.value }} />
								<Form.Input label='Region' placeholder='Japan / China / English / Other' onChange={(e, data) => { this.state.region = data.value }} />
							</Form.Group>
							<br />
							<Form>
								<Form.Field>
									<label>Description</label>
									<TextArea autoHeight placeholder='Add your description here!' onChange={(e, data) => { this.state.description = data.value }} />
								</Form.Field>
							</Form>
						</Form>

						{/* Accept condition and Submit Section */}

						<SubmitSection>
							<Form.Group inline>
								<Form.Field control={Checkbox} onChange={() => { this.setState({ agree: !this.state.agree }) }} />
								I agree to the&nbsp;
<Modal trigger={<a style={{ cursor: 'pointer' }}>Terms and Conditions</a>}>
									<Modal.Header>Agreement</Modal.Header>
									<Modal.Content>
										<p>I swear that data above is all true.
											Editing the data, seller must get approve from admin and the data will be update at 02.00 am on the next day.
			If you have any problem please contact us. </p>
									</Modal.Content>
								</Modal>
							</Form.Group>

							<Button type='submit'>Submit</Button>
						</SubmitSection>



					</Responsive>


					<Responsive {...Responsive.onlyComputer}>
						<Center>Add New Product</Center>

						<Grid>
							{/* Upload Image Section */}
							<Grid.Column width={4}>
								<div>
									<form onSubmit={this._handleSubmit}>
										{$imagePreview}
										<input type="file" onChange={this._handleImageChange} />
										{/* <Button type='file' onChange={this._handleImageChange}>Upload</Button> */}
										{/* <button type="submit" onClick={this._handleSubmit} style={{display:'block'}}>Upload Image</button> */}
									</form>
								</div>
							</Grid.Column>

							{/* Fill the Form Section */}
							<Grid.Column width={12}>
								<Form>
									<Form.Field>

										<Form.Input label='Product Name' placeholder='Name' onChange={(e, data) => { this.state.name = data.value }} />

									</Form.Field>
									<Form.Group unstackable widths={2}>
										<Form.Input label='Company Name' placeholder='company name' onChange={(e, data) => { this.state.company = data.value }} />
										<Form.Input label='Brand' placeholder='brand' onChange={(e, data) => { this.state.brand = data.value }} />
									</Form.Group>



									<Form.Group unstackable widths={3}>
										<Form.Input label='Price (Baht)' placeholder='Baht' onChange={(e, data) => { this.state.price = data.value }} />
										<Popup
											trigger={<Form.Input label='Discount Price' placeholder='Baht' onChange={(e, data) => { this.state.discountPrice = data.value }} />}
											content='The discount Price will use when you active Discount Period'
											position='top center'
											size='tiny'
											inverted
										/>
										<Form.Input label='Stock' placeholder='Initial amount of prodcut' onChange={(e, data) => { this.state.amount = data.value }} />
									</Form.Group>







									{/* Properties Detail Section */}
									<Header as='h3'>Proporties Detail</Header>

									<Form.Group unstackable widths={2}>
										<Form.Select fluid label='Type' options={options} placeholder='Type of Prodcut' onChange={(e, data) => { this.state.type = data.value }} />
										<Form.Input label='Weight' placeholder='Weight Per One Product' onChange={(e, data) => { this.state.weight = data.value }} />
									</Form.Group>

									<Form.Group unstackable widths={2}>
										<Form.Input label='Process' placeholder='ซอง / ผง / ใบ' onChange={(e, data) => { this.state.process = data.value }} />
										<Form.Input label='Region' placeholder='Japan / China / English / Other' onChange={(e, data) => { this.state.region = data.value }} />
									</Form.Group>

									<Form>
										<Form.Field>
											<label>Description</label>
											<TextArea autoHeight placeholder='Add your description here!' onChange={(e, data) => { this.state.description = data.value }} />
										</Form.Field>
									</Form>
								</Form>

								{/* Accept condition and Submit Section */}

								<SubmitSection>
									<Form.Group inline>
										<Form.Field control={Checkbox} onChange={() => { this.setState({ agree: !this.state.agree }) }} />
										I agree to the&nbsp;
						<Modal trigger={<a style={{ cursor: 'pointer' }}>Terms and Conditions</a>}>
											<Modal.Header>Agreement</Modal.Header>
											<Modal.Content>
												<p>I swear that data above is all true.
													Editing the data, seller must get approve from admin and the data will be update at 02.00 am on the next day.
									If you have any problem please contact us. </p>
											</Modal.Content>
										</Modal>
									</Form.Group>

									<Button type='submit'>Submit</Button>
								</SubmitSection>
							</Grid.Column>
						</Grid>


					</Responsive>
				</Form>
			</TemplateTKD>
		);
	}
}
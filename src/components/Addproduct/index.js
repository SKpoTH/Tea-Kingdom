import React, { Component } from 'react';
import axios from 'axios'
import 'semantic-ui-css/semantic.css';
import {Form , Button, Message, Modal, Checkbox, TextArea} from 'semantic-ui-react';
import TemplateTKD from "../template/TemplateTKD";
import styled from 'styled-components'


const Center = styled.div`
	text-align: center;
	font-size: 30px;
	margin: 20px;
`
export default class AddProduct extends Component {
	constructor(props){
		super(props);
		this.state = {
			message : 
				{ massageHidden : true, content: '', status: ""},
			agree : false,
			name: '',
			company: '',
			brand: '',
			process: '',
			region: '',
			region: '',
			amount: '',
			type: 'tea',
			email: 'skpoxpolice@gmailc.com',
			discount: false,
			price: '100',
			discountPrice: '100',
			score: '50',
			weight: '',
			description: ''
		}
		// photo
		this._handleImageChange = this._handleImageChange.bind(this);
		this._handleSubmit = this._handleSubmit.bind(this);
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

		bodyFormData.set('type', 'tea');
		bodyFormData.set('email', 'skpoxpolice@gmail.com');
		bodyFormData.set('discount', false);
		bodyFormData.set('price', '100');
		bodyFormData.set('discountPrice', '90');
		bodyFormData.set('score', '50');

		bodyFormData.set('amountperpack', '12');
		bodyFormData.set('weight', '1000');
		bodyFormData.set('description', 'Hello World');
		bodyFormData.append('productImage', this.state.file);

		console.log(this.state.file);
		
		var isEmpty = false;
		
		//Check if image file is empty
		for(var a in this.state) {
			if(this.state[a] === "" || this.state[a] === undefined) {
				console.log("Don't have data at -> " + a);
				isEmpty = true;
			}
		}
		
		//Check if image file is empty
		if( this.state.file === undefined){
			console.log('No upload File');
			isEmpty = true;
		}

		if(isEmpty) {
			this.setState( {
				message : { massageHidden : false, content : 'You must contain data in all field.', status: "negative"}
			});
		} else if(!this.state.agree) {
			this.setState( {message : 
				{ massageHidden : false, content :'You must consider ours agreement.', status: "negative"}});
		} else {
			//console.log(addnewproduct);
			axios({	method: 'post',
				  	url: 'api/add_product/add',
					data: bodyFormData,
					config: { headers: {'Content-Type': 'multipart/form-data' }}
				})
				.then((res) => {
					if(res.data.status === "no company name") {
						this.setState( {
							message : { massageHidden : false, content: res.data.status, status: "negative"}
						});
					} else {
						console.log(res.data.status);
						// window.location = '/AboutUs';
					}
				})
				.catch(err => console.error(err));
		}
	}
	
	render() {
		let {imagePreviewUrl} = this.state;
		let $imagePreview = null;
		if (imagePreviewUrl) {
			$imagePreview = (<img src={imagePreviewUrl} style={{width:'20%',height:'20%'}}/>);
		}
		return (
			<TemplateTKD>
				<Message content={this.state.message.content} hidden={this.state.message.massageHidden} className={this.state.message.status}/>
				<Center>Create New Product</Center>
				<Form onSubmit={ this.onSubmit } >
					<Form>
						<Form.Field>
							<Form.Input label='Product Name' placeholder='product name' onChange={(e,data)=>{ this.state.name = data.value }} />
						</Form.Field>
						<Form.Group unstackable widths={2}>
							<Form.Input label='Company Name' placeholder='company name' onChange={(e,data)=>{ this.state.company = data.value }} />
							<Form.Input label='Brand' placeholder='brand' onChange={(e,data)=>{ this.state.brand = data.value }} />
						</Form.Group>

						<Form.Group unstackable widths={2}>
							<Form.Input label='Process' placeholder='ซอง / ผง / ใบ' onChange={(e,data)=>{ this.state.process = data.value }} />
							<Form.Input label='Region' placeholder='Japan / China / English / Other' onChange={(e,data)=>{ this.state.region = data.value }} />
						</Form.Group>
						
						<Form.Group unstackable widths={2}>
							<Form.Input label='จำนวนที่ลงขาย' placeholder='จำนวนที่ลงขาย' onChange={(e,data)=>{ this.state.amount = data.value }} />
							<Form.Input label='จำนวนซองต่อสินค้า 1 กล่อง' placeholder='1 กล่องมีกี่ซอง' onChange={(e,data)=>{ this.state.amountperpack = data.value }} />
						</Form.Group>
						
						<Form.Group unstackable widths={2}>
							<Form.Input label='น้ำหนักของสินค้า 1 กล่อง' placeholder='1 กล่องหนักกี่กรัม' onChange={(e,data)=>{ this.state.weight = data.value }} />
						</Form.Group>

						<Form>
							<Form.Field>
								<label>Description</label>
								<TextArea autoHeight placeholder='Add your description here!' onChange={(e,data)=>{this.state.description = data.value }}/>
							</Form.Field>
						</Form>
					</Form>
					
					<div>
						<form onSubmit={this._handleSubmit}>
							<input type="file" onChange={this._handleImageChange} />
							{$imagePreview}
							<button type="submit" onClick={this._handleSubmit} style={{display:'block'}}>Upload Image</button>
						</form>
					</div>			
					
					<Form.Group inline>
					<Form.Field control={Checkbox}onChange={() => {this.setState({agree : !this.state.agree})}}/>
						I agree to the&nbsp;
						<Modal trigger={<a style={{cursor:'pointer'}}>Terms and Conditions</a>}>
							<Modal.Header>Agreement</Modal.Header>
							<Modal.Content>
								<p>I swear that data above is all true. 
									Editing the data, seller must get approve from admin and the data will be update at 02.00 am on the next day.
									If you have any problem please contact us. </p>
							</Modal.Content>
						</Modal>
					</Form.Group>

					<Button type='submit'>Submit</Button>
				</Form>
			</TemplateTKD>   
		);
	}
}
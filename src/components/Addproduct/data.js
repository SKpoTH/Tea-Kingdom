import React, { Component } from 'react';
import 'semantic-ui-css/semantic.css';
import {Form , TextArea} from 'semantic-ui-react';

export default class Data extends Component {
	render() {
		return (
            <Form>
				<Form.Field>
					<label>Product Name</label>
					<input type="text" placeholder='product name' ref={(input) => this.product = input} />
				</Form.Field>
				<Form.Group unstackable widths={2}>
					<Form.Input label='Company Name' placeholder='company name' onChange={(e,data)=>{ this.company = data.value }} />
					<Form.Input label='Brand' placeholder='brand' onChange={(e,data)=>{ this.brand = data.value }} />
				</Form.Group>

				<Form.Group unstackable widths={2}>
					<Form.Input label='Process' placeholder='ซอง / ผง / ใบ' onChange={(e,data)=>{ this.process = data.value }} />
					<Form.Input label='Region' placeholder='Japan / China / English / Other' onChange={(e,data)=>{ this.region = data.value }} />
				</Form.Group>
				
				<Form.Group unstackable widths={2}>
					<Form.Input label='จำนวนที่ลงขาย' placeholder='จำนวนที่ลงขาย' onChange={(e,data)=>{ this.amount = data.value }} />
					<Form.Input label='จำนวนซองต่อสินค้า 1 กล่อง' placeholder='1 กล่องมีกี่ซอง' onChange={(e,data)=>{ this.amountperpack = data.value }} />
				</Form.Group>
				
				<Form.Group unstackable widths={2}>
					<Form.Input label='น้ำหนักของสินค้า 1 กล่อง' placeholder='1 กล่องหนักกี่กรัม' onChange={(e,data)=>{ this.weight = data.value }} />
				</Form.Group>

				<Form>
					<Form.Field>
						<label>Description</label>
						<TextArea autoHeight placeholder='Add your description here!' onChange={(e,data)=>{this.description = data.value }}/>
					</Form.Field>
				</Form>
            </Form>
		)
	}
}
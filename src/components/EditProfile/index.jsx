import React, { Component } from 'react';
import axios from 'axios'
import 'semantic-ui-css/semantic.css';
import {Form , Button, Message, Checkbox, Modal} from 'semantic-ui-react';
import TemplateTKD from "../template/TemplateTKD";

export default class EditUser extends Component {
    constructor(props){
        super(props);    
        this.state = {
			message : 
				{ massageHidden : true, content :'', status: ""},
			agree : false
		}
    }
    
    onSubmit = (event) => {
        event.preventDefault();
        const user = {
			firstname : this.state.firstname,
			lastname : this.state.lastname,
			address : this.state.address,
			phone : this.state.phone
		}
		let checkEmpty = false;
		for(let a in user) {
			if(user[a] === "" || user[a] === undefined) {
				checkEmpty = true;
			}
		}
		if(checkEmpty) {
			this.setState( {message : 
				{ massageHidden : false, content :'You must containt datas in all field.', status: "negative"}});
		} else if(!this.state.agree) {
			this.setState( {message : 
				{ massageHidden : false, content :'You must consider ours agreement.', status: "negative"}});
		} else {
			axios.post('/api/edit_profile/edit', user)
				.then((res) => {
					// console.log(res.data);
					if(res.data.status === "Email already used") {
						this.setState( {message : 
							{ massageHidden : false, content :res.data.status , status: "negative"}});
					} else {
						window.location = '/login'+user.email;
					}
				})
				.catch((error) => {
					this.setState( {message : 
						{ massageHidden : false, 
						  content :"Error : "+error.response.status+" => "+error.response.data.split("<pre>")[1].split("</pre>")[0], 
						  status: "negative"}}
						);
				});
		}
      }
	render() {
		return (
			<TemplateTKD>
				<Message content={this.state.message.content} hidden={this.state.message.massageHidden} className={this.state.message.status}/>
				<h1>Edit User</h1>
				<Form onSubmit={ this.onSubmit } >

					<Form.Group unstackable widths={2}>
						<Form.Input label='firstname' placeholder='First name' onChange={(e,data)=>{ this.firstname = data.value }} />
						<Form.Input label='lastname' placeholder='Last name' onChange={(e,data)=>{ this.lastname = data.value }} />
					</Form.Group>

					<Form.Group widths={2}>
						<Form.Input label='address' placeholder='Address' onChange={(e,data)=>{ this.address = data.value }} />
						<Form.Input label='phone' placeholder='Phone' onChange={(e,data)=>{ this.phone = data.value }} />
					</Form.Group>

					
					<Button type='submit'>Submit</Button>
				</Form>
			</TemplateTKD>   
		);
	}
}
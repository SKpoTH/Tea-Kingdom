import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios'
import 'semantic-ui-css/semantic.css';
import { Form, Button, Message, Checkbox, Modal } from 'semantic-ui-react';
import TemplateTKD from "../template/TemplateTKD";

const AA = styled.a`
	color: #1e70bf;
	text-decoration: none;
	cursor: pointer;
`;

export default class Registration extends Component {
	constructor(props) {
		super(props);
		this.state = {
			message:
				{ massageHidden: true, content: '', status: "" },
			agree: false
		}
	}

	CheckEmpty(user) {
		let check = false
		for (let a in user) {
			if (user[a] === "" || user[a] === undefined) {
				check = true;
			}
		}
		return check
	}

	CheckMessage(message, user) {
		if (message === "Email already used") {
			this.setState({
				message:
					{ massageHidden: false, content: message, status: "negative" }
			});
		}
		else {
			window.location = '/login' + user.email;
		}
	}

	sendData(user) {
		axios.post('/api/signup', user)
			.then((res) => {
				this.CheckMessage(res.data.status, user)

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

	emptyData() {
		this.setState({
			message:
				{ massageHidden: false, content: 'You must containt datas in all field.', status: "negative" }
		});
	}

	checkPasswordMatch(password, rePassword) {
		if (password !== rePassword) {
			return true
		}
		else return false
	}

	passwordDontMatch() {
		this.setState({
			message:
				{ massageHidden: false, content: 'You password doesn\'t match.', status: "negative" }
		});
	}

	checkAgreement(agreement) {
		return !agreement
	}

	agreementMessage() {
		this.setState({
			message:
				{ massageHidden: false, content: 'You must consider ours agreement.', status: "negative" }
		});
	}

	SubmitValue(user, password, rePassword, agree) {
		if (this.CheckEmpty(user)) {
			this.emptyData()
		}
		else if (this.checkPasswordMatch(password, rePassword)) {
			this.passwordDontMatch()
			password = ""
			rePassword = ""
		}
		else if (this.checkAgreement(agree)) {
			this.agreementMessage()
		}
		else {
			this.sendData(user)
		}

	}

	onSubmit = (event) => {
		event.preventDefault();

		const user = {
			firstname: this.firstname,
			lastname: this.lastname,
			email: this.email.value,
			password: this.password.value,
			address: this.address,
			phone: this.phone
		}

		this.SubmitValue(user, this.password.value, this.rePassword.value, this.state.agree)
	}
	render() {
		return (
			<TemplateTKD>
				<Message content={this.state.message.content} hidden={this.state.message.massageHidden} className={this.state.message.status} />
				<h1>Register</h1>
				<Form onSubmit={this.onSubmit} >
					<Form.Field>
						<label>Email</label>
						<input type="email" placeholder='your@email.com' ref={(input) => this.email = input} />
					</Form.Field>

					<Form.Group unstackable widths={2}>
						<Form.Field>
							<label>Password</label>
							<input type="password" placeholder='password' ref={(input) => this.password = input} />
						</Form.Field>

						<Form.Field>
							<label>Retype Password</label>
							<input type="password" placeholder='re-password' ref={(input) => this.rePassword = input} />
						</Form.Field>

					</Form.Group>

					<Form.Group unstackable widths={2}>
						<Form.Input label='firstname' placeholder='First name' onChange={(e, data) => { this.firstname = data.value }} />
						<Form.Input label='lastname' placeholder='Last name' onChange={(e, data) => { this.lastname = data.value }} />
					</Form.Group>

					<Form.Group widths={2}>
						<Form.Input label='address' placeholder='Address' onChange={(e, data) => { this.address = data.value }} />
						<Form.Input label='phone' placeholder='Phone' onChange={(e, data) => { this.phone = data.value }} />
					</Form.Group>

					<Form.Group inline>
						<Form.Field control={Checkbox} onChange={() => { this.setState({ agree: !this.state.agree }) }} />
						I agree to the&nbsp;

						<Modal trigger={<AA>Terms and Conditions</AA>}>
							<Modal.Header>ข้อตกลง</Modal.Header>
							<Modal.Content>
								<p>Tea kingdom, through its Website “www.Tea-kingdom.com”, or any other domain or subdomain linked to it and owned by Tea kingdom (hereinafter, the TEA SHOP Website), may request the User for certain personal data. The data provided by the User will be stored in an automated file of personal data, property of Tea kingdom, which will be processed in order to provide the services requested by the User. The User authorizes the automated processing of the personal data provided, necessary for the provision of the services agreed.

								The personal information collected from registered users is stored in a database owned by Tea kingdom, which takes all the necessary technical, organizational and security measures to ensure the confidentiality and integrity of the information in accordance with the provisions of Basic Law , on Personal Data Protection, and other applicable legislation.

								Any registered User may, at any time, exercise the rights of access, rectification, cancellation and opposition with regard to his personal data provided to the TEA SHOP website, by written communication addressed to Tea kingdom, this communication may also be made by sending an email to the following address: tea-kingdom@teashop.com.</p>

							</Modal.Content>
						</Modal>
					</Form.Group>
					<Button type='submit'>Submit</Button>
				</Form>
			</TemplateTKD>
		);
	}
}
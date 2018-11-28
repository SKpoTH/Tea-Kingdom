import React, { Component } from 'react';
// import axios from 'axios'
import 'semantic-ui-css/semantic.css';
import { Form, Message, Responsive, Image } from 'semantic-ui-react';
import TemplateTKD from "../template/TemplateTKD";

import Computer from './Computer'
import Tablet from './Tablet'
import Mobile from './Mobile'



export default class AddProduct extends Component {


	render() {

		return (
			<TemplateTKD>
				<Responsive {...Responsive.onlyMobile}>
					<Mobile />
				</Responsive>

				<Responsive {...Responsive.onlyTablet}>
					<Tablet />
				</Responsive>

				<Responsive {...Responsive.onlyComputer}>
					<Computer />
				</Responsive>
			</TemplateTKD >
		);
	}
}
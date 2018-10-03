import React, { Component } from 'react';
import TemplateTKD from '../template/TemplateTKD';
import 'semantic-ui-css/semantic.css';
import { Card , Image , Button ,Icon, Message, Divider } from 'semantic-ui-react';

class EEElement extends Component {
	render() {
		return (
			<Card color="red">
				<Message attached color="black">
					<Message.Header><center>{this.props.name}</center></Message.Header>
				</Message>
				<Image src={this.props.img} alt=""/>
				<Card.Content>
					<Card.Description>{this.props.des}</Card.Description>
					<Card.Description as='h3'><Icon name="dollar"/>{this.props.price}</Card.Description>
				</Card.Content>
				<Card.Content textAlign="center">
					<div className='ui two buttons'>
						<Button color='red' content='favorite' icon='heart'/>
						<Button color='blue'content='add to cart' icon='shop'/>
					</div>
				</Card.Content>
			</Card>
		);
	}
}

class Content extends Component {
  render() {
    return (
			<div>
				<Card.Group centered>
					<EEElement name="Au long" des="ชาชั้นดีจากประทศจีน" img="imgs/printColorTest.jpg" price="2000"/>
					<EEElement name="Au long" des="ชาชั้นดีจากประทศจีน" img="imgs/printColorTest.jpg" price="2000"/>
					<EEElement name="Au long" des="ชาชั้นดีจากประทศจีน" img="imgs/printColorTest.jpg" price="2000"/>
					<EEElement name="Au long" des="ชาชั้นดีจากประทศจีน" img="imgs/printColorTest.jpg" price="2000"/>
					<EEElement name="Au long" des="ชาชั้นดีจากประทศจีน" img="imgs/printColorTest.jpg" price="2000"/>
					<EEElement name="Au long" des="ชาชั้นดีจากประทศจีน" img="imgs/printColorTest.jpg" price="2000"/>
					<EEElement name="Au long" des="ชาชั้นดีจากประทศจีน" img="imgs/printColorTest.jpg" price="2000"/>
					<EEElement name="Au long" des="ชาชั้นดีจากประทศจีน" img="imgs/printColorTest.jpg" price="2000"/>
					<EEElement name="Au long" des="ชาชั้นดีจากประทศจีน" img="imgs/printColorTest.jpg" price="2000"/>
				</Card.Group>
				<Divider hidden/>
				<center>
					<Button.Group compact>
						<Button icon='left chevron' compact/>
						<Button content='1' compact disabled/>
						<Button content='2' compact/>
						<Button content='3' compact/>
						<Button content='4' compact/>
						<Button icon='right chevron' compact/>
					</Button.Group>
				</center>
			</div>
    );
  }
}

export default class productTable extends Component {
  render() {
    return (
      <TemplateTKD>
        <Content />
      </TemplateTKD>
    );
  }
}

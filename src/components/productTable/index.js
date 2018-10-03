import React, { Component } from 'react';
import Header from '../template/Header';
import Footer from '../template/Footer';
import 'semantic-ui-css/semantic.css';
import { Container, Card , Image , Button ,Icon, Message } from 'semantic-ui-react';

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
			<Container>
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
					<EEElement name="Au long" des="ชาชั้นดีจากประทศจีน" img="imgs/printColorTest.jpg" price="2000"/>
					<EEElement name="Au long" des="ชาชั้นดีจากประทศจีน" img="imgs/printColorTest.jpg" price="2000"/>
					<EEElement name="Au long" des="ชาชั้นดีจากประทศจีน" img="imgs/printColorTest.jpg" price="2000"/>
					<EEElement name="Au long" des="ชาชั้นดีจากประทศจีน" img="imgs/printColorTest.jpg" price="2000"/>
					<EEElement name="Au long" des="ชาชั้นดีจากประทศจีน" img="imgs/printColorTest.jpg" price="2000"/>
					<EEElement name="Au long" des="ชาชั้นดีจากประทศจีน" img="imgs/printColorTest.jpg" price="2000"/>
					<EEElement name="Au long" des="ชาชั้นดีจากประทศจีน" img="imgs/printColorTest.jpg" price="2000"/>
					<EEElement name="Au long" des="ชาชั้นดีจากประทศจีน" img="imgs/printColorTest.jpg" price="2000"/>					
				</Card.Group>
			</Container>
    );
  }
}

export default class productTable extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Content/>
        <Footer/>
      </div>
    );
  }
}

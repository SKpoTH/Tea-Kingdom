import React, { Component } from 'react';
import Header from '../template/Header';
import Footer from '../template/Footer';
import 'semantic-ui-css/semantic.css';
import { Container, Card , Image , Button , Icon } from 'semantic-ui-react';

class EEElement extends Component {
	constructor(props) {
    super(props);
  }
	render() {
		return (
			<Card>
				<Card.Content>
					<Card.Header textAlign="center">{this.props.name}</Card.Header>
				</Card.Content>
				<Image src={this.props.img} alt=""/>
				<Card.Content>
					<Card.Description>{this.props.des}</Card.Description>
				</Card.Content>
				<Card.Content>
					<div className='ui two buttons'>
						<Button basic color='green'>
							<Icon name='shop'/>
						</Button>
						<Button basic color='red'>
							<Icon name='heart'/>
						</Button>
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
					<EEElement name="อู้ลง" des="แดกง่ายขี้คล้อง" img="imgs/printColorTest.jpg" />
					<EEElement name="อู้ลง" des="แดกง่ายขี้คล้อง" img="imgs/printColorTest.jpg" />
					<EEElement name="อู้ลง" des="แดกง่ายขี้คล้อง" img="imgs/printColorTest.jpg" />
					<EEElement name="อู้ลง" des="แดกง่ายขี้คล้อง" img="imgs/printColorTest.jpg" />
					<EEElement name="อู้ลง" des="แดกง่ายขี้คล้อง" img="imgs/printColorTest.jpg" />
					<EEElement name="อู้ลง" des="แดกง่ายขี้คล้อง" img="imgs/printColorTest.jpg" />
					<EEElement name="อู้ลง" des="แดกง่ายขี้คล้อง" img="imgs/printColorTest.jpg" />
					<EEElement name="อู้ลง" des="แดกง่ายขี้คล้อง" img="imgs/printColorTest.jpg" />
					<EEElement name="อู้ลง" des="แดกง่ายขี้คล้อง" img="imgs/printColorTest.jpg" />
					<EEElement name="อู้ลง" des="แดกง่ายขี้คล้อง" img="imgs/printColorTest.jpg" />
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

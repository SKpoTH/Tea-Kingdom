import React, { Component } from 'react';
import axios from 'axios'
import 'semantic-ui-css/semantic.css';
import {Message, Grid, Segment, Button, Icon, Header, Modal, Form, TextArea, Label} from 'semantic-ui-react';
import TemplateTKD from "../template/TemplateTKD";
import styled from 'styled-components'

const Comment = styled.div`
	margin-top: 25px;
	background: 'white';
`
const HeaderSize = styled.div`
	font-size: 18px;
`

const options = [
	{ key: 't', text: 'Tea', value: 'tea' },
	{ key: 'e', text: 'Equipment', value: 'equipment' }
  ]

export default class Seller extends Component {
	constructor(props){
		super(props);
		this.state = { 
			message:
				{ massageHidden: true, content: '', status: "" },
            product: []
        }
		this.getData();
    }
    getData = () => {
		axios.get('/api/seller/load', { headers: { Authorization: localStorage.getItem("token") } })
			.then((res) => {
				this.setState({
                    product: res.data
                });
                
			})
			.catch((error) => {    
                this.setState({
                    cantLoad: true,
                    message:
                    {
                        massageHidden: false,
                        // content: "Error : " + error.response.status + " => " + error.response.data.split("<pre>")[1].split("</pre>")[0],
                        status: "negative"
                    }
			}
			);
		});
	};

	render() {
        let count = 1;
		return (
			<TemplateTKD>
                <Message content={this.state.message.content} 
                         hidden={this.state.message.massageHidden} 
                         className={this.state.message.status}/>
				<Header as='h1'>
                    <Header.Content>
                        Seller Product <a href='/under' style={{fontSize:'50%'}}>(edit)</a>
                    </Header.Content>
                </Header>
                <Grid.Column width='6'>
                    <Segment.Group>
                        <Segment inverted textAlign='center' style={{background:'#556B2F'}}>
                            <b style={{fontSize:'20px'}}>Product Status</b>
                        </Segment>
                        {this.state.product.map( item => 
                            <Segment basic>
                                <b>{count++}. {item.name} </b> [<b style={{color:'orange'}}>{item.pending ? 'Approved' : 'Pending'}</b>]
                                <Modal trigger={<Button floated='right' 
                                                style={{padding:'0px 5px 0px',background:'white',textDecorationLine:'underline'}}>
                                                    Edit
                                                </Button>} 
                                                closeIcon>
                                    <Modal.Content>
                                    <Form>
                                        <Form.Field>
                                            <HeaderSize>
                                            <Form.Input label='Product Name' placeholder={item.name} onChange={(e,data)=>{ this.state.name = data.value }} />
                                            </HeaderSize>
                                        </Form.Field>
                                        <Form.Group unstackable widths={2}>
                                            <Form.Input label='Company Name' placeholder={item.company} onChange={(e,data)=>{ this.state.company = data.value }} />
                                            <Form.Input label='Brand' placeholder={item.brand} onChange={(e,data)=>{ this.state.brand = data.value }} />
                                        </Form.Group>

                                        <Grid>
                                            <Grid.Column width={8}>
                                            <Form.Group unstackable widths={2}>
                                                <Form.Input label='Price (Baht)' placeholder={item.price} onChange={(e,data)=>{ this.state.price = data.value }} />
                                                <Form.Input label='Discount Price (Baht)' placeholder={item.discountPrice} onChange={(e,data)=>{ this.state.discountPrice = data.value }} />
                                            </Form.Group>
                                            </Grid.Column>
                                            <Grid.Column width={8}>
                                                <Comment>
                                                <Label style={{ background: 'white'}}>The discount Price will use when you active Discount Period</Label>
                                                </Comment>
                                            </Grid.Column>
                                        </Grid>

                                        <Form.Group unstackable widths={2}>
                                            <Form.Input label='Stock' placeholder={item.amount} onChange={(e,data)=>{ this.state.amount = data.value }} />
                                        </Form.Group>

                                        {/* Properties Detail Section */}
                                        <Header as='h3'>Proporties Detail</Header>

                                        <Form.Group unstackable widths={2}>
                                            <Form.Select fluid label='Type' options={options} placeholder={item.type} onChange={(e,data)=>{ this.state.type = data.value }} />
                                            <Form.Input label='Weight' placeholder={item.weight} onChange={(e,data)=>{ this.state.weight = data.value }} />
                                        </Form.Group>

                                        <Form.Group unstackable widths={2}>
                                            <Form.Input label='Process' placeholder={item.process} onChange={(e,data)=>{ this.state.process = data.value }} />
                                            <Form.Input label='Region' placeholder={item.region} onChange={(e,data)=>{ this.state.region = data.value }} />
                                        </Form.Group>
                                        
                                        <Form>
                                            <Form.Field>
                                                <label>Description</label>
                                                <TextArea autoHeight placeholder={item.description} onChange={(e,data)=>{this.state.description = data.value }}/>
                                            </Form.Field>
                                        </Form>
                                    </Form>
                                    </Modal.Content>
                                    <Modal.Actions>
                                    <Button color='red' onClick={() => window.location='/under'}>
                                        <Icon name='remove' /> Cancel Product
                                    </Button>
                                    <Button type='submit' color='green' onClick={() => window.location='/under'}>
                                        <Icon name='checkmark' /> Update Data
                                    </Button>
                                    </Modal.Actions>
                                </Modal> 
                            </Segment>
                        )}
                    </Segment.Group>
                </Grid.Column>
			</TemplateTKD>   
		);
	}
}
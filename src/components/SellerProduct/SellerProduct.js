import React, { Component } from 'react';
import 'semantic-ui-css/semantic.css';
import { Grid, Segment, Header, Modal, Form, TextArea, Button, Label } from 'semantic-ui-react';
import styled from 'styled-components'
import { postData } from "../API/post"

const url_post = '/api/seller/product/edit'

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

class MySellerProduct extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
			company: '',
			brand: '',
			process: '',
			region: '',
			amount: '',
			type: '',
			price: '',
			discountPrice: '',
			weight: '',
			description: ''
        }
        // this.handleChange = this.handleChange.bind();
    }
    handleSet = (item) => {
        this.setState({
            name: item.name,
			company: item.company,
			brand: item.brand,
			process: item.process,
			region: item.region,
			amount: item.amount,
			type: item.type,
			price: item.price,
			discountPrice: item.discountPrice,
			weight: item.weight,
			description: item.description
        })
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    async onSubmit(item) {
        let update = []
        update.push({
            name: item.name,
			company: item.company,
			brand: item.brand,
			process: item.process,
			region: item.region,
			amount: item.amount,
			type: item.type,
			price: item.price,
			discountPrice: item.discountPrice,
			weight: item.weight,
			description: item.description
        })
        console.log("THIS IS DATA UPDATE >> ",update)
        const returnPost = await postData(url_post,update)
        console.log("RETURN POST : ",returnPost)
    }

    render() {
        let count = 1;
        return (
            <React.Fragment>
                <Segment basic>
                    <b>{count++}. {this.props.name} </b> {this.props.pending ? 
                                                <b style={{color:'green',float:'left',marginRight:'10px'}}>Approved</b> 
                                                : <b style={{color:'orange',float:'left',marginRight:'21px'}}>Pending</b>}
                    <Modal trigger={<Button floated='right' onClick={() => this.handleSet(this.props.item)}
                                style={{padding:'0px 5px 0px',background:'white',textDecorationLine:'underline'}}>
                                    Edit
                                </Button>} 
                                closeIcon>
                    <Modal.Content>
                    <Form>
                        <Form.Field>
                            <HeaderSize>
                                <Form.Input label='Product Name' value={this.state.name} name='name' onChange={this.handleChange} />
                            </HeaderSize>
                        </Form.Field>
                        <Form.Group unstackable widths={2}>
                            <Form.Input label='Company Name' value={this.state.company} name='company' onChange={this.handleChange} />
                            <Form.Input label='Brand' value={this.state.brand} name='brand' onChange={this.handleChange} />
                        </Form.Group>

                        <Grid>
                            <Grid.Column width={8}>
                            <Form.Group unstackable widths={2}>
                                <Form.Input label='Price (Baht)' value={this.state.price} name='price' onChange={this.handleChange} />
                                <Form.Input label='Discount Price (Baht)' value={this.state.discountPrice} name='discountPrice' onChange={this.handleChange} />
                            </Form.Group>
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <Comment>
                                <Label style={{ background: 'white'}}>The discount Price will use when you active Discount Period</Label>
                                </Comment>
                            </Grid.Column>
                        </Grid>

                        <Form.Group unstackable widths={2}>
                            <Form.Input label='Stock' value={this.state.amount} name='amount' onChange={this.handleChange} />
                        </Form.Group>

                        {/* Properties Detail Section */}
                        <Header as='h3'>Proporties Detail</Header>

                        <Form.Group unstackable widths={2}>
                            <Form.Select fluid label='Type' options={options} value={this.state.type} name='type' onChange={this.handleChange} />
                            <Form.Input label='Weight' value={this.state.weight} name='weight' onChange={this.handleChange} />
                        </Form.Group>

                        <Form.Group unstackable widths={2}>
                            <Form.Input label='Process' value={this.state.process} name='process' onChange={this.handleChange} />
                            <Form.Input label='Region' value={this.state.region} name='region' onChange={this.handleChange} />
                        </Form.Group>
                        
                        <Form>
                            <Form.Field>
                                <label>Description</label>
                                <TextArea autoHeight value={this.state.description} name='description' onChange={this.handleChange} />
                            </Form.Field>
                        </Form>
                    </Form>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button type='submit' color='green' onClick={event => this.onSubmit(this.state)}>Update Data</Button> 
                    </Modal.Actions>
                    </Modal> 
                </Segment>
            </React.Fragment>
        )
    }
}

export default class SellerProduct extends Component {
    render() {
        return (
            <React.Fragment>
                <Header as='h1'>
                        <Header.Content>
                            Seller Product
                        </Header.Content>
                </Header>
                <Grid.Column width='6'>
                    <Segment.Group>
                        <Segment inverted textAlign='center' style={{background:'#556B2F'}}>
                            <b style={{fontSize:'20px'}}>Product Status</b>
                        </Segment>
                        {console.log("DATARENDER > ",this.props.DataRender)}
                        {this.props.DataRender.product.data.map( item => 
                            <MySellerProduct name = {item.name}
                                             pending = {item.pending}
                                             item = {item}
                            />   
                        )}
                    </Segment.Group>
                </Grid.Column>
            </React.Fragment>
        )
    }
}
import React, { Component } from 'react';
import 'semantic-ui-css/semantic.css';
import { Message } from 'semantic-ui-react';
import TemplateTKD from "../template/TemplateTKD";
import SellerProduct from "./SellerProduct";
import { getData } from "../API/get";

const url_get = '/api/product/seller/load/all'

export default class Seller extends Component {
	constructor(props){
		super(props);
		this.state = { 
			message:
				{ massageHidden: true, content: '', status: "" },
            product: [],
            load : true
        }
        this.handleGET();
    }
    async handleGET(){
        const tmp = await getData(url_get)
        this.setState({
            product : tmp,
            load : false
        })
        console.log("product data >> ",this.state.product.data)
    }

	render() {
        if(this.state.load){
            return null
        } else {
            return (
                <TemplateTKD>
                    <Message content={this.state.message.content} 
                                hidden={this.state.message.massageHidden} 
                                className={this.state.message.status}/>
                    <SellerProduct DataRender={this.state}/>
                </TemplateTKD>   
            );
        }
    }
}
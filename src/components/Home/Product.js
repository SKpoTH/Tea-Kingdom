import React, {Component} from 'react'
import axios from 'axios'
import {Image} from "semantic-ui-react";
import "semantic-ui-css/semantic.css";
import styled from 'styled-components'

const src= 'https://tea-village.com/880-thickbox_default/ruan-zhi-oolong-no-17.jpg'

const MyText = styled.div`
    font-size: 14px;
    font-weight: 400;
    margin: 50px;    

`

export default class Product extends Component{
    constructor(props) {
        super(props);        
        this.state = {
            visible: false,
            userData :
              { name :undefined, favouriteAmout:undefined, cartAmout:undefined },
            describe: 'ddd',
            productName:'ddd'
        }

        this.getData()
    }
    getData = () => {
        if(localStorage.getItem("token")) {
            axios.get('http://localhost:5000/authen/load',{ headers: { Authorization: localStorage.getItem("token") } })
            .then((res) => {
                this.setState({describe: 'Tea'});
                this.setState({productName: 'Tea'});
              
            })
            .catch((error) => {
              console.log(error.response.data);
            });
          }
    };

    handleButtonClick = () => this.setState({ visible: !this.state.visible });
    handleSidebarHide = () => this.setState({ visible: false });

    handleItemClick = (e, { page }) => (window.location = page);


    render() {
        const { activeItem } = this.state;
        const { visible } = this.state;

        return(
            <div>
                <Image 
                    src={src}
                    size='small'
                    href='http://localhost:3000/product'
                />
                <Image 
                    src={src}
                    size='small'
                    href='http://localhost:3000/product'
                />
                <Image 
                    src={src}
                    size='small'
                    href='http://localhost:3000/product'
                />
                <Image 
                    src={src}
                    size='small'
                    href='http://localhost:3000/product'
                />
            

            
            
            
            
            </div>

            
        );
        
    }

}



import React, { Component } from 'react';
import "semantic-ui-css/semantic.css";
import { Image, Container } from 'semantic-ui-react'
import pic1 from '../pic/tea1.jpg';
import pic2 from '../pic/tea2.jpg';
import pic3 from '../pic/tea3.jpg';

export default class Content1 extends Component {
    render() {
        return (
            <center>
                <Container fluid>
                    <Image.Group size='medium'>
                        <Image src={pic1} />
                        <Image src={pic2} />
                        <Image src={pic3} />
                    </Image.Group>
                </Container>
            </center>
        );
    }
}
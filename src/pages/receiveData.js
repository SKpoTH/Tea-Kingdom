import React, { Component } from 'react';
import axios from 'axios';

export default class receiveData extends Component
{    
    constructor(props) {
        super(props);
        this.state = {res : ""};
        
        this.send = this.send.bind(this);
    }
    
    send() {
        axios.post('http://localhost:5000/authen/signup', {
                firstname : 'Siwakun',
                lastname : 'Kunsuk',
                email : 'popolice@gmail.com',
                password : '12345',
                address : '154/29',
                phone : 'popopopopopopopo'
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        this.send();
        return (
            <React.Fragment>
                <div></div>
            </React.Fragment>
        );
    }
}
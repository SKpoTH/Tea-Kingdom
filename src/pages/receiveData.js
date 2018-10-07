import React, { Component } from 'react';
import axios from 'axios';
import { Button } from 'semantic-ui-react';

export default class receiveData extends Component
{    
    constructor(props) {
        super(props);
        this.state = {res: "aaaaa", visible: false };
        this.send = this.send.bind(this);
        this.handleItemClick = this.handleItemClick.bind(this);
        // This binding is necessary to make `this` work in the callback
    }
    send = () => {
        var self = this;
        var s;
        axios.post('http://localhost:5000/authen/signup', {
                firstname : 'Siwakun',
                lastname : 'Kunsuk',
                email : 'popolice@gmail.com',
                password : '12345',
                address : '154/29',
                phone : 'popopopopopopopo'
            })
            .then(function (response) {
                self.setState({ res: response.data.status});
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    handleItemClick = (e, { page, childern }) => {
        page = "wwwww";
        this.setState({ res: "newone"});
    }

    render() {
        return (
            <React.Fragment>
                {<div>2222222222</div>}
                <Button onClick={this.handleItemClick} page="ss">{this.state.res}</Button>
                <div onClick={this.send} kurr="ss">Hi{this.state.res}</div>
            </React.Fragment>
        );
    }
}
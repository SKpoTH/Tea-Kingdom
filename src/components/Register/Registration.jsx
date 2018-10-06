import React, { Component } from 'react';
import axios from 'axios'

import 'semantic-ui-css/semantic.css';
import {Form , Button, Container} from 'semantic-ui-react';

export default class Registration extends Component {
    constructor(props){
        super(props);
    
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeFirstname = this.onChangeFirstname.bind(this);
        this.onChangeLastname = this.onChangeLastname.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
          firstname : '',
          lastname : '',
          email : '',
          password : '',
          address : '',
          phone : ''
        }
    }
    
    onChangeEmail(event) {
        this.setState({
          email : event.target.value
        })
    }
      
    onChangePassword(event) {
        this.setState({
          password : event.target.value
        })
    }
    
    onChangeFirstname(event) {
        this.setState({
          firstname : event.target.value
        })
    }

    onChangeLastname(event) {
        this.setState({
          lastname : event.target.value
        })
    }
    
    onChangeAddress(event) {
        this.setState({
          address : event.target.value
        })
    }
      
    onChangePhone(event) {
        this.setState({
          phone : event.target.value
        })
    }

    onSubmit(event) {
        event.preventDefault();
    
        const user = {
            firstname : this.state.firstname,
            lastname : this.state.lastname,
            email : this.state.email,
            password : this.state.password,
            address : this.state.address,
            phone : this.state.phone
        }
        
        axios.post('http://localhost:5000/authen/signup', user)
            .then(res => console.log(res.data))
    
        this.setState({
            firstname : '',
            lastname : '',
            email : '',
            password : '',
            address : '',
            phone : ''
        })
        
        window.location = '/';

        //this.props.history.push('/login');
      }
    
        render() {
            return (
                <Container>
                <h1>Register</h1>
                <Form onSubmit={ this.onSubmit }>
                    <Form.Field>
                        <label>Email</label>
                        <input type="email" placeholder='your@email.com' 
                            onChange={ this.onChangeEmail }
                            value={ this.state.email }
                        />
                    </Form.Field>

                    <Form.Group unstackable widths={2}>
                        <Form.Field>
                            <label>Password</label>
                            <input type="password" placeholder='password' 
                                onChange={ this.onChangePassword }
                                value={ this.state.password }
                            />
                        </Form.Field>

                        <Form.Field>
                            <label>Retype Password</label>
                            <input type="password" placeholder='re-password' />
                        </Form.Field>
                        
                    </Form.Group>
                    
                    <Form.Group unstackable widths={2}>
                        <Form.Input label='firstname' placeholder='First name' 
                                    onChange={ this.onChangeFirstname }
                                    value={ this.state.firstname }
                        />
                        <Form.Input label='lastname' placeholder='Last name' 
                                    onChange={ this.onChangeLastname }
                                    value={ this.state.lastname }
                        />
                    </Form.Group>

                    <Form.Group widths={2}>
                        <Form.Input label='address' placeholder='Address' 
                                    onChange={ this.onChangeAddress }
                                    value={ this.state.address }
                        />
                        <Form.Input label='phone' placeholder='Phone' 
                                    onChange={ this.onChangePhone }
                                    value={ this.state.phone }
                        />
                    </Form.Group>
                    
                    <Form.Checkbox label='I agree to the Terms and Conditions' />
                    <Button type='submit'>Submit</Button>
                </Form>
                </Container>   
            );
        }
}
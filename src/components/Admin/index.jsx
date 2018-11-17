import React, { Component } from 'react';
import TemplateTKD from '../template/TemplateTKD';
import 'semantic-ui-css/semantic.css';
import { Table, Button, Checkbox, Dropdown, Image, Message, Divider, Dimmer, Loader } from 'semantic-ui-react'
import axios from 'axios'
import "./style.css";

export default class Admin extends Component {
  constructor(props) {
		super(props);
		this.state = {
      show : "hidDs",
      userAdjusting : '',
      all : [],
      message : 
        { massageHidden : true, content :'', status: ""},
      loading : "active"
    }
		axios.defaults.headers.common['Authorization'] = localStorage.getItem("token"); 
    
  }
  componentDidMount() {
    this.getAll();
    console.log("load success");
  }
  getAll = () => {
    axios.get('/api/userData/all')
    .then((res) => {
      if(res.data.status === "you don't have permission")
        console.log(res.data.status);
      else {
        for(let i in res.data.data) {
          res.data.data[i].show = 'disabled';
        }
        // console.log(res.data.data);
        this.setState({all : res.data.data, loading : ""});
      }   
    })
    .catch((error) => {
      console.log(error);
      this.setState({loading : ""});
    });
  }
  updateItem(index, itemAttributes) {
    this.setState({
      all: [
          ...this.state.all.slice(0,index),
          Object.assign({}, this.state.all[index], itemAttributes),
          ...this.state.all.slice(index+1)
      ]
    });
  }
  updateKK = () => {
    let update=[];
    for(let i in this.state.all) {
      if(this.state.all[i].show === '') {
        update.push({id : this.state.all[i]._id, type: this.state.all[i].type})
      }
    }
    console.log(update)
    if(update === [])
      return
    else {
      console.log("send")
      axios.post('/api/userData/update', update)
      .then((res) => {
          console.log(res.data.status);
          this.setState( {message : 
            { massageHidden : false, 
              content : res.data.status, 
              status: "success"
            }
          });
      })
      .catch((error) => {
        console.log(error);
      });
      this.getAll();
      window.scrollTo(0, 0);
    }
  }
  switch
  render() {
    const options = [
      { key: 'Consumer', text: 'Consumer', value: 'Consumer' },
      { key: 'Seller', text: 'Seller', value: 'Seller' },
      { key: 'Admin', text: 'Admin', value: 'Admin' },
    ]
    return (
      <TemplateTKD>
        <Dimmer className={this.state.loading} inverted>
          <Loader size='large'>Loading</Loader>
        </Dimmer>
        <Message content={this.state.message.content} hidden={this.state.message.massageHidden} className={this.state.message.status}/>
        <h1>Promote Users</h1>
        <Table celled striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Edit</Table.HeaderCell>
              <Table.HeaderCell colSpan='2'>Email</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {this.state.all.map((user,i) => 
            <Table.Row>
              {/* {console.log(this.state.all[i])} */}
              {/* {this.updateItem(i, { 'show' : 'disabled' })} */}
              <Table.Cell collapsing>
                <Checkbox slider checked={this.state.all[i].show === '' ? true : false } onChange={(event, data) => data.checked ? this.updateItem(i,{ 'show' : ''}) : this.updateItem(i,{ 'show' : 'disabled'})}/>
              </Table.Cell>
              <Table.Cell>
                <Image src={user.profileImage} size='mini' verticalAlign='middle' /> <span>{user.email}</span>
              </Table.Cell>
              <Table.Cell collapsing textAlign='right'>
                <Dropdown className={'link item '+this.state.all[i].show} value={this.state.all[i].type} options={options} onChange={(event,data) => this.updateItem(i,{ 'type' : data.value})}/>
              </Table.Cell>
            </Table.Row>
            )}
          </Table.Body>
        </Table>
        <Button size='small' floated='right' primary onClick={this.updateKK}>Save</Button>
        <Divider hidden/>
        <Divider hidden/>        
      </TemplateTKD>
    );
  }
}

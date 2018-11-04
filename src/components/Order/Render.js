import React, { Component } from 'react';
import 'semantic-ui-css/semantic.css';
import { Image, Button, Table, Icon, Container,Header,Form,Radio, Item } from 'semantic-ui-react'

class myDraw extends Component {
    render() {
        return (
            <Table.Row verticalAlign='middle' >
                <Table.Cell style={{background:'white'}}>
                  <Image src={this.props.img} style={{display:'inline',width:'10%',hight:'10%',margin:'0px 10px 0px 10px'}}/>
                  <a href="/ProductDetail:id" style={{cursor:'pointer',fontSize:'125%' }}>
                    {this.props.name}
                  </a>
                </Table.Cell>
                <Table.Cell>
                  <Button.Group style={{margin:'0% 0% 0% 12%'}}>
                    <Button ><Icon name='minus' size='small'></Icon></Button>
                    <Button basic><b>{this.props.amount}</b></Button>
                    <Button ><Icon name='plus' size='small'></Icon></Button>
                  </Button.Group>
                </Table.Cell>
                <Table.Cell><b style={{margin:'0% 0% 0% 35%'}}>{this.state.oneprice}</b></Table.Cell>
                <Table.Cell>
                  <Button style={{background:'white',margin:'5% 15% 5% 25%'}} compact>
                    <Icon color='green' name='upload' size='big' />
                  </Button>
                </Table.Cell>
                <Table.Cell>
                  <Button style={{background:'white',margin:'5% 15% 5% 25%'}} compact>
                    <Icon color='red' name='remove' size='big' />
                  </Button>
                </Table.Cell>
              </Table.Row>
        )
    }
}

export default class myrender extends Component {
    render() {
        return (
            <React.Fragment>
                <Table.Body>
                    {this.props.Value.map(item => (
                        <myDraw name   ={item.name}
                                img    = {item.Image}
                                price  = {item.price}
                                id     = {item.id}
                                amount = {item.amount} />
                    ))}
                </Table.Body>
            </React.Fragment>
        )
    }
} 
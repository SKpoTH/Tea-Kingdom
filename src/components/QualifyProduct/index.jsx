import React, { Component } from 'react';
import TemplateTKD from '../template/TemplateTKD';
import 'semantic-ui-css/semantic.css';
import { Table, Button, Checkbox, Dimmer, Image, Message, Loader } from 'semantic-ui-react'
import axios from 'axios'
import "./style.css";
const itemPperPage = 6;

export default class QualifyProduct extends Component {
  constructor(props) {
		super(props);
		this.state = {
      show : "hidDs",
      userAdjusting : '',
      allcard : [],
      page : 1,
      maxPage : 1,
      message : 
        { massageHidden : true, content :'', status: ""},
      loading : "active"
    }
    axios.defaults.headers.common['Authorization'] = localStorage.getItem("token");
    console.log("unload");
  }
  componentDidMount() {
    this.getData();
    console.log("load success");
  }
  getData = async () => {
    await axios.post('/api/product/loadAll')
    .then((res) => {
      this.setState( {maxPage : Math.ceil(res.data.length/itemPperPage), allcard : res.data, loading : "" });
    })
    .catch((error) => {
      console.log(error)
      this.setState( {message : 
        { massageHidden : false, 
          content :"Error : "+error.response.status+" => "+error.response.data.split("<pre>")[1].split("</pre>")[0], 
          status: "negative",
          loading : "" }}
        );
    });
  };
  updateItem(index, itemAttributes) {
    this.setState({
      allcard : [
          ...this.state.allcard.slice(0,index),
          Object.assign({}, this.state.allcard[index], itemAttributes),
          ...this.state.allcard.slice(index+1)
      ]
    });
  }
  updateKK = async (index, field ,datt) => {
      await axios.post('/api/product/update', { id : this.state.allcard[index]._id , field : field, data : datt })
      .then((res) => {
        console.log(res.data.status)
      })
      .catch((error) => {
        console.log(error)
        this.setState( {message : 
          { massageHidden : false, 
            content :"Error : "+error.response.status+" => "+error.response.data.split("<pre>")[1].split("</pre>")[0], 
            status: "negative",
            loading : "" }}
          );
      });
  }

  render() {
    return (
      <TemplateTKD>
        <Dimmer className={this.state.loading} inverted>
          <Loader size='large'>Loading</Loader>
        </Dimmer>
        {console.log(this.state.allcard)}
        <Message content={this.state.message.content} hidden={this.state.message.massageHidden} className={this.state.message.status}/>
        <h1>Product Qualify</h1>
        <Table celled striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Enable</Table.HeaderCell>
              <Table.HeaderCell>Product</Table.HeaderCell>
              <Table.HeaderCell>Discount</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {this.state.allcard.slice((this.state.page-1)*itemPperPage,this.state.page*itemPperPage).map((item,i) => 
            <Table.Row>
              <Table.Cell collapsing>
                <Checkbox slider checked={item.pending} onChange={(event, data) => {
                  this.updateKK((this.state.page-1)*itemPperPage+i, "pending" ,data.checked);
                  this.updateItem((this.state.page-1)*itemPperPage+i, { pending : data.checked });
                  }}/>
              </Table.Cell>
              <Table.Cell className={item.pending ? null : "disabled"}>
                <Image src={item.productImage} size='mini' verticalAlign='middle' /> <span>{item.name}</span>
              </Table.Cell>
              <Table.Cell collapsing textAlign='right'>
                <Checkbox slider className={item.pending ? null : "disabled"} checked={item.discount} onChange={(event, data) => {
                  if(item.pending) {
                    this.updateKK((this.state.page-1)*itemPperPage+i, "discount" ,data.checked);
                    this.updateItem((this.state.page-1)*itemPperPage+i, { discount : data.checked });
                  }
                  }}/>
              </Table.Cell>
            </Table.Row>
            )}
          </Table.Body>
        </Table>
        <center>
          <Button.Group compact>
            {Array.from({length: this.state.maxPage}, (v, k) => k+1).map(item => (
              <Button content={item} compact className={item === this.state.page ? "disabled" : ""} onClick={() => {this.setState({page : item}); window.scrollTo(0, 0);}} />
            ))}
          </Button.Group>
        </center>        
      </TemplateTKD>
    );
  }
}

import React, { Component } from 'react';
import Connection from '../pomLib/connection';
import 'semantic-ui-css/semantic.css';
import "./style.css";
import { Loading } from '../template/TKDcomponent';
import {
  Table,
  Button,
  Checkbox,
  Dropdown,
  Image,
} from 'semantic-ui-react';

const request = Connection.createClass();

export default class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      tableData: []
    }
  }

  componentDidMount() {
    this.loadData();
  }

  loadData = () => {
    request.get('/api/admin/userData/load/all', true)
    .then((res) => {
      if(res.status == "You don't have permission")
        window.location = '/usecase';
      for(let i in res.data) {
        res.data[i].show = 'disabled';
      }
      this.setState({ loading: false, tableData: res.data });      
    })
    .catch(err => {
      this.props.setMessage({
        content: err,
        hidden: false,
        className: 'negative'
      });
      this.setState({ loading: false });
      window.scrollTo({ top: 0 ,behavior: 'smooth' });
    });
  }

  updatetableData = (index, itemAttributes) => {
    this.setState({
      tableData : [
        ...this.state.tableData.slice(0, index),
        Object.assign({}, this.state.tableData[index], itemAttributes),
        ...this.state.tableData.slice(index + 1)
      ]
    });
  }
  
  updateSend = async (event) => {
    event.preventDefault()
    this.setState({ loading: true });
    let update = [];
    for(let i in this.state.tableData) {
      if (this.state.tableData[i].show == '') {
        update.push({ id: this.state.tableData[i]._id, type: this.state.tableData[i].type })
      }
    }
    if(update.length == 0) {
      this.props.setMessage({
        content: "Don't have selection item to update",
        hidden: false,
        className: 'warning'
      });
      this.setState({ loading: false });
    } else {
      await request.post('/api/admin/userData/update', update, true)
      .then((res) => {
        this.props.setMessage({
          content: res.status,
          hidden: false,
          className: 'success'
        });
      })
      .catch(err => {
        this.props.setMessage({
          content: err,
          hidden: false,
          className: 'negative'
        });
        this.setState({ loading: false });
      });
      this.loadData();
    }
    window.scrollTo({ top: 0 ,behavior: 'smooth' });
  }

  sliderHandle = (event, { checked ,i }) => {
    event.preventDefault();
    let show = 'disabled';
    if(checked)
      show = '';
    this.updatetableData(i, { show: show });
  }

  dropdownHandle = (event , { value, i }) => {
    event.preventDefault();
    this.updatetableData(i, { type: value });
  }

  render() {
    const options = [
      { key: 'Consumer', text: 'Consumer', value: 'Consumer' },
      { key: 'Seller', text: 'Seller', value: 'Seller' },
      { key: 'Admin', text: 'Admin', value: 'Admin' },
    ]
    const head = (
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Edit</Table.HeaderCell>
          <Table.HeaderCell colSpan='2'>Email</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
    );
    const saveButtonRight = (
      <p align="right">
        <Button size='small' primary onClick={this.updateSend}>Save</Button>
      </p>
    );
    const { loading, tableData } = this.state;
    const tableRow = tableData.map((user, i) =>
      <Table.Row>
        <Table.Cell collapsing>
          <Checkbox slider checked={user.show === '' ? true : false} i={i} onChange={this.sliderHandle} />
        </Table.Cell>
        <Table.Cell>
          <Image src={user.profileImage} size='mini' verticalAlign='middle' /> <span>{user.email}</span>
        </Table.Cell>
        <Table.Cell collapsing textAlign='right'>
          <Dropdown className={'link item ' + user.show} value={user.type} options={options} i={i} onChange={this.dropdownHandle} />
        </Table.Cell>
      </Table.Row>
    );
    return (
      <React.Fragment>
        <Loading loading={loading}/>
        <Table celled striped unstackable>
          {head}
          <Table.Body>
            {tableRow}
          </Table.Body>
        </Table>
        {saveButtonRight}
      </React.Fragment>
    );
  }
}

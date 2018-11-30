import React, { Component } from 'react';
import Connection from '../pomLib/connection';
import { Loading, Padding } from '../template/TKDcomponent';
import 'semantic-ui-css/semantic.css';
import { Table, Button, Checkbox, Image, Icon, Responsive } from 'semantic-ui-react'
import "./style.css";

const request = Connection.createClass();
const itemPperPage = 6;

export default class QualifyProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allcard: [],
      page: 1,
      maxPage: 1,
      loading: true
    }
  }
  componentDidMount() {
    this.loadData();
  }
  loadData = () => {
    request.get('/api/admin/product/load/all', true)
    .then((res) => {
      if(res.status == "You don't have permission")
        window.location = '/usecase';
      for(let i in res.data) {
        res.data[i].className = 'hidD';
      }
      this.setState({
        maxPage: Math.ceil(res.data.length / itemPperPage),
        allcard: res.data,
        loading: false 
      });
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
  };

  updateItem(index, itemAttributes) {
    this.setState({
      allcard: [
        ...this.state.allcard.slice(0, index),
        Object.assign({}, this.state.allcard[index], itemAttributes),
        ...this.state.allcard.slice(index + 1)
      ]
    });
  }

  sendUpdate = async (index, field, data) => {
    await request.post('/api/admin/product/update', { id: this.state.allcard[index]._id, field: field, data: data }, true)
    .catch(err => {
      this.updateItem(index, { className: "hidD" });
      this.props.setMessage({
        content: err,
        hidden: false,
        className: 'negative'
      });
      window.scrollTo({ top: 0 ,behavior: 'smooth' });
    });
  }

  changePage = (event, { content }) => { 
    event.preventDefault();
    this.setState({ page: content });
    window.scrollTo({ top: 0 ,behavior: 'smooth' });
  }

  handleSlide = async (event, {i, fieldUpdate, checked}) => {
    event.preventDefault()
    let index = this.getRealIndex(i);
    this.updateItem(index, { className: "loading" });
    await this.sendUpdate(index, fieldUpdate, checked);
    this.updateItem(index, { pending: checked, className: "positive" });
  }

  handleDiscount = async (event, {i, fieldUpdate, checked, onUsing}) => {
    event.preventDefault()
    if(onUsing) {
      let index = this.getRealIndex(i);
      this.updateItem(index, { className: "loading" });
      await this.sendUpdate(index, fieldUpdate, checked);
      this.updateItem(index, { discount: checked, className: "positive" });
    }
  }

  getRealIndex = (i) => {
    return (this.state.page - 1) * itemPperPage + i
  }

  render() {
    const { allcard, page, loading, maxPage } = this.state;
    const buttonPage = (
      <center>
        <Button.Group compact>
          {Array.from({ length: maxPage }, (v, k) => k + 1).map(item => (
            <Button content={item} compact className={item === page ? "disabled" : ""} onClick={this.changePage} />
          ))}
        </Button.Group>
      </center>
    );
    const head = (
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Enable</Table.HeaderCell>
          <Table.HeaderCell>Product</Table.HeaderCell>
          <Table.HeaderCell>Discount</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
    );
    const spritCard = allcard.slice((page - 1) * itemPperPage, page * itemPperPage);
    const tableRow = (
      spritCard.map((item, i) => {
        let show = item.pending ? null : "disabled";
        return(
          <Table.Row>
            <Table.Cell collapsing>
              <Checkbox slider checked={item.pending} i={i} fieldUpdate="pending" onChange={this.handleSlide} />
            </Table.Cell>
            <Table.Cell className={show}>
              <Image src={item.productImage} size='mini' verticalAlign='middle' />
              &nbsp;
              <span>{item.name}</span>
              <Button basic className={item.className} floated='right'>Updated</Button>
            </Table.Cell>
            <Table.Cell collapsing textAlign='right'>
              <Checkbox slider onUsing={item.pending} className={show} i={i} fieldUpdate="discount" checked={item.discount} onChange={this.handleDiscount} />
            </Table.Cell>
          </Table.Row>
        )
      })
    )
    const desktopTable = (
      <Table celled striped unstackable>
        {head}
        <Table.Body>
          {tableRow}
        </Table.Body>
      </Table>
    );
    const mobileTable = spritCard.map((item, i) => {
      let show = item.pending ? null : "disabled";
      return (
        <Table fixed unstackable>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell colSpan='4' >
                <Image src={item.productImage} size='mini' verticalAlign='middle' />
                &nbsp;
                {item.name}
                <Button icon basic className={item.className} floated='right'>
                  <Icon name='check' />
                </Button>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>Enable</Table.Cell>
              <Table.Cell><Checkbox slider checked={item.pending} i={i} fieldUpdate="pending" onChange={this.handleSlide} /></Table.Cell>
              <Table.Cell className={show}>Discount</Table.Cell>
              <Table.Cell><Checkbox slider onUsing={item.pending} className={show} i={i} fieldUpdate="discount" checked={item.discount} onChange={this.handleDiscount} /></Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      )
    });
    return (
      <React.Fragment>
        <Loading loading={loading}/>
        <Responsive {...Responsive.onlyMobile}>
          {mobileTable}
        </Responsive>
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          {desktopTable}
        </Responsive>
        <Padding length="1" />
        {buttonPage}
      </React.Fragment>
    );
  }
}

import React, { Component } from 'react';
import TemplateTKD from '../template/TemplateTKD';
import { Message } from '../template/TKDcomponent';
import Token from '../pomLib/token';
import Table from './table';

export default class QualifyProduct extends Component {
  constructor(props) {
    if(!Token.isLogin) {
      window.location = '/login'
    }
    super(props);
    this.state = {
      message: {
        content: '',
        hidden: true,
        className: ''
      }
    }
  }
  setMessage = (mess) => {
    this.setState({ message: mess });
  }
  render() {
    const { message } = this.state;
    return (
      <TemplateTKD>
        <Message data={message} padding="true" />
        <h1>Product Qualify</h1>
<<<<<<< HEAD
        <Table setMessage={this.setMessage} />
=======
        <Table celled striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Enable</Table.HeaderCell>
              <Table.HeaderCell>Product</Table.HeaderCell>
              <Table.HeaderCell>Discount</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {this.state.allcard.slice((this.state.page - 1) * itemPperPage, this.state.page * itemPperPage).map((item, i) =>
              <Table.Row>

                <Table.Cell collapsing>
                  <Checkbox slider checked={item.pending} onChange={(event, data) => {
                    this.updateKK((this.state.page - 1) * itemPperPage + i, "pending", data.checked);
                    this.updateItem((this.state.page - 1) * itemPperPage + i, { pending: data.checked });
                  }} />
                </Table.Cell>

                <Table.Cell className={item.pending ? null : "disabled"}>
                  <Image src={item.productImage} size='mini' verticalAlign='middle' /> <span>{item.name}</span>
                </Table.Cell>

                <Table.Cell collapsing textAlign='right'>
                  <Checkbox slider className={item.pending ? null : "disabled"} checked={item.discount} onChange={(event, data) => {
                    if (item.pending) {
                      this.updateKK((this.state.page - 1) * itemPperPage + i, "discount", data.checked);
                      this.updateItem((this.state.page - 1) * itemPperPage + i, { discount: data.checked });
                    }
                  }} />
                </Table.Cell>

              </Table.Row>
            )}
          </Table.Body>

        </Table>
        <center>
          <Button.Group compact>
            {Array.from({ length: this.state.maxPage }, (v, k) => k + 1).map(item => (
              <Button content={item} compact className={item === this.state.page ? "disabled" : ""} onClick={() => { this.setState({ page: item }); window.scrollTo(0, 0); }} />
            ))}
          </Button.Group>
        </center>
>>>>>>> cd3dd84b50eb7018ef957239ab0437eebc2d1f6a
      </TemplateTKD>
    );
  }
}

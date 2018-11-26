import React, { Component } from 'react';
import TemplateTKD from '../template/TemplateTKD';
import { Message, Padding } from '../template/TKDcomponent';
import ProdTable from './ProductTable';

export default class Admin extends Component {
  constructor(props) {
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
<<<<<<< HEAD
        <Message data={message} padding="true" />
        <h1>Ours products</h1>
        <Padding length="1" />
        <ProdTable setMessage={this.setMessage} />
        <Padding length="1" />
=======
        <Dimmer className={this.state.loading} inverted>
          <Loader size='large'>Loading</Loader>
        </Dimmer>

        <Message content={this.state.message.content} hidden={this.state.message.massageHidden} className={this.state.message.status} />
        {this.spritCard ? <ProductT all={this.spritCard} /> : null}
        <center>
          <Button.Group compact>
            {Array.from({ length: this.state.maxPage }, (v, k) => k + 1).map(item => (
              <Button content={item} compact className={item === this.state.page ? "disabled" : ""} onClick={() => { this.loadDataPage(item); window.scrollTo(0, 0); }} />
            ))}
          </Button.Group>
        </center>
>>>>>>> cd3dd84b50eb7018ef957239ab0437eebc2d1f6a
      </TemplateTKD>
    );
  }
}

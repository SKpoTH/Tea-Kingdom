import React, { Component } from "react";
import Connection from '../pomLib/connection';
import "semantic-ui-css/semantic.css";
import ElementTable from "./ProductElement";
import { Button } from "semantic-ui-react";
import { Loading } from '../template/TKDcomponent';

const request = Connection.createClass();
const itemPperPage = 6;

class ProdTable extends Component {
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
    this.getData();
  }

  getData = () => {
    request.get('/api/product/load/all', false)
    .then(res => {
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
    });
  };

  changePage = async (event, { content }) => { 
    event.preventDefault();
    await this.setState({ page: content });
  }

  componentDidUpdate() {
    window.scrollTo({ top: 0 ,behavior: 'smooth' });
  }

  render() {
    const { allcard, page, maxPage, loading } = this.state;
    const { setMessage } = this.props;
    const spritCard = allcard.slice((page - 1) * itemPperPage, page * itemPperPage);
    const buttonPage = (
      <center>
        <Button.Group compact>
          {Array.from({ length: maxPage }, (v, k) => k + 1).map(item => (
            <Button content={item} compact className={item === page ? "disabled" : ""} onClick={this.changePage} />
          ))}
        </Button.Group>
      </center>
    );
    return (
      <React.Fragment>
        <Loading loading={loading}/>
        <ElementTable productOnePage={spritCard} setMessage={setMessage}/>
        {buttonPage}
      </React.Fragment>
    );
  }
}

export default ProdTable;

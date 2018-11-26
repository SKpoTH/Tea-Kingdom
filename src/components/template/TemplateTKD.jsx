import React, { Component } from 'react';
import Connection from '../pomLib/connection';
import token from '../pomLib/token';
import FooterTKD from './FooterTKD';
import 'semantic-ui-css/semantic.css';
import * as menu from './menu.json';
import {
  Menu,
  Container,
  Responsive,
  Button,
  Divider,
  Image,
  Sidebar,
  Icon,
  Label,
  Segment,
  Loader,
} from 'semantic-ui-react';

const request = Connection.createClass();

export default class TemplateTKD extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      userData :
        { name :undefined,
          profileImage: undefined,
          type: "Loading",
          chart: 0
        },
    }
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    if(token.isLogin) {
      request.get('/api/authen/load', true)
      .then((res) => {
        if(res.status == "logged in") {
          this.setState({
            userData: {
              name: res.firstname,
              profileImage: res.profileImage,
              type: res.type,
              chart: res.chart
            }
          });
        }
      })
    } else {
      this.setState({
        userData: {
          type: "Normal",
        }
      });
    }
  }

  sendLogot = () => {
    token.destroy();
    window.location = '/';
  }

  handleButtonClick = () => {
    this.setState({ visible: !this.state.visible });
  }

  handleSidebarHide = () => {
    this.setState({ visible: false });
  }

  handleItemClick = (event, { page }) => {
    event.preventDefault()
    window.location = page;
  }

  render() {
    const icon = "imgs/mylogo2.png";
    const { activeItem } = this.state;
    const { visible } = this.state;
    const left = menu[this.state.userData.type].Left;
    const right = menu[this.state.userData.type].Right;
    const mobile = menu[this.state.userData.type].Mobile;
    return (
      <React.Fragment>
        {/* slider */}
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation="overlay"
            icon="labeled"
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={visible}
          >
            
            {mobile.map(item => 
              <React.Fragment>
                {item.show === "PERSON" ? <Menu.Item page={item.url} onClick={this.handleItemClick}><Image src={this.state.userData.profileImage} avatar /><br />{this.state.userData.name}</Menu.Item> : 
                  item.show === "Logout" ? <Menu.Item name={item.show} onClick={this.sendLogot} /> :
                  <Menu.Item
                    name={item.show}
                    active={activeItem === item.show}
                    onClick={this.handleItemClick}
                    page={item.url}
                  />
                }
              </React.Fragment>
            )}


          </Sidebar>
          <Sidebar.Pusher dimmed={visible}>
            {/* totalMenu */}
            {/* mobile */}
            <Responsive {...Responsive.onlyMobile}>
              <Menu secondary>
                <Menu.Item compact>
                  <Button
                    icon="bars"
                    compact
                    onClick={this.handleButtonClick}
                  />
                </Menu.Item>
                <Menu.Item>
                  <Image src={icon} className="small" alt="" />
                </Menu.Item>
              </Menu>
            </Responsive>
            {/* desktop */}
            <Responsive minWidth={Responsive.onlyTablet.minWidth}>
              <Container>
                <Menu secondary>
                  <Menu.Item>
                    <Image src={icon} className="small" alt="" />
                  </Menu.Item>
                  {left.map(item => 
                  <Menu.Item
                    name={item.show}
                    active={activeItem === item.show}
                    onClick={this.handleItemClick}
                    page={item.url}
                  />
                  )}
                  <Menu.Menu position="right">
                    {right.map(item => 
                      <React.Fragment>
                        {item.show === "Cart" ? <Menu.Item page={item.url} onClick={this.handleItemClick} ><Icon name='cart' />{this.state.userData.chart > 0 ? <Label circular size='tiny' color='teal' floating>{this.state.userData.chart}</Label> : null}</Menu.Item> : 
                          item.show === "PERSON" ? <Menu.Item page={item.url} onClick={this.handleItemClick}><Image src={this.state.userData.profileImage} avatar />{this.state.userData.name}</Menu.Item> : 
                            item.show === "Loading" ? <Menu.Item><Loader active/></Menu.Item> :
                              item.show === "Logout" ? <Menu.Item name={item.show} active={activeItem === item.show} onClick={this.sendLogot} /> :
                                <Menu.Item
                                  name={item.show}
                                  active={activeItem === item.show}
                                  onClick={this.handleItemClick}
                                  page={item.url}
                                />
                        }
                      </React.Fragment>
                    )}
                  </Menu.Menu>
                </Menu>
              </Container>
            </Responsive>
            
            {/* totalMenu */}
            {/* content */}
            {this.props.marginNon === 'true' ? 
              <React.Fragment>
                {this.props.children}
                <Container>
                  <Divider fitted />
                </Container> 
              </React.Fragment>
              : 
              <React.Fragment>
                <Divider fitted />
                <Container>
                  <Segment vertical>
                    {this.props.children}
                  </Segment>
                  <Divider hidden /> 
                </Container>
              </React.Fragment>
            }
            <FooterTKD />
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </React.Fragment>
    );
  }
}
import React, { Component } from "react";
import "semantic-ui-css/semantic.css";
import {
  Menu,
  Container,
  Responsive,
  Button,
  Divider,
  Image,
  Sidebar,
  Icon
} from "semantic-ui-react";
import FooterTKD from "./FooterTKD";
import axios from 'axios';

import * as normalLeft from './menu/normal/normalLeft.json';
import * as normalRight from './menu/normal/normalRight.json';
import * as normalMobile from './menu/normal/normalMobile.json';
import * as userLeft from './menu/user/userLeft.json';
import * as userRight from './menu/user/userRight.json';
import * as userMobile from './menu/user/userMobile.json';
import * as adminLeft from './menu/admin/adminLeft.json';
import * as adminRight from './menu/admin/adminRight.json';
import * as adminMobile from './menu/admin/adminMobile.json';
import * as sellerLeft from './menu/seller/sellerLeft.json';
import * as sellerRight from './menu/seller/sellerRight.json';
import * as sellerMobile from './menu/seller/sellerMobile.json';

const icon = "imgs/mylogo2.png";

export default class TemplateTKD extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      userData :
        { name :undefined, profileImage: undefined, type: undefined },
    }
    this.getData();
  }
  getData = () => {
    if(localStorage.getItem("token")) {
      // console.log(localStorage.getItem("token"));
      axios.get('/api/authen/load',{ headers: { Authorization: localStorage.getItem("token") } })
      .then((res) => {
        if(res.data.status === "logged in")
          this.setState({userData : {name :  res.data.firstname , profileImage: res.data.profileImage, type: res.data.type }});
      })
      .catch((error) => {
        console.log(error.response.data);
      });
    }
  };
  sendLogot = () => {
    if(localStorage.getItem("token")) {
      localStorage.clear();
    }
    window.location = '/';
  };

  handleButtonClick = () => this.setState({ visible: !this.state.visible });
  handleSidebarHide = () => this.setState({ visible: false });
  handleItemClick = (e, { page }) => (window.location = page);

  render() {
    const { activeItem } = this.state;
    const { visible } = this.state;
    let left, right, mobile;
    console.log(this.state.userData.type);
    switch(this.state.userData.type) {
      case "Consumer":
        left = userLeft;
        right = userRight;
        mobile = userMobile;
        break;
      case "Seller":
        left = sellerLeft;
        right = sellerRight;
        mobile = sellerMobile;
        break;
      case "Admin":
        left = adminLeft;
        right = adminRight;
        mobile = adminMobile;
        break;
      default:
        left = normalLeft;
        right = normalRight;
        mobile = normalMobile;
    }
    return (
      <div>
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
                        {item.show === "Cart" ? <Menu.Item page={item.url} onClick={this.handleItemClick} ><Icon name='cart' /></Menu.Item> : 
                          item.show === "PERSON" ? <Menu.Item page={item.url} onClick={this.handleItemClick}><Image src={this.state.userData.profileImage} avatar />{this.state.userData.name}</Menu.Item> : 
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
                <Divider hidden />
                <Container>
                  {this.props.children}
                  <Divider hidden />
                  <Divider fitted /> 
                </Container>
              </React.Fragment>
            }
            

            <FooterTKD />
            {/* content */}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}
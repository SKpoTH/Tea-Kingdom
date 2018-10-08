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
const icon = "imgs/mylogo2.png";

export default class TemplateTKD extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      login : false,
      userData :
        { name :undefined, favouriteAmout:undefined, cartAmout:undefined, user_id:undefined }
    }
    this.getData()
  }
  getData = () => {
    axios.get('http://localhost:5000/authen/logged_in')
				.then((res) => {
          if(res.data.status === "logged in")
          {
            this.setState({login : true});
            this.setState({userData : {name :  res.data.name, user_id : res.data.user_id}});
          } else {
            this.setState({login : false});
          }
				})
				.catch((error) => {
					console.log(error.response.data);
        });
  };
  sendLogot = () => {
    axios.get('http://localhost:5000/authen/logout')
				.then((res) => {
          if(res.data.status === "logout")
          {
            this.setState({ login : false});
            this.setState({ userData : { name :undefined, favouriteAmout:undefined, cartAmout:undefined, user_id:undefined }});
          }
				})
				.catch((error) => {
					console.log(error);
				});
  };

  handleButtonClick = () => this.setState({ visible: !this.state.visible });
  handleSidebarHide = () => this.setState({ visible: false });
  handleItemClick = (e, { page }) => (window.location = page);

  render() {
    const { activeItem } = this.state;

    const { visible } = this.state;

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
            {this.state.login ?
              <Menu.Item>
                <Icon name='user' />
                {this.state.userData.name}
              </Menu.Item>
            : null}
            <Menu.Item
              name="Home"
              active={activeItem === "Home"}
              onClick={this.handleItemClick}
              page="/"
            />
            <Menu.Item
              name="AboutUS"
              active={activeItem === "AboutUS"}
              onClick={this.handleItemClick}
              page="AboutUs"
            />
            <Menu.Item
              name="Product"
              active={activeItem === "Product"}
              onClick={this.handleItemClick}
              page="product"
            />
            {this.state.login ? 
              <Menu.Item name="Logout" onClick={this.sendLogot}/>
               : 
              <React.Fragment>
                <Menu.Item
                  name="Register"
                  active={activeItem === "Register"}
                  onClick={this.handleItemClick}
                  page="register"
                />
                <Menu.Item
                  name="Login"
                  active={activeItem === "Login"}
                  onClick={this.handleItemClick}
                  page="login"
                />
              </React.Fragment>
            }
            
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
                  <Menu.Item
                    name="Home"
                    active={activeItem === "Home"}
                    onClick={this.handleItemClick}
                    page="/"
                  />
                  <Menu.Item
                    name="AboutUS"
                    active={activeItem === "AboutUS"}
                    onClick={this.handleItemClick}
                    page="AboutUs"
                  />
                  <Menu.Item
                    name="Product"
                    active={activeItem === "Product"}
                    onClick={this.handleItemClick}
                    page="product"
                  />
                  {this.state.login ? 
                    <Menu.Menu position="right">
                      <Menu.Item>
                        <Icon name='user' />
                        {this.state.userData.name}
                      </Menu.Item>
                      <Menu.Item name="Logout"
                        active={activeItem === "Logout"}
                        onClick={this.sendLogot}
                      />
                    </Menu.Menu>
                    :
                    <Menu.Menu position="right">
                      <Menu.Item
                        name="Register"
                        active={activeItem === "Register"}
                        onClick={this.handleItemClick}
                        page="register"
                      />
                      <Menu.Item
                        name="Login"
                        active={activeItem === "Login"}
                        onClick={this.handleItemClick}
                        page="login"
                      />
                    </Menu.Menu>
                  }
                </Menu>
              </Container>
            </Responsive>
            {/* totalMenu */}
            {/* content */}
            <Divider fitted />
            <Divider hidden />
            <Container>
              {this.props.children}
              <Divider hidden />
              <Divider fitted />
            </Container>
            <FooterTKD />
            {/* content */}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}

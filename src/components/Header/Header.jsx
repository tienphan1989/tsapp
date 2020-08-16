import React, { Component } from "react";
import {
  AppBar,
  IconButton,
  Toolbar,
  Link,
  Menu,
  MenuItem,
  Button,
} from "@material-ui/core";
import logo  from "./logo.png";
import mainLogo from "./logo4.png";
import "./Header.css"

export default class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userOpenMenu: false,
        };
    }

    handleClick = () => this.setState({ userMenuOpen: !this.state.userMenuOpen });

    handleClose = () => this.setState({ userMenuOpen: !this.state.userMenuOpen });

    render() {
        return (
        <AppBar position="sticky" className="header-a">
            <Toolbar className="nav-container">
                <IconButton>
                  <img src={logo} alt="logo" className="main-logo"/>
                </IconButton>
                <div className='title-div'>
                <img src={mainLogo} alt="logo" className="title"/>
                </div>
                <div>
                  <Button className="top-button">
                    <Link href="#" className='nav-link' color="white">Resources</Link>
                  </Button>
                  {/* <Button className="top-button">
                    <Link href="#" className='nav-link'>LOGIN</Link>
                  </Button> */}
                  <Button className="top-button" onClick={this.handleClick}>
                  <Link href="#" className='nav-link' color="white">Login</Link>
                  </Button>
                  <Menu
                    getContentAnchorEl={null}
                    anchorOrigin={{ vertical: "top", horizontal: "right" }}
                    transformOrigin={{ vertical: "bottom", horizontal: "center" }}
                    open={this.state.userMenuOpen}
                  >
                    <MenuItem onClick={this.handleClose}>Edit Profile</MenuItem>
                    <MenuItem onClick={this.handleClose}>See Progress</MenuItem>
                    <MenuItem onClick={this.handleClose}>Logout</MenuItem>
                  </Menu>
                </div>
            </Toolbar>
        </AppBar>
        );
    }
}

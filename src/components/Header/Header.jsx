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
                <div>
                  <Button color="primary" variant="contained">
                    <Link href="#" className='nav-link'>Resources</Link>
                  </Button>
                  <Button color="primary" variant="contained">
                    <Link href="#" className='nav-link'>LOGIN</Link>
                  </Button>
                  <Button color="primary" variant="contained" onClick={this.handleClick}>
                  <Link href="#" className='nav-link'>MY PROFILE</Link>
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

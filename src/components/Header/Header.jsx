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
import styles from "./Header.module.css";
import HomeIcon from "@material-ui/icons/Home";

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
        <AppBar position="sticky">
            <Toolbar>
                <IconButton className={styles.leftFloat}>
                    <HomeIcon fontSize="large"/>
            </IconButton>
            <div className={styles.rightFloat}>
            <Button color="primary">
              <Link href="#">Resources</Link>
            </Button>
            <Button color="primary">
              <Link href="#">Learn More</Link>
            </Button>
            <Button color="primary">
              <Link href="#">LOGIN</Link>
            </Button>
            <Button color="primary" onClick={this.handleClick}>
              My Profile
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

import React from "react";
import { NavLink } from 'react-router-dom';
import Login from "../Login/LoginFormik.jsx";
import useModal from '../Login/useModal';
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

export const Header = () => {
  const {isShowing, toggle} = useModal();
  
    let handleClick = () => this.setState({ userMenuOpen: !this.state.userMenuOpen });

    const handleClose = () => this.setState({ userMenuOpen: !this.state.userMenuOpen });

    const loginLogout= () => {
      return props.loggedIn? "Logout" : "Login"; 
    }
        return (
        <AppBar position="sticky" className="header-a">
            <Toolbar className="nav-container">
                <IconButton>
                <NavLink to="/home" ><img src={logo} alt="logo" className="main-logo"/></NavLink>
                </IconButton>
                <div className='title-div'>
                <img src={mainLogo} alt="logo" className="title"/>
                </div>
                <div>
                  <Button className="top-button">
                    <Link href="#" className='nav-link' color="white">Learn More</Link>
                  </Button>
                  {/* <Button className="top-button">
                    <Link href="#" className='nav-link'>LOGIN</Link>
                  </Button> */}
                  <NavLink to="/login" onClick={() => props.handleLogin()}><button className="button-default">Login</button></NavLink>
                  <Login
                    isShowing={isShowing}
                    hide={toggle}
                  />
                  <Menu
                    getContentAnchorEl={null}
                    anchorOrigin={{ vertical: "top", horizontal: "right" }}
                    transformOrigin={{ vertical: "bottom", horizontal: "center" }}
                    open={false}
                  >
                    <MenuItem onClick={handleClose}>Edit Profile</MenuItem>
                    <MenuItem onClick={handleClose}>See Progress</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                  </Menu>
                </div>
            </Toolbar>
        </AppBar>
        );
}

export default Header;
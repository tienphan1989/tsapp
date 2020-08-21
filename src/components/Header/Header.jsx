import React from "react";
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
                    <Link href="#" className='nav-link' color="white">Learn More</Link>
                  </Button>
                  {/* <Button className="top-button">
                    <Link href="#" className='nav-link'>LOGIN</Link>
                  </Button> */}
                  <button className="button-default" onClick={toggle}>Login</button>
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

<div className="right menu">
<div className="item menu-item" onClick={(e) => {props.logOut(e)}}>Log Out</div>
</div>
<a className="item menu-item" href="/login">Log In</a>
<a className="item menu-item" href="/signup">Sign Up</a>
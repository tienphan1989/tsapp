import React from "react";
import "./Header.css";
import { NavLink } from 'react-router-dom';
import {
  AppBar,
  IconButton,
  Toolbar,
  Button,
} from "@material-ui/core";
import logo  from "./logo.png";
import mainLogo from "./logo4.png";

const Header = (props) => {
  
  const loginLogout = () => props.loggedIn? "Logout" : "Login"; 

    return (
      <AppBar position="sticky" className="header-a">
        <Toolbar className="nav-container">
          <IconButton>
            <NavLink to="/" ><img src={logo} alt="logo" className="main-logo"/></NavLink>
          </IconButton>

          <div className='title-div'>
            <img src={mainLogo} alt="logo" className="title"/>
          </div>

          <div>
            <Button className="top-button">
              <NavLink to="/main" className='nav-link' color="white">Screenings</NavLink>
            </Button>

            <Button className="top-button">
              <NavLink to="/info" className='nav-link' color="white">Learn More</NavLink>
            </Button>

            <Button className="top-button">
              <NavLink to="/register" className='nav-link' color="white">Register</NavLink>
            </Button>

            <Button className="top-button">
              <NavLink to="/login" className='nav-link' color="white">{loginLogout()}</NavLink>
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    );
}

export default Header;
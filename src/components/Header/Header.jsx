/* eslint-disable no-unused-vars */
import React from "react";
import { NavLink } from "react-router-dom";
import { AppBar, IconButton, Toolbar, Button } from "@material-ui/core";
import HomeIcon from '@material-ui/icons/Home';
import logo from "./logo.png";
import { makeStyles } from '@material-ui/core/styles';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { blue } from "@material-ui/core/colors";
import ImageAvatars from './Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = (props) => {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const newBlue = blue['200']

  return (
    <React.Fragment>
    {/* <FormGroup>
        <FormControlLabel
          control={<Switch checked={props.loggedIn} onChange={handleChange} aria-label="login switch" />}
          label={auth ? 'Logout' : 'Login'}
        />
      </FormGroup> */}
    <AppBar position="sticky" className="header-a">
      <Toolbar className="nav-container" style={{justifyContent: 'space-between', backgroundColor: newBlue}}>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <NavLink to="/">
            <HomeIcon fontSize="large"/>
          </NavLink>
        </IconButton>
      
          <img src={logo} alt="logo" className="title" style={{height: '50px', width: 'auto'}}/>
            <div>
              {!props.loggedIn && (
              <Button className="register-button" color='default' variant='contained' size='small'>
                <NavLink to="/register">
                  Register
                </NavLink>
              </Button>
              )}
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
                
              >
              {!props.loggedIn ? <AccountCircle fontSize="large"/> : <ImageAvatars fontSize="large"/>}
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                {!props.loggedIn && <NavLink to="/login">
                  <MenuItem onClick={handleClose}>Login</MenuItem>
                  </NavLink>}

                  {props.loggedIn && <NavLink to="/userhome">
                  <MenuItem onClick={handleClose}>My profile</MenuItem>
                  </NavLink>}

                  <NavLink to="/resources">
                    <MenuItem onClick={handleClose}>Resources</MenuItem>
                  </NavLink>

                  <NavLink to="/main">
                    <MenuItem onClick={handleClose}>Screenings</MenuItem>
                  </NavLink>
                  <NavLink to="/main">
                    <MenuItem onClick={handleClose}>Contact</MenuItem>
                  </NavLink>
                  {props.loggedIn && 
                  <NavLink to="/" onClick={handleClose}>
                    <MenuItem onClick={props.logOut} >Logout</MenuItem>
                  </NavLink>}
              </Menu>
            </div>
      </Toolbar>
    </AppBar>
    </React.Fragment>
  );
};

export default Header;

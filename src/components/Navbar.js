import React from "react";
import StyledButton from './StyledButton'
import AppBar from '@material-ui/core/AppBar';


const Navbar = () => {
  return (
    <div>
      <AppBar/>
      <span><StyledButton>Tien's App</StyledButton></span>
      <span><StyledButton>Contact Us</StyledButton></span>
      <span><StyledButton>Get Started</StyledButton></span>
    </div>
  );
};



export default Navbar;
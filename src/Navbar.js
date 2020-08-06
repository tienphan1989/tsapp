import React from "react";
import StyledButton from './StyledButton'
import { Toolbar } from "@material-ui/core/";

const Navbar = () => {
  return (
    <Toolbar>
      Tien's App
      <div>
        <StyledButton>Contact Us</StyledButton>
        <StyledButton>Get Started</StyledButton>
      </div>
    </Toolbar>
  );
};

export default Navbar;
import React from "react";
import { Toolbar, Button } from "@material-ui/core/";

const Navbar = () => {
  return (
    <Toolbar>
      Tien's App
      <div>
        <Button>Contact Us</Button>
        <Button>Get Started</Button>
      </div>
    </Toolbar>
  );
};

export default Navbar;
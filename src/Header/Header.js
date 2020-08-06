import React, { Component } from 'react'
import Box from '@material-ui/core/Box';
import Navbar from "./Navbar";
import { makeStyles } from "@material-ui/core/styles";

export default class Header extends Component {
  render() {
    return (
      <div style={{ width: '100%' }}>
      <Box display="flex" p={1} bgcolor="background.paper">
      <div className='header-div'>
          <div>
            <div>
              <Navbar/>
            </div>
          </div>
        </div>
      </Box>
    </div>
    )
  }
}
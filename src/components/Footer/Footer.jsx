import React, { Component } from 'react';
import "./Footer.css";
import { IconButton } from "@material-ui/core";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

export default class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                <div className='privacy-statement'>
                    <p>All rights reserved; Privacy Statement</p>
                </div>

                <div>
                    <a href='https://www.linkedin.com/in/tien-phan-dc/' target="_blank" rel="noopener noreferrer" className='made-by'>
                    <p className='made-by'>©2020 HealthCheckr, Made by Tien Phan</p></a>
                </div>

                <div > 
                    <IconButton>
                        <a href='https://www.linkedin.com/in/tien-phan-dc/' target="_blank" rel="noopener noreferrer" className='made-by'>
                        <LinkedInIcon fontSize="large"/></a>
                    </IconButton>
                    <IconButton>
                        <a href='https://github.com/tienphan1989' target="_blank" rel="noopener noreferrer" className='made-by'>
                        <GitHubIcon fontSize="large"/></a>
                    </IconButton>
                </div>

            </div>
        )
    }
}

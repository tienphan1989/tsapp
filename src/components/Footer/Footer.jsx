import React, { Component } from 'react'
import "./Footer.css";
import {
    IconButton,
    Toolbar
} from "@material-ui/core";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';


export default class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                <div>
                    <p>
                        ©2020 HealthCheckr, Made by Tien Phan
                    </p>
                </div>
                <div> 
                    <IconButton>
                        <LinkedInIcon fontSize="large"/>
                    </IconButton>
                    <IconButton>
                        <GitHubIcon fontSize="large"/>
                    </IconButton>
                </div>                   
            </div>
        )
    }
}

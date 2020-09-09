import React, { Component } from 'react';
import "./Footer.css";
import { IconButton } from "@material-ui/core";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';

export default class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                <div className='profile-div'>
                    <a href='https://www.linkedin.com/in/tien-phan-dc/' target="_blank" rel="noopener noreferrer" className='made-by'>
                    ©2020 Health Check., <br/>engineered by Tien Phan.</a>
                </div>
                <div className='center-footer'>
                    {/* <div> */}
                        <Button variant='contained' color='default' disableElevation size='small'>Blog</Button>
                    {/* </div> */}
                    <Divider orientation="vertical" flexItem />
                    {/* <div> */}
                    <Button variant='contained' color='default' disableElevation size='small'>Contact</Button>
                    {/* </div> */}
                    <Divider orientation="vertical" flexItem />
                    {/* <div> */}
                    <Button variant='contained' color='default' disableElevation size='small'>Volunteer</Button>
                    {/* </div> */}
                    <Divider orientation="vertical" flexItem />
                </div>
                <div > 
                    <IconButton>
                        <a href='https://www.linkedin.com/in/tien-phan-dc/' target="_blank" rel="noopener noreferrer" className='made-by'>
                        <LinkedInIcon fontSize="large"/></a>
                    </IconButton>
                    <IconButton>
                        <a href='https://github.com/TienPhanDev' target="_blank" rel="noopener noreferrer" className='made-by'>
                        <GitHubIcon fontSize="large"/></a>
                    </IconButton>
                </div>
            </div>
        )
    }
}

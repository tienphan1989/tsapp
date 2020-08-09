import React, { Component } from 'react'
import {
    IconButton,
    Toolbar,
    Link,
    Button,
} from "@material-ui/core";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

export default class Footer extends Component {
    render() {
        return (
            <Toolbar>
                <div>
                    <Button color="primary">
                        <Link href="#"/>
                        Privacy Policy & Terms/Conditions
                    </Button>
                </div>
                <div> 
                    <IconButton>
                        <LinkedInIcon fontSize="large"/>
                    </IconButton>
                    <IconButton>
                        <GitHubIcon fontSize="large"/>
                    </IconButton>
                </div>                   
            </Toolbar>
        )
    }
}
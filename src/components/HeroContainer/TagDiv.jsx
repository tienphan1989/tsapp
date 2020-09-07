import React from 'react';
import { Button } from "@material-ui/core";
import "./HeroContainer.css";
import { NavLink } from 'react-router-dom';

const TagDiv = () => {
    return (
        <div className="demo-button">
            {localStorage.token 
            ? 
            <div>
                <NavLink to="/home">
                    <Button variant="contained" color="secondary">
                    View profile
                    </Button>
                </NavLink>
            </div>
            :
            <div className="tagline-div">
                <p>No registration required!</p>
                <NavLink to="/main">
                    <Button variant="contained" color='primary'>
                    Start
                    </Button>
                </NavLink>
            </div>}   
        </div>
    )
}

export default TagDiv

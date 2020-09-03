import React from 'react';
import { Button } from "@material-ui/core";
import "./HeroContainer.css";
import { NavLink } from 'react-router-dom';

const TagDiv = () => {
    return (
        <div className="demo-button">
            {localStorage.token ? 
            <div>
                <Button variant="contained">
                    <NavLink to="/home">View profile</NavLink>
                </Button>
            </div>
            :
            <div className="tagline-div">
                <p>No registration required!</p>
                <Button variant="contained">
                    <NavLink to="/main">Click to get started</NavLink>
                </Button>
            </div>}   
        </div>
    )
}

export default TagDiv

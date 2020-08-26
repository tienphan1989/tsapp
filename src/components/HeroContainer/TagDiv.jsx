import React from 'react';
import { Button } from "@material-ui/core";
import "./HeroContainer.css";
import { NavLink } from 'react-router-dom';

const TagDiv = () => {
    return (
        <div className="demo-button">
            <div className="tagline-div">
                <p>No registration required!</p>
                <Button variant="contained">
                    <NavLink to="/main">Click to get started</NavLink>
                </Button>
            </div>
        </div>
    )
}

export default TagDiv

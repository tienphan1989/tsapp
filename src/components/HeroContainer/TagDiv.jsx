import React from 'react';
import { Button } from "@material-ui/core";
import "./HeroContainer.css"

const TagDiv = () => {
    return (
        <div className="demo-button">
            <div className="tagline-div">
                <p>No registration required!</p>
                <Button variant="contained">
                    Click to Start
                </Button>
            </div>
        </div>
    )
}

export default TagDiv

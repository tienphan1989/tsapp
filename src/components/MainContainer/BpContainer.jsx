import React, { Component } from 'react'
import "./MainContainer.css"
import heart from "./cardiology.svg";
import Button from '@material-ui/core/Button';

export default class BpContainer extends Component {
    render() {
        return (
            <section className='bp-box'>
                <div>
                    <img src={heart} alt="heart" className="info-images"/>
                </div>
                <h2>Blood Pressure Screening</h2>
                <p>Submit a blood pressure reading & I'll let you know how your doing!</p>
                <Button variant="contained" color="secondary">
                    Click to start
                </Button> 
            </section>
        )
    }
}
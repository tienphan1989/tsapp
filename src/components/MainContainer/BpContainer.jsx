import React, { Component } from 'react';
import "./MainContainer.css";
import heart from "./cardiology.svg";
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import HelpAction from './HelpAction'


export default class BpContainer extends Component {
    render() {
        return (
            <section className='bp-box'>
                <h2>Blood Pressure Screening</h2>
                <div>
                    <img src={heart} alt="heart" className="info-images"/>
                </div>
                <p>Submit a blood pressure reading <br/>& get instant feedback!</p>
                <Button variant="contained" color="primary">
                    <Link to="/bpscreen" className='bp-screen'>Start</Link>
                </Button> 
                <HelpAction fontSize='small'/>
            </section>
        )
    }
}
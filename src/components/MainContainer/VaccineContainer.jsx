import React, { Component } from 'react';
import "./MainContainer.css";
import vaccine from "./profession.svg";
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import HelpAction from './HelpAction'


export default class VaccineContainer extends Component {
    render() {
        return (
            <section className='vaccine-box'>
                <h2>Vaccine Screening</h2>
                <div>
                    <img src={vaccine} alt="nurse-emoji" className="info-images"/>
                </div>
                <p>Answer some easy questions and I'll let you know<br/>
                    if you are up to date on your vaccines so you can stay protected! 
                </p>
                <Button variant="contained" color="secondary">
                    <Link to="/vaccinescreen" className='vaccine-screen'>Start</Link>
                </Button> 
                <HelpAction fontSize='small'/>
            </section>
        )
    }
}

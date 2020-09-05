import React, { Component } from 'react';
import "./MainContainer.css";
import vaccine from "./profession.svg";
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

export default class VaccineContainer extends Component {
    render() {
        return (
            <section className='vaccine-box'>
                <div>
                    <img src={vaccine} alt="nurse-emoji" className="info-images"/>
                </div>
                <h2>Vaccine Screening</h2>
                <p>Answer some quick questions and I'll let you know
                    if you are up to date on your vaccines so you can stay protected! 
                </p>
                <Button variant="contained" color="secondary">
                    <Link to="/vaccinescreen" className='vaccine-screen'>Click to start</Link>
                </Button> 
            </section>
        )
    }
}

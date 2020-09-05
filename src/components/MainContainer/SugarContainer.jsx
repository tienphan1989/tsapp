import React, { Component } from 'react';
import "./MainContainer.css";
import glucometer from "./diabetes (1).svg";
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

export default class SugarContainer extends Component {
    render() {
        return (
            <section className='sugar-box'>
                <div>
                    <img src={glucometer} alt="finger-sample" className="info-images"/>
                </div>
                <h2>Blood Sugar Screening</h2>
                <p>Answer some quick questions
                    and I'll let you know how your doing! 
                </p>
                <Button variant="contained" color="secondary">
                    <Link to="/sugarscreen" className='sugar-screen'>Click to start</Link>
                </Button> 
            </section>
        )
    }
}

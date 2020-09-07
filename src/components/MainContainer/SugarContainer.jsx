import React, { Component } from 'react';
import "./MainContainer.css";
import glucometer from "./diabetes (1).svg";
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

export default class SugarContainer extends Component {

    render() {
        return (
            <section className='sugar-box'>
                <h2>Blood Sugar Screening</h2>
                <div>
                    <img src={glucometer} alt="finger-sample" className="info-images"/>
                </div>
                <p>Answer some quick questions<br/>
                    & I'll let you know how your doing! 
                </p>
                <Button variant="contained" color="secondary">
                    <Link to="/sugarscreen" className='sugar-screen'>Start</Link>
                </Button> 
            </section>
        )
    }
}

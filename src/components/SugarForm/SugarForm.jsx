import React, { Component } from 'react';
import { Button } from "@material-ui/core";
import "./SugarForm.css";

export default class SugarForm extends Component {
    //if user is !logged in or state.loggedIn === false, evaluate form values and render feedback
    state = {
        sugarResults: [],

    }

    handleChange = (e) => {
        const input = e.target;
        const name = input.name;
        const value = input.type === 'checkbox' ? input.checked : input.value;
        this.setState({ [name]: value });
    };

    //if user is logged in or state.loggedIn === true, POST new record
    handleUserSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:3000/api/v1/sugarscreens', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.token}`
            },
            body: JSON.stringify({
            user_id: localStorage.userId,
            result: this.state.value
            })
        })
        .then(resp => resp.json())
        .then(console.log)
    }

    handleGuestSubmit = (event) => {
        event.preventDefault();
        const sugarResults = this.state.sugarResults.concat(this.state);
        this.setState({
            sugarResults
        });
    }

    feedback = () => {
        const bloodSugar = this.state.result;
        if(bloodSugar < 120){
            return "Good"
        } else if(bloodSugar > 120 && bloodSugar < 151){
            return "OK"
        } else if(bloodSugar > 152 && bloodSugar < 200){
            return "BAD"
        }
    }

    render() {
    return (
    <React.Fragment>
    <div className="sugar-container">
        <div className='sugar-form-div'>
            <form onSubmit={this.handleGuestSubmit}>
                <div className="age-value">
                    <h3 className='sugar-form-title'>Sugar Screen</h3>
                    <label htmlFor='age'>Age: </label>
                    <input
                        className="age-input"
                        type="number"
                        placeholder="age..."
                        name="age"
                        id='age'
                        onChange={this.handleChange}
                    />
                </div>

                <div className="sugar-value">
                    <label htmlFor='result'>Sugar level: </label>
                        <input
                            className="sugar-input-field"
                            type="number"
                            placeholder="mg/DL"
                            name="result"
                            id="result"
                            onChange={this.handleChange}
                        />
                </div>

                <div className="sugar-fasting">
                    <label htmlFor='fasting'>Did you eat anything in the last 12 hours? </label>
                        <label>Yes</label>
                            <input
                            type="radio"
                            name="fasting"
                            value="yes"
                            id="fasting"
                            onChange={this.handleChange}
                            />
                        <label>No</label>
                            <input
                            type="radio"
                            name="fasting"
                            value="no"
                            id="notFasting"
                            onChange={this.handleChange}
                            />
                </div>

                <div className="terms-condition">
                    <label htmlFor="agreeTerms">By checking this box, I agree to the Terms and conditions.</label>
                        <input
                        type="checkbox"
                        placeholder="By clicking, I agree to the T.O.S."
                        name="TermsConditions"
                        value="yes"
                        id="agreeTerms"
                        onChange={this.handleChange}
                    />
                </div>

                <div className="sugar-submit-button">
                    <Button variant="contained" color="secondary" type="submit">Submit</Button> 
                </div> 
                <div className='sugar-query-div'>
                    <p className='sugar-query-p'>Wondering how to get your blood sugar tested?</p>
                </div>
            </form>
        </div>
    </div>

    {this.state.sugarResults.length > 0 ? 
    this.feedback() 
    : null}

    </React.Fragment>
)}}
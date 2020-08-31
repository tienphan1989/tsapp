import React, { Component } from 'react';
import { Button } from "@material-ui/core";
import "./SugarForm.css";

export default class SugarForm extends Component {
    //if user is !logged in or state.loggedIn === false, evaluate form values and render feedback
    renderFeedback = () => {

    }

    //if user is logged in or state.loggedIn === true, POST new record
    postSugarData = (event) => {
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

    render() {
    return (
    <div className="sugar-container">
        <div className='sugar-form-div'>
            <form onSubmit={this.postSugarData}>
                <div className="age-value">
                    <h3 className='sugar-form-title'>Sugar Screen</h3>
                    <label htmlFor='age'>Age: </label>
                    <input
                    className="age-input"
                    type="number"
                    placeholder="age..."
                    name="age"
                    id='age'
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
                            onClick={(e) => console.log(e.target.value, e.target.id)}
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
                            onClick={(e) => console.log(e.target.value, e.target.id)}
                            />
                        <label>No</label>
                            <input
                            type="radio"
                            name="fasting"
                            value="no"
                            id="notFasting"
                            onClick={(e) => console.log(e.target.value, e.target.id)}
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
                        onClick={(e) => console.log(e.target.value, e.target.id)}
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
)}}
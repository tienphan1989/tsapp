import React, { Component } from 'react';
import { Button } from "@material-ui/core";
import "./SugarForm.css";

export default class SugarForm extends Component {
    state = {
        currentUser: {},
        result: '',
        display: false
    };

    componentDidMount() {
        fetch(`http://localhost:3000/api/v1/users/${localStorage.userID}`)
        .then(response => response.json())
        .then(user => this.setState({
            currentUser: user
        }))
    };

    handleChange = (event) => {
        const input = event.target;
        const name = input.name;
        const value = input.type === 'checkbox' ? input.checked : input.value;
        this.setState({ [name]: value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const result = parseInt(this.state.result, 10);
        if(localStorage.token){
        fetch('http://localhost:3000/api/v1/sugarscreen', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.token}`
            },
            body: JSON.stringify({sugar: {
            user_id: this.state.currentUser.id,
            result: result
            }})
        })
        .then(resp => resp.json())
        .then(console.log)
        this.setState({
            age: '',
            result: '',
            fasting: null,
            TermsConditions: false,
            display: false
        })}
        else{
            this.renderFeedback()
        }
    };

    //Click to see your score in terms of A1C
        //Learn more diabetes habits Redirect to diabetes info page
        //Learn more dietary habits Redirect to diet
    handleDisplay = () => {
        this.setState(prevState => ({
            display: !prevState.display
        }));
    };
    
    clearForm = () => {
        this.setState({
            age: '',
            result: '',
            fasting: null,
            TermsConditions: false,
            display: false
        })
    };

    renderFeedback = () => {
        const result = parseInt(this.state.result, 10);
        if(result < 126){
        return (
            <div className='feedback-div'>
                <p>Fantastic job! Your blood sugar is right where it should be.</p>
                <p>Keep it up and continue to take care of your body and check out some </p>
                <p>dietary tips for even more useful knowledge.</p>
                <p>You can visit your local pharmacy for point of care testing, (protip) it's usually free
                or you can purchase at home testing. Your doctor will also have more accurate tests on hand to let you know your status.</p>
                <Button variant="contained" onClick={this.clearForm}>Clear form</Button>
            </div>) 

        } else if(result >= 126 && result <= 150){
        return(
            <div className='feedback-div'>
                <p>Your result is just a tiny bit higher than it should be. This could be</p>
                <p>due to recent meals or physical activity or even factors like stress.</p>
                <p>Continue to take care of your body and check out some </p>
                <p>dietary tips for even more tools to enhance your health.</p>
                <p>You can visit your local pharmacy for point of care testing, (protip) it's usually free
                or you can purchase at home testing. Your doctor will also have more accurate tests on hand to let you know your status.</p>
                <Button variant="contained" onClick={this.clearForm}>Clear form</Button>
            </div>)

        } else if(result > 180){
        return (
            <div className='feedback-div'>
                <p>Oh my, your result is much higher than we'd like...we are aiming for at least 126.</p>
                <p>Try and relax, and try again later to see how you are doing.</p>
                <p>If you continue to have results like this, consider asking your doctor</p>
                <p>for further testing so you can understand your health better.</p>
                <p>Focus on your health and check out some dietary tips for even more tools to enhance your health.</p>
                <p>You can visit your local pharmacy for point of care testing, (protip) it's usually free
                or you can purchase at home testing. Your doctor will also have more accurate tests on hand to let you know your status.</p>
                <Button variant="contained" onClick={this.clearForm}>Clear form</Button>
            </div>)
        }
    };

    render() {
    return (
    <React.Fragment>
    <div className="sugar-container">
        <div className='sugar-form-div'>
            <form onSubmit={this.handleSubmit}>
                <h3 className='sugar-form-title'>Sugar Screen</h3>
                {!localStorage.token ? 
                <div className="age-value">
                    <label htmlFor='age'>Age: </label>
                    <input
                        className="age-input"
                        type="number"
                        placeholder="age..."
                        name="age"
                        id='age'
                        value={this.state.age}
                        onChange={this.handleChange}
                    />
                </div>
                : null}

                <div className="sugar-value">
                    <label htmlFor='result'>Blood sugar level: </label>
                        <input
                            className="sugar-input-field"
                            type="number"
                            placeholder="mg/DL"
                            name="result"
                            id="result"
                            value={this.state.result}
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
                            checked={this.state.fasting === "yes"}
                            onChange={this.handleChange}
                            />
                        <label>No</label>
                            <input
                            type="radio"
                            name="fasting"
                            value="no"
                            id="fasting"
                            checked={this.state.fasting === "no"}
                            onChange={this.handleChange}
                            />
                </div>

                <div className="terms-condition">
                    <label htmlFor="TermsConditions">By checking this box, I agree to the Terms and conditions.</label>
                        <input
                        type="checkbox"
                        placeholder="By clicking, I agree to the T.O.S."
                        name="TermsConditions"
                        id="TermsConditions"
                        checked={this.state.TermsConditions}
                        onChange={this.handleChange}
                    />
                </div>
                
                <div className="sugar-submit-button">
                    <Button variant="contained" color="secondary" type="submit" onClick={this.handleDisplay}
                    disabled={this.state.display}>
                        Submit
                    </Button>
                </div> 

                <div className='sugar-query-div'>
                    <p className='sugar-query-p'>Wondering how to get your blood sugar tested?</p>
                </div>
            </form>
            
        </div>
    </div>

    {this.state.display && 
    <div className='feedback-div2'>
        {this.renderFeedback()}
    </div>}
    
    </React.Fragment>
)}}
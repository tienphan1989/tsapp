import React, { Component } from 'react';
import "./BloodPressureForm.css";
import { Button } from "@material-ui/core";
import configObj from '../../helpers/configObj';
import BpFeedback from './BpFeedback';
import FormErrors from '../../helpers/FormErrors';
import TextField from '@material-ui/core/TextField';

export default class BloodPressureForm extends Component {
    state = {
        currentUser: {},
        open: false,
        age: '',
        systolic_pressure: '',
        diastolic_pressure: '',
        formErrors: {},
        formValid: false,
        date: ''
    };

    componentDidMount() {
        localStorage.token &&
        fetch(`http://localhost:3000/api/v1/users/${localStorage.userID}`)
        .then(response => response.json())
        .then(user => this.setState({
            currentUser: user,
            age: user.age
        }))
    };

    handleChange = (event) => {
        const input = event.target;
        const name = input.name;
        const value = input.type === 'checkbox' ? input.checked : input.value;
        this.setState({[name]: value}, this.validateForm)
    };

    handleSubmit = () => {
        const dateData = this.state.date.toLocaleDateString();
        const systolic = parseInt(this.state.systolic_pressure, 10);
        const diastolic = parseInt(this.state.diastolic_pressure, 10);
        fetch('http://localhost:3000/api/v1/bpscreen', configObj("POST", true, {bp: {
            user_id: localStorage.userID,
            systolic_pressure: systolic,
            diastolic_pressure: diastolic,
            date: dateData
        }}))
        .then((response) => response.json())
        .then((response) => {
            console.log(response)
            this.resetFormErrors()
        })
        .catch(error => console.log(error))
    };

    clearForm = () => {
        this.setState({
            systolic_pressure: '',
            diastolic_pressure: '',
            TermsConditions: false,
            open: false,
            date: ''
        })
    };

    handleClickOpen = (event) => {
        event.preventDefault();
        this.setState({
            open: true
        }, this.handleSubmit)
    };

    handleClose = () => {
        this.setState({
            open: false
        })
    };

    resetFormErrors = () => {
        this.setState({formErrors: {}})
    };

    validateForm = () => {
        let formErrors = {}
        let formValid = true
        if(this.state.age <= 17) {
            formErrors.age = ["must be at least 18 years of age"]
            formValid = false
        }
        if(parseInt(this.state.systolic_pressure, 10) <= 49) {
            formErrors.systolic_pressure = ["please enter valid number"]
            formValid = false
        }
        else if(parseInt(this.state.diastolic_pressure, 10) <= 29) {
            formErrors.diastolic_pressure = ["please enter valid number"]
            formValid = false
        }
        this.setState({formValid: formValid, formErrors: formErrors})
    }

    formatDate = (date) => {
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
      
        return [
          year,
          month < 10 ? `0${month}` : month,
          day < 10 ? `0${day}` : day
        ].join('-');
    }

    handleDateChange = (e) => {
        this.setState({
            date: new Date(`${e.target.value}T00:00:00`)
        })
    };

    render() {
    const DatePicker = ({ date, ...props }) => (
        <TextField
            value={date instanceof Date ? this.formatDate(date) : date}
            type="date"
            InputLabelProps={{
                shrink: true
            }}
            {...props}
        />
    );   
    return (
    <React.Fragment>
        <div className="bp-container">
            <div className="form-div">
                <form onSubmit={this.handleClickOpen}>
                    <h3 className='bp-form-title'>Blood Pressure Screen</h3>
                    <DatePicker
                    date={this.state.date}
                    onChange={this.handleDateChange}
                    label="My Date"
                    //className={classes.textField}
                    />
                    {!localStorage.token ? 
                    <div className="age-value">
                        <input
                            className="age-input"
                            type="number"
                            placeholder="age"
                            name="age"
                            value={this.state.age}
                            onChange={this.handleChange}
                        />
                    </div> 
                    : null}

                    <div className="sugar-fasting">
                        <input
                            className="sugar-input-field"
                            type="number"
                            placeholder="Systolic Pressure"
                            name="systolic_pressure"
                            id="systolic_pressure"
                            value={this.state.systolic_pressure}
                            onChange={this.handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <input
                            className="sugar-input-field"
                            type="number"
                            placeholder="Diastolic Pressure"
                            name="diastolic_pressure"
                            id="diastolic_pressure"
                            value={this.state.diastolic_pressure}
                            onChange={this.handleChange}
                        />
                    </div>

                    {!localStorage.token &&
                    <div className="terms-condition">
                        <label htmlFor="TermsConditions">By clicking, I agree to the terms & conditions</label>
                        <input
                            type="checkbox"
                            placeholder="By clicking, I agree to the T.O.S. "
                            name="TermsConditions"
                            id="TermsConditions"
                            checked={this.state.TermsConditions}
                            onChange={this.handleChange}
                        />
                    </div>}
                    <FormErrors formErrors = {this.state.formErrors}/>
                    <div className="sugar-submit-button">
                        <Button variant="contained" color="secondary" type="submit" disabled={!this.state.formValid}>
                            submit
                        </Button> 
                    </div>
                </form>
                
                <BpFeedback 
                open={this.state.open} 
                onClose={this.handleClose} 
                systolic_pressure={this.state.systolic_pressure}
                clearForm={this.clearForm}
                />
            </div>
        </div>
    </React.Fragment>
)}}

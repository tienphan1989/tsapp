import React, { Component } from 'react';
import "./VaccineForm.css";
import { Button } from "@material-ui/core";
import VaccineFeedback from './VaccineFeedback';
import FormErrors from '../../helpers/FormErrors';

export default class VaccineForm extends Component {
    state = {
        currentUser: {},
        age: '',
        tetanus: null,
        flu: null,
        pneumonia: null,
        shingles: null,
        shinglesTwoDay: null,
        editing: false,
        formErrors: {},
        open: false,
        formValid: false
    };

    componentDidMount() {
        if(localStorage.token){
        fetch(`http://localhost:3000/api/v1/users/${localStorage.userID}`)
        .then(response => response.json())
        .then((user) => {
            this.setState({
                currentUser: user,
                age: user.age,
                tetanus: user.vaccination_record.tetanus ?  "yes" : 'no',
                flu: user.vaccination_record.flu ?  "yes" : 'no',
                pneumonia: user.vaccination_record.pneumonia ?  "yes" : 'no',
                shingles: user.vaccination_record.shingles ?  "yes" : 'no',
                editing: true,
                formValid: true,
                formErrors: {}     
            })
        })
    }};

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        }, this.validateForm);
    };

    handleSubmit = () => {
        if(localStorage.token){
        const method = this.state.editing ? 'PATCH' : 'POST';
        const url = this.state.editing 
        ? 
        `http://localhost:3000/api/v1/vaccination_records/${this.state.currentUser.vaccination_record.id}` 
        : 
        'http://localhost:3000/api/v1/vaccination_records'
        fetch(url, {
            method: method,
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.token}`
            },
            body: JSON.stringify({vaccination_record: {
            user_id: this.state.currentUser.id,
            tetanus: this.state.tetanus === "yes" ? true : false,
            flu: this.state.flu === "yes" ? true : false,
            pneumonia: this.state.pneumonia === "yes" ? true : false,
            shingles: this.state.shingles === "yes" ? true : false
            }})
        })
        .then(resp => resp.json())
        .then(this.resetFormErrors())
        .catch(console.log)}
        else{
            this.resetFormErrors();
        }
    };

    handleClickOpen = (event) => {
        event.preventDefault();
        this.setState({
            open: true
        }, this.handleSubmit)
    };

    clearForm = () => {
        this.setState({
            open: false,
            age: '',
            tetanus: null,
            flu: null,
            pneumonia: null,
            shingles: null,
            shinglesTwoDay: null
        })
    };

    resetFormErrors = () => {
        this.setState({formErrors: {}})
    }

    validateForm = () => {
        let formErrors = {}
        let formValid = true
        if(this.state.age <= 17) {
            formErrors.age = ["must be at least 18 years of age"]
            formValid = false
        }
        if(this.state.tetanus === null) {
            formErrors.tetanus = ["question requires reply"]
            formValid = false
        }
        if(this.state.pneumonia === null) {
            formErrors.pneumonia = ["question requires reply"]
            formValid = false
        }
        else if(this.state.flu === null) {
            formErrors.flu = ["question requires reply"]
            formValid = false
        }
        this.setState({formValid: formValid, formErrors: formErrors})
    }

    render() {
        const currentAge = parseInt(this.state.age, 10);
        return (
            <React.Fragment>
            <div className='vaccine-form-container'>
                <div className='vaccine-form-div'>
                    <form onSubmit={this.handleClickOpen}>
                        <h3 className='vaccine-form-title'>{this.state.editing ? "Update vaccine record" : "Vaccine history"}</h3>
                        <div className="age-value">
                            <label htmlFor='age'>Age: </label>
                                <input
                                    className="age-input"
                                    type="text"
                                    placeholder="years old..."
                                    name="age"
                                    id='age'
                                    value={this.state.age}
                                    onChange={this.handleChange}
                                />
                        </div>
                        
                        <div className="vaccine-question1">
                            <div className='vaccine-question-column'>
                                <label htmlFor='tetanus'>Have you received a Tetanus shot within the last 10 years? </label>
                                </div>
                                <div className="vaccine1-radio">
                                    <label>Yes</label>
                                        <input
                                            type="radio"
                                            name='tetanus'
                                            value="yes"
                                            id='tetanus'
                                            checked={this.state.tetanus === "yes"}
                                            onChange={this.handleChange}
                                        />
                                    <label>No/unsure</label>
                                        <input
                                            type="radio"
                                            name='tetanus'
                                            value="no"
                                            id='tetanus'
                                            checked={this.state.tetanus === "no"}
                                            onChange={this.handleChange}
                                        />                                   
                                </div>
                        </div>

                        <div className="vaccine-question1">
                            <div className='vaccine-question-column'>
                            {currentAge >= 65 ? <label htmlFor='flu'>Have you received a <strong>High-dose</strong> flu-shot this year? </label> :
                                <label htmlFor='flu'>Have you received a flu-shot this year? </label>}
                                </div>
                                <div className="vaccine1-radio">
                                    <label>Yes</label>
                                        <input
                                            type="radio"
                                            name='flu'
                                            value="yes"
                                            id='flu'
                                            checked={this.state.flu === "yes"}
                                            onChange={this.handleChange}
                                        />
                                    <label>No/unsure</label>
                                        <input
                                            type="radio"
                                            name='flu'
                                            value="no"
                                            id='flu'
                                            checked={this.state.flu === "no"}
                                            onChange={this.handleChange}
                                        />                                  
                                </div>
                        </div>

                        <div className="vaccine-question1">
                            <div className='vaccine-question-column'>
                                <label htmlFor='pneumonia'>Have you ever received a Pneumonia vaccine? </label>
                                </div>
                                <div className="vaccine1-radio">
                                    <label>Yes</label>
                                        <input
                                            type="radio"
                                            name='pneumonia'
                                            value="yes"
                                            id='pneumonia'
                                            checked={this.state.pneumonia === "yes"}
                                            onChange={this.handleChange}
                                        />
                                    <label>No/unsure</label>
                                        <input
                                            type="radio"
                                            name='pneumonia'
                                            value="no"
                                            id='pneumonia'
                                            checked={this.state.pneumonia === "no"}
                                            onChange={this.handleChange}
                                        />                                  
                                </div>
                        </div>

                        {currentAge >= 50 &&
                        <div className="vaccine-question1">
                            <div className='vaccine-question-column'>
                                <label htmlFor='shingles'>Have you ever received a shingles vaccine? </label>
                                </div>
                                <div className="vaccine1-radio">
                                    <label>Yes</label>
                                        <input
                                            type="radio"
                                            name='shingles'
                                            value="yes"
                                            id='shingles'
                                            checked={this.state.shingles === "yes"}
                                            onChange={this.handleChange}
                                        />
                                    <label>No/unsure</label>
                                        <input
                                            type="radio"
                                            name='shingles'
                                            value="no"
                                            id='shingles'
                                            checked={this.state.shingles === "no"}
                                            onChange={this.handleChange}
                                        />                                  
                                </div>
                        </div>}

                        {currentAge >= 50 && this.state.shingles === 'yes' &&
                        <div className="vaccine-question5">
                            <div className='vaccine-question-column'>
                                <label htmlFor='shinglesTwoDay'>Was shingles vaccine on 2 different days? </label></div>
                                <div className="vaccine1-radio">
                                    <label>Yes</label>
                                        <input
                                            type="radio"
                                            name='shinglesTwoDay'
                                            value="yes"
                                            id='shinglesTwoDay'
                                            checked={this.state.shinglesTwoDay === "yes"}
                                            onChange={this.handleChange}
                                        />
                                    <label>No/unsure</label>
                                        <input
                                            type="radio"
                                            name='shinglesTwoDay'
                                            value="no"
                                            id='shinglesTwoDay'
                                            checked={this.state.shinglesTwoDay === "no"}
                                            onChange={this.handleChange}
                                        />                                  
                                </div>
                        </div>}
                        <FormErrors formErrors = {this.state.formErrors}/>
                        <Button variant="contained" color="secondary" type="submit" disabled={!this.state.formValid}>
                            {this.state.editing ? "Update record" : "Create vaccination record"}
                        </Button>
                    </form>
                    <VaccineFeedback 
                    age={this.state.age}
                    open={this.state.open} 
                    onClose={this.handleClose} 
                    clearForm={this.clearForm}
                    tetanus={this.state.tetanus}
                    flu={this.state.flu}
                    pneumonia={this.state.pneumonia}
                    shingles={this.state.shingles}
                    shinglesTwoDay={this.state.shinglesTwoDay}
                    />
                </div>
            </div>
        </React.Fragment>
        )
    }
}

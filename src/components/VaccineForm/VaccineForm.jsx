import React, { Component } from 'react';
import "./VaccineForm.css";
import { Button } from "@material-ui/core";

export default class VaccineForm extends Component {
    state = {
        currentUser: {},
        age: '',
        condition1: null,
        condition2: null,
        condition3: null,
        condition4: null,
        condition5: null,
        display: false,
        editing: false,
        formErrors: {},
        open: false
    };

    componentDidMount() {
        (localStorage.token && 
        fetch(`http://localhost:3000/api/v1/users/${localStorage.userID}`)
        .then(response => response.json())
        .then((user) => {
            this.setState({
                currentUser: user,
                age: user.age,
                condition1: user.vaccination_record.tetanus ?  "yes" : 'no',
                condition2: user.vaccination_record.flu ?  "yes" : 'no',
                condition3: user.vaccination_record.tetanus ?  "yes" : 'no',
                condition4: user.vaccination_record.pneumonia ?  "yes" : 'no',
                editing: true,
                formValid: false,
                formErrors: {}     
            })
        }))
    };


    handleChange = (event) => {
        debugger
        //event.preventDefault()
        this.setState({
            [event.target.name]: event.target.value
        }, this.validateForm);
    };

    handleSubmit = (event, record) => {
        //const { condition1, condition2, condition3, condition4 } = this.state;
        const method = this.state.editing ? 'PATCH' : 'POST';
        debugger
        const url = this.state.editing ? `http://localhost:3000/api/v1/vaccination_records/${this.state.currentUser.vaccination_record.id}` : 'http://localhost:3000/api/v1/vaccination_records'
        //if(localStorage.token){
        fetch(url, {
            method: method,
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.token}`
            },
            body: JSON.stringify({vaccination_record: {
            user_id: this.state.currentUser.id,
            tetanus: this.state.condition1 === "yes" ? true : false,
            flu: this.state.condition2 === "yes" ? true : false,
            pneumonia: this.state.condition3 === "yes" ? true : false,
            shingles: this.state.condition4 === "yes" ? true : false
            }})
        })
        .then(resp => resp.json())
        .then(this.clearForm())
        .catch(error => {
            this.setState({formErrors: error.response.data, formValid: false})
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
    
    clearForm = () => {
        this.setState({
            age: '',
            condition1: null,
            condition2: null,
            condition3: null,
            condition4: null,
            condition5: null
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

    renderFeedback = () => {
        return (
            <div className='feedback-div'>
                {this.state.condition1 === 'yes' 
                ? 
                <div>Congrats, your covered!</div> 
                :
                <div>Go protect yourself!</div>}

                {this.state.condition2 === 'yes' 
                ? 
                <div>Congrats, your covered!</div> 
                :
                <div>Go protect yourself!</div>}

                
                {this.state.condition3 === 'yes' 
                ? 
                <div>Congrats, your covered!</div> 
                :
                <div>Go protect yourself!</div>}

                
                {this.state.age > 64 && this.state.condition4 === 'yes'
                ? 
                <div>Congrats, your covered!</div> 
                :
                <div>Go protect yourself!</div>}

                {this.state.age > 64 && this.state.condition5 === 'yes' 
                ? <div>Congrats, your covered!</div> 
                :
                <div>Go protect yourself!</div>}

                <Button variant="contained" onClick={this.clearForm}>Clear form</Button>
            </div>)
    };

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
                                <label htmlFor='condition1'>Have you received a Tetanus shot within the last 10 years? </label></div>
                                <div className="vaccine1-radio">
                                    <label>Yes</label>
                                        <input
                                            type="radio"
                                            name='condition1'
                                            value="yes"
                                            id='condition1'
                                            checked={this.state.condition1 === "yes"}
                                            onChange={this.handleChange}
                                        />
                                    <label>No/unsure</label>
                                        <input
                                            type="radio"
                                            name='condition1'
                                            value="no"
                                            id='condition1'
                                            checked={this.state.condition1 === "no"}
                                            onChange={this.handleChange}
                                        />                                   
                                </div>
                        </div>

                        <div className="vaccine-question1">
                            <div className='vaccine-question-column'>
                                <label htmlFor='condition2'>Have you ever received a Pneumonia vaccine? </label></div>
                                <div className="vaccine1-radio">
                                    <label>Yes</label>
                                        <input
                                            type="radio"
                                            name='condition2'
                                            value="yes"
                                            id='condition2'
                                            checked={this.state.condition2 === "yes"}
                                            onChange={this.handleChange}
                                        />
                                    <label>No/unsure</label>
                                        <input
                                            type="radio"
                                            name='condition2'
                                            value="no"
                                            id='condition2'
                                            checked={this.state.condition2 === "no"}
                                            onChange={this.handleChange}
                                        />                                  
                                </div>
                        </div>

                        <div className="vaccine-question1">
                            <div className='vaccine-question-column'>
                                {currentAge >= 65 ? <label htmlFor='condition1'>Have you received a High-dose flu-shot this year? </label> :
                                <label htmlFor='condition3'>Have you received a flu-shot this year? </label>}</div>
                                <div className="vaccine1-radio">
                                    <label>Yes</label>
                                        <input
                                            type="radio"
                                            name='condition3'
                                            value="yes"
                                            id='condition3'
                                            checked={this.state.condition3 === "yes"}
                                            onChange={this.handleChange}
                                        />
                                    <label>No/unsure</label>
                                        <input
                                            type="radio"
                                            name='condition3'
                                            value="no"
                                            id='condition3'
                                            checked={this.state.condition3 === "no"}
                                            onChange={this.handleChange}
                                        />                                  
                                </div>
                        </div>

                        {currentAge >= 50 ?
                        <div className="vaccine-question1">
                            <div className='vaccine-question-column'>
                                <label htmlFor='condition4'>Have you ever received a shingles vaccine? </label></div>
                                <div className="vaccine1-radio">
                                    <label>Yes</label>
                                        <input
                                            type="radio"
                                            name='condition4'
                                            value="yes"
                                            id='condition4'
                                            checked={this.state.condition4 === "yes"}
                                            onChange={this.handleChange}
                                        />
                                    <label>No/unsure</label>
                                        <input
                                            type="radio"
                                            name='condition4'
                                            value="no"
                                            id='condition4'
                                            checked={this.state.condition4 === "no"}
                                            onChange={this.handleChange}
                                        />                                  
                                </div>
                        </div>
                        : null}

                        {currentAge > 50 && this.state.condition4 === 'yes' ?
                        <div className="vaccine-question5">
                            <div className='vaccine-question-column'>
                                <label htmlFor='condition5'>Was shingles vaccine on 2 different days? </label></div>
                                <div className="vaccine1-radio">
                                    <label>Yes</label>
                                        <input
                                            type="radio"
                                            name='condition5'
                                            value="yes"
                                            id='condition5'
                                            checked={this.state.condition5 === "yes"}
                                            onChange={this.handleChange}
                                        />
                                    <label>No/unsure</label>
                                        <input
                                            type="radio"
                                            name='condition5'
                                            value="no"
                                            id='condition5'
                                            checked={this.state.condition5 === "no"}
                                            onChange={this.handleChange}
                                        />                                  
                                </div>
                        </div>
                        : null}

                        <Button variant="contained" color="secondary" type="submit" disabled={this.state.display}>
                            {this.state.editing ? "Update record" : "Create vaccination record"}
                        </Button>

                    </form>
                </div>
            </div>
            {this.state.display && 
            <div className='feedback-div2'>
                {this.renderFeedback()}
            </div>}
        </React.Fragment>
        )
    }
}

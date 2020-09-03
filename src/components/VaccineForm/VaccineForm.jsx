import React, { Component } from 'react';
import "./VaccineForm.css";
import { Button } from "@material-ui/core";

export default class VaccineForm extends Component {
    state = {
        currentUser: {},
        age: '',
        display: false
    };

    componentDidMount() {
        (localStorage.token && localStorage.token !== undefined)  &&
        fetch(`http://localhost:3000/api/v1/users/${localStorage.userID}`)
        .then(response => response.json())
        .then(user => this.setState({
            currentUser: user
        }))
    };


    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmit = (event, record) => {
        console.log(record)
        debugger
        const { condition1, condition2, condition3, condition4 } = record;
        event.preventDefault();
        if(localStorage.token){
        fetch('http://localhost:3000/api/v1/vaccineform', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.token}`
            },
            body: JSON.stringify({vaccination_record: {
            user_id: this.state.currentUser.id,
            tetanus: condition1 === "yes" ? true : false,
            flu: condition2 === "yes" ? true : false,
            pneumonia: condition3 === "yes" ? true : false,
            shingles: condition4 === "yes" ? true : false
            }})
        })
        .then(resp => resp.json())
        .then(console.log)
        this.setState({
            age: '',
            condition1: null,
            condition2: null,
            condition3: null,
            condition4: null,
            condition5: null
        })}
        else{
            this.renderFeedback()
        }
    };

    handleDisplay = () => {
        this.setState({
            display: !this.state.display
        });
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
                    <form onSubmit={(e) => this.handleSubmit(e, this.state)}>
                        <h3 className='vaccine-form-title'>Vaccine History</h3>
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
                                <label htmlFor='condition1'>Tetanus shot within the last 10 years? </label></div>
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
                                <label htmlFor='condition2'>Have you ever had a Pneumonia vaccine? </label></div>
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
                                {currentAge > 64 ? <label htmlFor='condition1'>Did you get a High-dose flu-shot this year? </label> :
                                <label htmlFor='condition3'>Did you get a flu-shot this year? </label>}</div>
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

                        {currentAge > 50 ?
                        <div className="vaccine-question1">
                            <div className='vaccine-question-column'>
                                <label htmlFor='condition4'>Recieved a shingles vaccine? </label></div>
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

                        <Button variant="contained" color="secondary" type="submit" onClick={this.handleDisplay} disabled={this.state.display}>
                            Check status
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

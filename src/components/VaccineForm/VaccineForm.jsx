import React, { Component } from 'react';
import "./VaccineForm.css";
import { vaccineQuestions, under65VaccineQuestions } from "../../../src/helpers/VaccineQuestions.js";

export default class VaccineForm extends Component {
    state = {
        age: '',
        questions: vaccineQuestions,
    };

    //find first question with answer=no and stop rendering new questions based off slice
    lastQuestion = () => {
        const firstFalse = this.state.questions.findIndex(question => question.answer === 'No');
        console.log(firstFalse)
        return this.state.questions.slice(0, firstFalse);
    }

    //map through questions and map through radio buttons 
    renderQuestions = () => {
        const answers = ['Yes', 'No', 'Unsure'];
        
        return this.state.questions.map((question, index) =>
        <div key={index} className="vaccine-question">
            <div className='vaccine-question-column'>
                <label>{question.question}</label></div>

                {answers.map((choice, choiceIndex) =>
                    <div className="vaccine1-radio">
                            <label key={choiceIndex}>{choice}</label>
                                <input
                                    name={question}
                                    id={question}
                                    value={choice}
                                    checked={this.state.questions[index].answer === choice}
                                    onChange={(event) => this.handleChange(event, index)}
                                    type="radio"
                                />
                    </div>
                )}
        </div>
    )}

    handleChange = (event, index) => {
        const questionIndex = this.state.questions.findIndex(question => question.id === index);
        let questions = [...this.state.questions];
        questions[questionIndex] = {...questions[questionIndex], answer: event.target.value};
        this.setState({
            questions
        });
    }

    handleAgeChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    }

    // vaccineInfo = ( vaccineResults) => {
    //     fetch('http://localhost:3000/api/v1/vaccinationrecords', {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //             Authorization: `Bearer ${localStorage.token}`
    //         },
    //         body: JSON.stringify(vaccineResults)
    //     })
    //     .then(resp => resp.json())
    //     .then(console.log)
    // }

    render() {
        return (
            <div className='vaccine-form-container'>
                <div className='vaccine-form-div'>
                    <form onSubmit={this.handleSubmit}>
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
                                    onChange={this.handleAgeChange}
                                />
                        </div>
                        
                        {/* <div className="vaccine-question1">
                            <div className='vaccine-question-column'>
                                <label htmlFor='condition1'>Do you want to see question 2?: </label></div>
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
                                    <label>No</label>
                                        <input
                                            type="radio"
                                            name='condition1'
                                            value="no"
                                            id='condition1'
                                            checked={this.state.condition1 === "no"}
                                            onChange={this.handleChange}
                                        />
                                    <label>Unsure</label>
                                        <input
                                            type="radio"
                                            name='condition1'
                                            value="unsure"
                                            id='condition1'
                                            checked={this.state.condition1 === "unsure"}
                                            onChange={this.handleChange}
                                        />
                                </div>
                        </div>

                        {this.state.condition1 === 'yes' ?
                        <div className="vaccine-question1">
                            <div className='vaccine-question-column'>
                                <label htmlFor='condition1'>Do you want to see question 3?: </label></div>
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
                                    <label>No</label>
                                        <input
                                            type="radio"
                                            name='condition2'
                                            value="no"
                                            id='condition2'
                                            checked={this.state.condition2 === "no"}
                                            onChange={this.handleChange}
                                        />
                                    <label>Unsure</label>
                                        <input
                                            type="radio"
                                            name='condition2'
                                            value="unsure"
                                            id='condition2'
                                            checked={this.state.condition2 === "unsure"}
                                            onChange={this.handleChange}
                                        />
                                </div>
                        </div>
                        : null } */}
                        {this.renderQuestions()}
                        <button type="submit">Check status</button>
                    </form>
                </div>
            </div>
        )
    }
}

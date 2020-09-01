import React, { Component } from 'react';
import "./VaccineForm.css";
//import { vaccineQuestions, under65VaccineQuestions } from "../../../src/helpers/VaccineQuestions.js";

export default class VaccineForm extends Component {
    state = {
        age: '',
        guestResults: []
    };

    //find first question with answer=no and stop rendering new questions based off slice
    // lastQuestion = () => {
    //     const firstFalse = this.state.questions.findIndex(question => question.answer === 'No');
    //     console.log(firstFalse)
    //     return this.state.questions.slice(0, firstFalse);
    // }

    //map through questions and map through radio buttons 
    // renderQuestions = () => {
    //     return this.state.questions.map((question, index) =>
    //     <div key={index} className="vaccine-question">
    //         <div className='vaccine-question-column'>
    //             <label>{question.question}</label></div>
    //             <div className="vaccine1-radio">
    //                                 <label>Yes</label>
    //                                     <input
    //                                         type="radio"
    //                                         name= {this.state.questions[index].answer}
    //                                         value="yes"
    //                                         id='condition1'
    //                                         checked={this.state.questions[index].answer === "yes"}
    //                                         onChange={(event) => this.handleChange(event, index)}
    //                                     />
    //                                 <label>No/not sure</label>
    //                                     <input
    //                                         type="radio"
    //                                         name= {this.state.questions[index].answer}
    //                                         value="no"
    //                                         id='condition1'
    //                                         checked={this.state.questions[index].answer === "no"}
    //                                         onChange={(event) => this.handleChange(event, index)}
    //                                     />
    //                             </div>
    //     </div>
    // )}

    handleIndexChange = (event, index) => {
        const questionIndex = this.state.questions.findIndex(question => question.id === index);
        let questions = [...this.state.questions];
        questions[questionIndex] = {...questions[questionIndex], answer: event.target.value};
        this.setState({
            questions
        });
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        const guestResults = this.state.guestResults.concat(this.state);
        this.setState({
            age: '',
            condition1: null,
            condition2: null,
            condition3: null,
            condition4: null,
            condition5: null,
            guestResults
        })
    }

    feedback = () => {
        const age = parseInt(this.state.age, 10);
        if(age < 120){
            this.state.guestResults.map(result => {
            return <p>{result.age}</p>
            }) 
        } else if(age > 120 && age < 151){
            return "OK"
        } else if(age > 152 && age < 200){
            return "BAD"
        }
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
        const currentAge = parseInt(this.state.age, 10);
        return (
            <React.Fragment>
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
                                <label htmlFor='condition5'>Did you get the shingles vaccine on 2 different days? </label></div>
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

                        <button type="submit">Check status</button>
                    </form>
                </div>
            </div>
        
        {this.state.guestResults.length >= 0 ? 
        this.feedback() 
        : null}
        </React.Fragment>
        )
    }
}

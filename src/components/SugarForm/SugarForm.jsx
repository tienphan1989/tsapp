import React, { Component } from 'react';
import { Button } from "@material-ui/core";
import "./SugarForm.css";
import SugarFeedback from './SugarFeedback';
import FormErrors from '../../helpers/FormErrors';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Grow from '@material-ui/core/Grow';

export default class SugarForm extends Component {
    state = {
        currentUser: {},
        age: '',
        result: '',
        open: false,
        modalOpen: false,
        formErrors: {},
        formValid: false,
        TermsConditions: false
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
        this.setState({[name]:value}, this.validateForm);
    };

    handleSubmit = () => {
        const sugarResult = parseInt(this.state.result, 10);
        if(localStorage.token){
        fetch('http://localhost:3000/api/v1/sugarscreen', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.token}`
            },
            body: JSON.stringify({sugar: {
            user_id: this.state.currentUser.id,
            result: sugarResult
            }})
        })
        .then(resp => resp.json())
        .then(this.resetFormErrors())}
        else{
            return;
        }
    };

    clearForm = () => {
        this.setState({
            age: '',
            result: '',
            fasting: null,
            TermsConditions: false,
            open: false
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

    handleModalOpen = () => {
        this.setState({
            modalOpen: true
        })
    };

    handleModalClose = () => {
        this.setState({
            modalOpen: false
        })
    };

    resetFormErrors = () => {
        this.setState({formErrors: {}})
    };

    validateForm = () => {
        let formErrors = {}
        let formValid = true
        if(this.state.age <= 17) {
            formErrors.age = ["User must be at least 18 years of age"]
            formValid = false
        }
        else if(parseInt(this.state.result, 10) <= 40) {
            formErrors.result = ["requires valid number"]
            formValid = false
        }
        else if(this.state.result === '') {
            formErrors.result = ["requires valid number"]
            formValid = false
        }
        this.setState({formValid: formValid, formErrors: formErrors})
    }

    render() {
    return (
    <React.Fragment>
    <div className="sugar-container">
        <div className='sugar-form-div'>
            <form onSubmit={this.handleClickOpen}>
                <h3 className='sugar-form-title'>Sugar Screen</h3>
                {!localStorage.token &&
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
                </div>}

                <div className="sugar-value">
                    <label htmlFor='result'>Blood sugar reading: </label>
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

                {!localStorage.token &&
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
                </div>}

                <FormErrors formErrors = {this.state.formErrors}/>
                <div className="sugar-submit-button">
                    <Button variant="contained" color="secondary" type="submit" disabled={!this.state.formValid}>
                        Submit
                    </Button>
                </div> 

                <div className='sugar-query-div'>
                    <Button className='sugar-query-p' onClick={this.handleModalOpen}>
                        Click here to learn how to test blood sugar
                    </Button>
                    <Modal
                        className='modal'
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        open={this.state.modalOpen}
                        onClose={this.handleModalClose}
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                            timeout: 500,
                        }}
                    >
                        <Grow in={this.state.modalOpen}>
                            <div className='modal-paper'>
                                <p id="transition-modal-title">1) Visit your local pharmacy for point of care testing (it's usually free!)</p>
                                <p id="transition-modal-description">2) Purchase a blood sugar monitor to check your status in the comfort of your own home. </p>
                                <p id="transition-modal-description">3) Your doctor will also have more in-depth tests to let you know your status!</p>
                            </div>
                        </Grow>
                    </Modal>
                </div>
            </form>
            <SugarFeedback 
            clearForm={this.clearForm} 
            open={this.state.open} 
            onClose={this.handleClose} 
            result={this.state.result}
            />
        </div>
    </div>
    </React.Fragment>
)}}

SugarForm.defaultProps = {
    TermsConditions: false
}
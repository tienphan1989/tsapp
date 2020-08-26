import React from 'react';
import "./Register.css";
import useForm from "./useForm";
import { Link } from 'react-router-dom';

const Register = (props) => {
    const { values, handleChange } = useForm({
        username: '', 
        password: '',
        age: null,
        diabetic: null,
        hypertensive: null,
        email: ''
    }, handleRegister);

    function handleRegister(event) {
      props.handleRegister(event, values)
    }

    return (
    <div className="login">
        <div className="login-container">
          <div className="login-header">
            <div>
              <p className='login-header'>New user</p>
              <form onSubmit={(e) => handleRegister(e)}>
                <div className="field">
                  <label className="login">Username</label>
                    <div className="control">
                        <input placeholder="username..." type='text' name="username" onChange={handleChange} value={values.username} required/> 
                    </div>
                </div>

                <div className="field">
                  <label className="login">Email</label>
                  <div className="control">
                  <input placeholder="email..." type='email' name="email" onChange={handleChange} value={values.email} required />
                  </div>
                </div>

                <div className="field">
                  <label className="login">Password</label>
                  <div className="control">
                  <input placeholder="password..." type='password' name="password" onChange={handleChange} value={values.password} required />
                  </div>
                </div>

                <div className="field">
                  <label className="login">Age: </label>
                    <div className="control">
                        <input placeholder="age..." type='number' name="age" onChange={handleChange} value={values.age} required/> 
                    </div>
                </div>

                <div className="field">
                    <label className="login">Have you been diagnosed with Diabetes?</label>
                    <input type="checkbox" name="diabetic" checked={null} onChange={handleChange} />
                </div>

                <div className="field">
                    <label className="login">Have you been diagnosed with high blood pressure?</label>
                    <input type="checkbox" name="hypertensive" checked={null} onChange={handleChange} />
                </div>

                <button type="submit" className="login submit-button">Create account</button>
                <button>
                  Already a member? <Link to='/login'>Login Page</Link>
                </button>
              </form>
            </div>
          </div>
        </div>
    </div>
    )
}

export default Register
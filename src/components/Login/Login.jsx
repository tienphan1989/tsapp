import React from "react";
import "./Login.css";
import useForm from "./useForm";
import { Link } from 'react-router-dom';

const Login = (props) => {
  const { values, handleChange } = useForm({ username: "", password: "" }, login);

  function login(event) {
    props.handleLogin(event, values);
  }

  return (
    <div className="login">
      <div className="login-container">
        <div className="login-header">
          <div>
            <p className="login-header">Login page</p>
            <form onSubmit={(e) => login(e)}>
              <div className="field">
                <label className="login">Username</label>
                <div className="control">
                  <input
                    className="login"
                    type="text"
                    name="username"
                    onChange={handleChange}
                    value={values.username}
                    required
                  />
                </div>
              </div>
              <div className="field">
                <label className="login">Password</label>
                <div className="control">
                  <input
                    className="login"
                    type="password"
                    name="password"
                    onChange={handleChange}
                    value={values.password}
                    required
                  />
                </div>
              </div>
              <button type="submit" className="login submit-button">
                Login
              </button>
              <button>
                Want to register? <Link to='/register'>Sign Up</Link>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

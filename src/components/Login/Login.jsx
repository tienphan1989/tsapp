import React from "react";
import "./Login.css";
import useForm from "./useForm";

const Login = (props) => {
  const { values, handleChange } = useForm({ name: "", password: "" }, login);

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
                    name="name"
                    onChange={handleChange}
                    value={values.name}
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
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

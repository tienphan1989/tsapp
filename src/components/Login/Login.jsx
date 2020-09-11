/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import "./Login.css";
import useForm from "./useForm";
import { Link } from 'react-router-dom';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Button from '@material-ui/core/Button';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Login = (props) => {
  const { values, handleChange } = useForm({ username: "", password: "" }, login);

  function login(event) {
      props.handleLogin(event, values);
  }

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
      setOpen(true);
  };

  const handleClose = (reason) => {
      if (reason === 'clickaway') {
      return;
  }

  setOpen(false);
  };

  return (
    <div className="login">
      <div className="login-container">
        <div className="login-header">
          <div>
            <p className="login-header">Login page</p>
            <form onSubmit={(e) => login(e)}>
              <div className="field">
                <label className="login" htmlFor='username'>Username</label>
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
                <label className="login" htmlFor='password'>Password</label>
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
              <button type="submit" className="login submit-button" onClick={handleClick}>
                Login
              </button>
                <Link to='/register'>
                  <Button variant='outlined' color='default'>Want to register?</Button>
                </Link>
                <Snackbar open={open} autoHideDuration={10000} onClose={handleClose}>
                  <Alert onClose={handleClose} severity="success">
                    Welcome back {values.username}!
                  </Alert>
                </Snackbar>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

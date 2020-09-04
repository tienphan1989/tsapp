import React from 'react';
import "./Register.css";
import useForm from "./useForm";
import { Link } from 'react-router-dom';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Register = (props) => {
    const { values, handleChange } = useForm({
        username: '', 
        password: '',
        age: null,
        email: ''
    }, handleRegister);

    function handleRegister(event) {
      props.handleRegister(event, values)
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

                <button type="submit" className="login submit-button" onClick={handleClick}>Create account</button>
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                  <Alert onClose={handleClose} severity="success">
                    Successful registration!
                  </Alert>
                </Snackbar>
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
import React from 'react';
import "./Register.css";
import useForm from "./useForm";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

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
                        <input placeholder="username..." type='text' name="username" onChange={handleChange} value={values.username} /> 
                    </div>
                </div>

                <div className="field">
                  <label className="login">Email</label>
                  <div className="control">
                  <input placeholder="email..." type='email' name="email" onChange={handleChange} value={values.email}  />
                  </div>
                </div>

                <div className="field">
                  <label className="login">Password</label>
                  <div className="control">
                  <input placeholder="password..." type='password' name="password" onChange={handleChange} value={values.password} />
                  </div>
                </div>

                <div className="field">
                  <label className="login">Age: </label>
                    <div className="control">
                        <input placeholder="age..." type='number' name="age" onChange={handleChange} value={values.age}/> 
                    </div>
                </div>

                <button type="submit" className="login submit-button" onClick={handleClick}>Create account</button>
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                  <Alert onClose={handleClose} severity="success">
                    Successful registration!
                  </Alert>
                </Snackbar>
                <button>

                  <br/>Already a member? <br/><Button variant='outlined' size='small' color='secondary'><Link to='./login'>Login Page</Link></Button>
                </button>
              </form>
            </div>
          </div>
        </div>
    </div>
    )
}

export default Register
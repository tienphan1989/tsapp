import React from "react";
import ReactDOM from 'react-dom';
import "./Login.css";
import { Formik } from "formik";
import useForm from "./useForm.jsx";

const Login = ({ isShowing, hide }) => isShowing ? ReactDOM.createPortal(
  
  <React.Fragment>
  <div class="login">
    <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
      <span aria-hidden="true">&times;</span>
    </button>
    <div class="login-triangle"></div>
    <h2 class="login-header">Log in</h2>
    <Formik
      initialValues={{ email: "", password: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit} class="login-container">
          <p>
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
          </p>
          {errors.email && touched.email && errors.email}
          <p>
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
          </p>
          {errors.password && touched.password && errors.password}
          <p>
            <input type="submit" value="Log in" disabled={isSubmitting} />
          </p>
        </form>
      )}
    </Formik>
  </div>
  </React.Fragment>, document.body
) : null;

export default Login;
export { Formik };

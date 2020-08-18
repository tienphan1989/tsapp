import React from 'react';
import "./BloodPressureForm.css";
import { Formik, Form, Field } from 'formik';
import Button from '@material-ui/core/Button';

export default function BloodPressureForm() {
  const required = "This field is required";
  const maxLength = "Your input exceed maximum length";

  const errorMessage = (error) => {
    return <div className="invalid-feedback">{error}</div>;
  };

  const validateUserName = (value) => {
    let error;
    if (!value) {
      error = required;
    } else if (value.length > 12) {
      error = maxLength;
    }
    return error;
  };

  const validateAge = (value) => {
    let error;
    if (!value) {
      error = required;
    }
    return error;
  };

  return (
    <Formik
      initialValues={{
        username: "",
        age: "",
        genderOptions: "",
        exercise: ""
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ errors, touched, isValidating }) => (
        <div className="container">
            <Form>
              <div className="form-group bp-username">
                <h3 className='bp-form-title'>Blood Pressure Intake</h3>
                <Field
                  className="form-control"
                  type="textarea"
                  placeholder="Username"
                  name="username"
                  validate={validateUserName}
                />
                {errors.username &&
                  touched.username &&
                  errorMessage(errors.username)}
              </div>
              <div className="form-group bp-gender">
                <label>Gender: </label>
                <br />
                <div className="form-check form-check-inline">
                  <Field
                    className="form-check-input"
                    type="radio"
                    name="genderOptions"
                    value="Male"
                    id="inlineRadio1"
                  />
                  <label className="form-check-label" htmlFor="inlineRadio1">
                    Male
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <Field
                    className="form-check-input"
                    type="radio"
                    name="genderOptions"
                    value="Female"
                    id="inlineRadio2"
                  />
                  <label className="form-check-label" htmlFor="inlineRadio2">
                    Female
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <Field
                    className="form-check-input"
                    type="radio"
                    name="genderOptions"
                    value="noInput"
                    id="inlineRadio3"
                  />
                  <label className="form-check-label" htmlFor="inlineRadio3">
                    Rather not say
                  </label>
                </div>
              </div>
              <div className="form-group">
                <Field
                  className="form-control"
                  type="number"
                  placeholder="Age"
                  name="Age"
                  validate={validateAge}
                />
                {errors.Age &&
                  touched.Age &&
                  errorMessage(errors.Age)}
              </div>
              <div className="form-group">
                <Field
                  className="form-control"
                  type="number"
                  placeholder="Systolic Pressure"
                  name="Systolic Pressure"
                />
              </div>
              <div className="form-group">
                <Field
                  className="form-control"
                  type="number"
                  placeholder="Dystolic Pressure"
                  name="Dystolic Pressure"
                />
              </div>
              <div className="form-group">
                <Field
                  type="checkbox"
                  placeholder="By clicking, I agree to the T.O.S. "
                  name="TermsConditions"
                  id="customCheck1"
                />
                <label htmlFor="customCheck1">By clicking, I agree to the T.O.S.</label>
              </div>
              <div className="form-group">
              <Button variant="contained" color="secondary" type="submit">
                  Get my results!
              </Button> 
              </div>
            </Form>
        </div>
      )}
    </Formik>    
  )
}
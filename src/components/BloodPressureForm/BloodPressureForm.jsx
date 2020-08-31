import React from 'react';
import "./BloodPressureForm.css";
import { Formik, Form, Field } from 'formik';
import Button from '@material-ui/core/Button';

export default function BloodPressureForm() {
  const required = "This field is required";

  const errorMessage = (error) => {
    return <div className="invalid-feedback">{error}</div>;
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
        age: "",
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
            <h3 className='bp-form-title'>Blood Pressure Screen</h3>
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
                  placeholder="Diastolic Pressure"
                  name="Diastolic Pressure"
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
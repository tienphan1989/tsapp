import React from 'react';
import "./BloodPressureForm.css";
import { Formik, Form, Field } from 'formik';
import Button from '@material-ui/core/Button';
import configObj from '../../../src/helpers/configObj';

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
        Age: "",
        SystolicPressure: '',
        DiastolicPressure: '',
        TermsConditions: ''
      }}

      onSubmit={(values, { setSubmitting, resetForm }) => {
        const { SystolicPressure, DiastolicPressure } = values;
        fetch('http://localhost:3000/api/v1/bpscreen', configObj("POST", true, {bp: {
          user_id: localStorage.userID,
          systolic_pressure: SystolicPressure,
          diastolic_pressure: DiastolicPressure
          }}))
        .then((response) => response.json())
        .then(console.log)
        setSubmitting(false);
        resetForm({values: ''});
      }}
    >
      {({ errors, touched, isValidating }) => (
        <div className="bp-container">
          <div className="form-div">
          <Form>
            <h3 className='bp-form-title'>Blood Pressure Screen</h3>
              {!localStorage.token ? 
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
              : null}

              <div className="form-group">
                <Field
                  className="form-control"
                  type="number"
                  placeholder="Systolic Pressure"
                  name="SystolicPressure"
                />
              </div>

              <div className="form-group">
                <Field
                  className="form-control"
                  type="number"
                  placeholder="Diastolic Pressure"
                  name="DiastolicPressure"
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
                  submit
              </Button> 
              </div>
            </Form>
            </div>
        </div>
      )}
    </Formik>    
  )
}
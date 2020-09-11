import React from "react";
import "./BloodPressureForm.css";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function BpFeedback(props) {
  const { open, systolic_pressure, clearForm } = props;

  const feedback = () => {
    if (systolic_pressure < 120) {
      return (
        <div className="great-feedback-div">
          <div className="feedback-text">
            <p>
              Wow! Your blood pressure is outstanding.<br></br>
              Keep it up and continue to take care of your body.
            </p>
            <Link to="/resources">
              <p>Check out our dietary tips!</p>
            </Link>
            <Button variant="contained" onClick={clearForm}>
              Done
            </Button>
            {!localStorage.token && (
              <Link to="/register">
                <Button>Click to register & track results</Button>
              </Link>
            )}
          </div>
        </div>
      );
    } else if (systolic_pressure <= 130) {
      return (
        <div className="good-feedback-div">
          <div className="feedback-text">
            <p>
              Your result is just a tiny bit higher than it should be.
              <br />A goal of under 120/80 would be perfect!
            </p>
            <p>
              Don't worry. This could be due to recent exercise or even factors
              like stress.
            </p>
            <Link to="/resources">
              <p>Check out our dietary tips!</p>
            </Link>
            <Button variant="contained" onClick={clearForm}>
              close
            </Button>
            {!localStorage.token && (
              <Link to="/register">
                <Button>Click to register & track results</Button>
              </Link>
            )}
          </div>
        </div>
      );
    } else if (systolic_pressure <= 140) {
      return (
        <div className="average-feedback-div">
          <div className="feedback-text">
            <p>
              Your result is just a little higher than ideal...
              <br />
              aim for 129.
              <br />
              Relax and check back later (at least 15 minutes)
            </p>
            <p>
              If you continue to have results like this, consider asking your
              doctor for feedback. <br />
              Testing can help you improve your health quicker.
            </p>
            <Link to="/resources">
              <p>see diet tips!</p>
            </Link>
            <Button variant="contained" onClick={clearForm}>
              close
            </Button>
            {!localStorage.token && (
              <Link to="/register">
                <Button>Click to register & track results</Button>
              </Link>
            )}
          </div>
        </div>
      );
    } else if (systolic_pressure <= 179) {
      return (
        <div className="below-feedback-div">
          <div className="feedback-text">
            <p>Oh my!...we are aiming for at least 140.</p>
            <p>
              Try and relax, and try again later (at least 15 minutes) to see
              how you are doing.
            </p>
            <p>
              If results continue like this, take action and ask your doctor for
              guidance.
            </p>
            <Link to="/resources">
              <p>see dietary section for advice</p>
            </Link>
            <Button variant="contained" onClick={clearForm}>
              close
            </Button>
            {!localStorage.token && (
              <Link to="/register">
                <Button>Click to register & track results</Button>
              </Link>
            )}
          </div>
        </div>
      );
    } else if (systolic_pressure >= 180) {
      return (
        <div className="bad-feedback-div">
          <div className="feedback-text">
            <p>Results are NOT good. Do you feel alright?</p>
            <p>
              Consider asking your doctor for further testing.
              <br />
              Remember to take your medicine as directed by your doctor.
            </p>
            <p>This score is very alarming so take action today.</p>
            <Link to="/resources">
              <p>check dietary tips & recipes</p>
            </Link>
            <Button variant="contained" onClick={clearForm}>
              close
            </Button>
            {!localStorage.token && (
              <Link to="/register">
                <Button>Click to register & track results</Button>
              </Link>
            )}
          </div>
        </div>
      );
    }
  };

  return (
    <Dialog
      onClick={() => clearForm()}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <DialogTitle id="simple-dialog-title" style={{ padding: "0px" }}>
        <div className="feedback-div2">{feedback()}</div>
      </DialogTitle>
    </Dialog>
  );
}

BpFeedback.defaultProps = {
  systolic_pressure: 110,
};

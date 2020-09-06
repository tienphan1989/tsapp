import React from "react";
import "./SugarForm.css";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function SugarFeedback(props) {
  const { open, clearForm, result } = props;
  const sugarResult = parseInt(result, 10);

  const feedback = () => {
    if (sugarResult < 80) {
      return (
        <div className="average-feedback-div">
          <div className="feedback-text">
            <p>Your result is TOO low.<br/>
            This could be due to fasting or any other health changes.</p>
            <p>
              Do you feel dizzy or weak? If so, possibly request help.
            </p>
            <p>DID YOU KNOW?...more 1/3 of Americans have prediabetes.</p>
            <Link to="/resources">
              <p>see diet tips for more knowledge</p>
            </Link>
            <Button variant="contained" onClick={clearForm}>
              close
            </Button>
            {!localStorage.token && (
              <Link to="/register">
                <Button>
                Click to register & track results
                </Button>
              </Link>
            )}
          </div>
        </div>
      );
    } else if (sugarResult <= 130) {
      return (
        <div className="great-feedback-div">
          <div className="feedback-text">
            <p>
              Fantastic job! Your blood sugar is right where it should be.<br/>
            Keep it up and continue to take care of your body.</p>
            <p>
              DID YOU KNOW?...8/10 adults with prediabetes don't know they have
              it.
            </p>
            <Link to="/resources">
              <p>browse diet tips</p>
            </Link>
            <Button variant="contained" onClick={clearForm}>
              close
            </Button>
            {!localStorage.token && (
              <Link to="/register">
                <Button>
                Click to register & track results
                </Button>
              </Link>
            )}
          </div>
        </div>
      );
    } else if (sugarResult < 180) {
      return (
        <div className="below-feedback-div">
          <div className="feedback-text">
            <p>Your result is a little higher than it should be.<br/>
              This could be due to eating in the last 1-2 hours or even factors
              like stress.
            </p>
            <p>You are close to the goal, keep PUSHING!</p>
            <p>
              DID YOU KNOW?...Losing 5-7% of total body weight reduces the
              incidence of diabetes by 58%.
            </p>
            <Link to="/resources">
              <p>check out some dietary tips</p>
            </Link>
            <Button variant="contained" onClick={clearForm}>
              close
            </Button>
            {!localStorage.token && (
              <Link to="/register">
                <Button>
                Want to track results?
                </Button>
              </Link>
            )}
          </div>
        </div>
      );
    } else if (sugarResult >= 180) {
      return (
        <div className="bad-feedback-div">
          <div className="feedback-text">
            <p>
              Oh no! the result is much higher than ideal...aim
              for under 180.
            </p>
            <p>Try and relax, and try again later to see how you are doing.<br/>
              If you continue to have results like this, consider asking your
              doctor for more testing.
            </p>
            <p>
              If you are more than 2 hours after a meal, consider this a
              possible sign of poor health.
            </p>
            <Link to="/resources">
              <p>Check out dietary tips</p>
            </Link>
            <Button variant="contained" onClick={clearForm}>
              close
            </Button>
            {!localStorage.token && (
              <Link to="/register">
                <Button>
                Want to track results?
                </Button>
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
        <div className="feedback-div2">
          {feedback()}
        </div>
      </DialogTitle>
    </Dialog>
  );
}

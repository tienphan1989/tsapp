import React from "react";
import "./VaccineForm.css";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function VaccineFeedback(props) {
  const {
    open,
    clearForm,
    tetanus,
    flu,
    pneumonia,
    shingles,
    shinglesTwoDay,
    age,
  } = props;
  const currentAge = parseInt(age, 10);
  const allFeedback = () => {
    return (
      <React.Fragment>
        <div className="vaccine-feedback-div">
          <div>
            {tetanus === "yes" ? (
              <div className='great-feedback-div'>
                <p>
                  Tetanus: <em>COVERED</em> <br/>Remember, this is due once
                  every 10 years
                </p>
                <p>
                  FACT: tetanus vaccine is recommended during each
                  pregnancy to protect the newborn
                </p>
              </div>
            ) : (
              <div className='bad-feedback-div'>
                <p>Tetanus: RECOMMENDED</p>
                <p>
                  DID YOU KNOW?..adults need a booster dose every 10
                  years
                <br/>
                  or earlier in the case of a dirty wound or burn
                </p>
                {!localStorage.token && (
                  <Link
                    to={{
                      pathname:
                        "https://www.cdc.gov/vaccines/hcp/vis/vis-statements/tdap.html",
                    }}
                    target="_blank"
                  >
                    <p>Click to learn more about the tetanus vaccine</p>
                  </Link>
                )}
              </div>
            )}
          </div>

          <div>
            {pneumonia === "yes" ? (
              <div className='great-feedback-div'>
                <p>Pneumonia: <em>COVERED</em></p>
                <p>
                  This is due one time before 65 years of age and one time after
                  turning 65.
                </p>
                <p>
                FACT: There are two kinds of pneumococcal vaccines
                  available in the United States
                </p>
              </div>
            ) : (
              <div className='good-feedback-div'>
                <p>DEPENDS: Pneumonia</p>
                <p>
                  All people 2 years or older with certain medical conditions
                  are recommended to get vaccinated. <br/>Confirm with your doctor
                </p>
                <p>
                  Since this vaccine came out, rates of invasive pneumococcal
                  disease have declined by 99% in the United States since 2000
                </p>
                {!localStorage.token && (
                  <Link
                    to={{
                      pathname:
                        "https://www.cdc.gov/vaccines/hcp/vis/vis-statements/pcv13.html",
                    }}
                    target="_blank"
                  >
                    <p>
                      Click to learn more about the pneumococcal vaccine
                    </p>
                  </Link>
                )}
              </div>
            )}
          </div>

          <div>
            {shingles === "yes" ? (
              <div className='great-feedback-div'>
                <p>Shingles: <em>COVERED</em></p>
                <p>
                FACT: 1/2 of people who reach age 85 will have had
                  shingles at some point
                </p>
              </div>
            ) : (
              <div className='bad-feedback-div'>
                <p>Shingles: RECOMMENDED</p>
                <p>
                  DID YOU KNOW?...they are caused by the same virus, but shingles
                  and chickenpox are NOT the same illness
                </p>
                <p>
                  A shingles vaccine could lower your chances of a second
                  infection, even if you get the shot after you’ve already had
                  shingles
                </p>
                {!localStorage.token && (
                  <Link
                    to={{
                      pathname:
                        "https://www.cdc.gov/vaccines/hcp/vis/vis-statements/shingles-recombinant.html",
                    }}
                    target="_blank"
                  >
                    <p>Click to learn more about the Shingles vaccine</p>
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
      </React.Fragment>
    );
  };

  const fluFeedback = () => {
    return (
      <div>
        {flu === "yes" && currentAge >= 65 ? (
          <div className='great-feedback-div'>
            <p>
              Flu: <em>COVERED</em> <br/>You help protect everybody else too when you
              get vaccinated
            </p>
          </div>
        ) : (
          <div className='bad-feedback-div'>
            <p>Flu: RECOMMENDED</p>
            <p>
              DID YOU KNOW?..There are two main types of influenza virus: Types
              A and B
            </p>
            <p>
              People 65 years and older are recommended to get the High Dose flu
              shot
            </p>
            <p>
              High-Dose flu has four times the antigen, the part of the
              vaccine that helps the body protect against viruses
            </p>
            {!localStorage.token && (
              <Link
                to={{
                  pathname:
                    "https://www.cdc.gov/vaccines/hcp/vis/vis-statements/flu.html",
                }}
                target="_blank"
              >
                <p>Click here to learn more about the Flu vaccine</p>
              </Link>
            )}
          </div>
        )}
      </div>
    );
  };

  const shinglesFeedback = () => {
    return (
      <div>
        {shinglesTwoDay === "yes" && age >= 65 ? (
          <div className='great-feedback-div'>
            <p>Shingles: <em>COVERED</em></p>
            <p>
            FACT: this vaccine can lower your chances by more than
              90%
            </p>
            <p>
              Anyone who has ever had chickenpox can get shingles, but the risk
              increases with age
            </p>
          </div>
        ) : (
          <div className='average-feedback-div'>
            <p>RECOMMENDED: Shingles followup appointment</p>
            <p>
              There is a new shingles vaccine (called Shingrix) released in 2018
              that is twice as effective as previous vaccine
            </p>
            <p>
              If you only remember one dose, verify with your healthcare
              provider
            </p>
            <p>
              The former vaccine was given ONCE. The new vaccine is done on TWO
              seperate days
            </p>
            {!localStorage.token && (
              <Link
                to={{
                  pathname: "https://www.shingrix.com/discover-shingrix.html",
                }}
                target="_blank"
              >
                <p>Take action and make sure you are protected!</p>
              </Link>
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <Dialog
      onClick={() => clearForm()}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <DialogTitle id="simple-dialog-title" style={{ padding: "0px" }}>
        <div className="feedback-div2">
          {allFeedback()}
          {fluFeedback()}
          {shingles === "yes" && shinglesFeedback()}
          <Button variant="contained" onClick={clearForm}>
            close
          </Button>
        </div>
      </DialogTitle>
    </Dialog>
  );
}

VaccineFeedback.defaultProps = {
  shinglesTwoDay: "no",
};

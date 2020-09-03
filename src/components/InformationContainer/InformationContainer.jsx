import React, { Component } from "react";
import "./InformationContainer.css"

export default class InformationContainer extends Component {
  render() {
    return (
      <div>
        <div className="features-outside">
          <h1>Redefine your health!</h1>
          <div className="features-inside">
            <div className="benefits-div">
              <h3>LEARN.</h3>
              <p>Get instant insight to improve diabetes management.</p>
              <h3>PRECISE AND PERSONALIZED.</h3>
              <p>Feedback becomes specific to the individual over time and provide meaningful and actionable insights.</p>
              <h3>ACTIONABLE.</h3>
              <p>Designed to prompt action or learning at moments that matter.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

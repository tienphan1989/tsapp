import React, { Component } from "react";
import glucometer from "./glucometer.png";
import "./InformationContainer.css"

export default class InformationContainer extends Component {
  render() {
    return (
      <div>
        <div className="features-outside">
          <div className="features-inside">
            <img src={glucometer} alt="glucometer" className="image-glucometer"/>
          </div>
          <h3>Additional Info.</h3>
          <h3>Explain benefits of being adherent & knowledgeable</h3>
        </div>
      </div>
    );
  }
}

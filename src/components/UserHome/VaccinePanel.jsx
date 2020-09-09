import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import PrintIcon from '@material-ui/icons/Print';
export default class VaccinePanel extends Component {
  state = {
    currentUser: {
      vaccination_record: "",
    },
  };

  componentDidMount() {
    fetch(`http://localhost:3000/api/v1/users/${localStorage.userID}`)
      .then((response) => response.json())
      .then((user) =>
        this.setState({
          currentUser: user,
        })
      );
  }

  render() {
    return (
      <React.Fragment>
        {this.state.currentUser.vaccination_record !== null ? (
          <div className="sample-div">
            <h2>Vaccine status <PrintIcon style={{float: 'right'}}/></h2>
            
            <p>
              Tetanus:{" "}
              {this.state.currentUser.vaccination_record.tetanus
                ? "Covered"
                : "Not covered"}
            </p>
            <p>
              Flu:{" "}
              {this.state.currentUser.vaccination_record.flu
                ? "Covered"
                : "Not covered"}
            </p>
            <p>
              Pneumonia:{" "}
              {this.state.currentUser.vaccination_record.pneumonia
                ? "Covered"
                : "Not covered"}
            </p>
            <p>
              Shingles:{" "}
              {this.state.currentUser.vaccination_record.shingles
                ? "Covered"
                : "Not covered"}
            </p>
            <Button variant="contained" color="default" href="/vaccinescreen">
              update record
            </Button>
          </div>
        ) : (
          <Button variant="contained" color="secondary" href="/vaccinescreen">
            Create new record
          </Button>
        )}
      </React.Fragment>
    );
  }
}

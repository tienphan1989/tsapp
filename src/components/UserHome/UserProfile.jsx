import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { Paper } from "@material-ui/core";

export default class UserProfile extends Component {
  state = {
    currentUser: {},
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
      <Paper className="profile-card">
        <h4>Name: {this.state.currentUser.username}</h4>
        <Button variant="contained" color="primary" size="small" style={{ padding: '1px'}}>
          edit account
        </Button>
      </Paper>
    );
  }
}

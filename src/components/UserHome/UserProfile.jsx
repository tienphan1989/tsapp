import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { Paper } from "@material-ui/core";
import UserGoals from './UserGoals'

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
        <h4>Name: {this.state.currentUser.username}<br/>
        age: {this.state.currentUser.age}</h4>
        <Button variant="contained" color="secondary" size="small" style={{ padding: '0.5px'}}>
          Edit account
        </Button>
        <br />
        <Button variant="contained" color="secondary" size="small" style={{ padding: '0.5px', marginBottom:'5px'}}>
          Delete account
        </Button>
        <UserGoals/>
      </Paper>
    );
  }
}

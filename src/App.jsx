import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./App.css";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import HeroContainer from "./components/HeroContainer/HeroContainer";
import MainContainer from "./components/MainContainer/MainContainer";
import InformationContainer from "./components/InformationContainer/InformationContainer";
import BloodPressureForm from "./components/BloodPressureForm/BloodPressureForm";
import SugarForm from "./components/SugarForm/SugarForm";
import VaccineForm from "./components/VaccineForm/VaccineForm";
import Footer from "./components/Footer/Footer";
import UserHome from "./components/UserHome/UserHome.jsx";
import Login from "./components/Login/Login.jsx";
import Register from "./components/Register/Register.jsx";
import configObj from "./helpers/configObj.js";

class App extends React.Component {
  state = {
    loggedIn: false,
  };

  signUp = (event, newUser) => {
    event.preventDefault();
    const { username, password, age, email, diabetic, hypertensive } = newUser;

    fetch("http://localhost:3000/api/v1/register", configObj("POST", true, { username, password, age, email, diabetic, hypertensive }))
    .then((response) => response.json())
    .then((user) => {
      localStorage.setItem("token", user.token);
      localStorage.setItem("userId", user.user.id);
      //  localStorage.token = user.token;
      //  localStorage.current = user.user.id
      this.setState({
            loggedIn: true
          },
          <Redirect to="/home" />
        );
      })
      .catch((error) => alert(error));
  };

  handleLogin = (event, user) => {
    event.preventDefault();
    const { username, password } = user;

    fetch("http://localhost:3000/api/v1/login", configObj("POST", true, { username, password }))
    .then((r) => r.json())
    .then((user) => {
      localStorage.token = user.token;
      //  localStorage.setItem("token", user.token);
      //  localStorage.setItem("userId", user.user.id);
      //  localStorage.current = user.user.id
      this.setState({
          loggedIn: true,
      });
    })
    .catch((error) => alert(error));
  };

  logOut = (e) => {
    e.preventDefault();
    localStorage.clear();
    this.setState({
        loggedIn: false
    },
    alert("Successful logout!"),
    <Redirect to="/hero" />
    );
  };

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <CssBaseline/>
          <Header loggedIn={this.state.loggedIn} logOut={this.logOut} />
          <Switch>
            <Route
              path="/login"
              render={(routeProps) => (
                <Login
                  handleLogin={this.handleLogin}
                  loggedIn={this.state.loggedIn}
                  {...routeProps}
                />
              )}
            />
            {/* <Route path="/login" render={(routeProps) => (this.state.loggedIn) ? <Redirect to="/" /> : 
          <Login setUsername={this.setUsername} setPassword={this.setPassword}
          {...routeProps} logIn={this.logIn} /> }/> */}

            <Route
              path="/register"
              render={(routeProps) => (
                <Register signUp={this.signUp} {...routeProps} />
              )}
            />
            {/* <Route path="/register" render={(routeProps) => (this.state.loggedIn) ? <Redirect to="/" /> :
          <Register setUsername={this.setUsername} setPassword={this.setPassword}
          signUp={this.signUp} {...routeProps} /> } /> */}

            <Route
              path="/home"
              render={(routeProps) => <UserHome {...routeProps} />}
            />
            <Route path="/bpscreen" component={BloodPressureForm} />
            <Route path="/sugarscreen" component={SugarForm} />
            <Route path="/vaccinescreen" component={VaccineForm} />
            <Route path="/hero" component={HeroContainer} />
            <Route path="/main" component={MainContainer} />
            <Route path="/info" component={InformationContainer} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
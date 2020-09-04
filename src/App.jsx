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
    currentUser: {},
    loggedIn: false,
  };

  componentDidMount() {
    if(localStorage.token) {
      this.setState({
        loggedIn: true
      })
    }
  }

  handleLogin = (event, user) => {
    event.preventDefault();
    const { username, password } = user;

    fetch('http://localhost:3000/api/v1/login', configObj("POST", true, {username, password }))
    .then((response) => response.json())
    .then((data) => {
      localStorage.token = data.token
      localStorage.userName = data.user.username
      localStorage.userID = data.user.id
      this.setState({ loggedIn: true });
      })
    .catch((error) => alert(error));
  };

  handleRegister = (event, newUser) => {

    const newUserAge = parseInt(newUser.age, 10);
    event.preventDefault();
    const { username, password, email } = newUser;

    fetch('http://localhost:3000/api/v1/register', configObj("POST", true, {user: { username, password, newUserAge, email }}))
    .then((response) => response.json())
    .then((data) => {
      localStorage.token = data.token
      localStorage.userName = data.user.username
      localStorage.userID = data.user.id
      this.setState({ loggedIn: true });
      })
    .catch((error) => alert(error));
  };

  logOut = (event) => {
    event.preventDefault();
    localStorage.clear();
    this.setState({
    loggedIn: false
    },
    alert("Successful logout!"));
  };

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <CssBaseline/>
          <Header loggedIn={this.state.loggedIn} logOut={this.logOut}/>
          <Switch>

          {/* <Route path="/">
            <Header loggedIn={this.state.loggedIn} logOut={this.logOut} />
          </Route> */}

            <Route exact path="/login" render={(routeProps) => (this.state.loggedIn) 
            ? 
            <Redirect to='/home'/> 
            :
            <Login handleLogin={this.handleLogin} {...routeProps}/>}/>

            <Route exact path="/register" render={(routeProps) => (this.state.loggedIn) 
            ? 
            <Redirect to='/home'/>
            :
            <Register handleRegister={this.handleRegister} {...routeProps} />}/>
            
            <Route exact path="/home" render={(routeProps) => (this.state.loggedIn) 
            ? 
            <UserHome logOut={this.logOut} {...routeProps}/> 
            :
            <Redirect to='/login' /> }/>

            <Route exact path="/vaccineform/:id/edit" render={routeProps => (
              <VaccineForm {...routeProps} />
            )} />
            
            <Route exact path="/" component={HeroContainer}/>
            <Route exact path="/bpscreen" component={BloodPressureForm}/>
            <Route exact path="/sugarscreen" component={SugarForm}/>
            <Route exact path="/vaccinescreen" component={VaccineForm}/>
            <Route exact path="/main" component={MainContainer}/>
            <Route exact path="/info" component={InformationContainer}/>

          </Switch>
            <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
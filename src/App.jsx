import React from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css'
import Header from "./components/Header/Header.jsx";
import HeroContainer from "./components/HeroContainer/HeroContainer";
import MainContainer from './components/MainContainer/MainContainer';
import InformationContainer from './components/InformationContainer/InformationContainer';
import BloodPressureForm from "./components/BloodPressureForm/BloodPressureForm";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Register from "./components/Register/Register.jsx";
import UserHome from "./components/UserHome/UserHome.jsx";

import Form from './components/Login/Form';
import Login from "./components/Login/LoginFormik.jsx";


export default class App extends React.Component{
  state = {
    username: "",
    password: "",
    loggedIn: false
  }

  setUsername= (e) => {
    this.setState({
      username: e.target.value
    })
  }

  setPassword = (e) => {
    this.setState({
      password: e.target.value
    })
  }

  signUp = (e) => {
    e.preventDefault()

    const newUser = {
      username: this.state.username,
      password: this.state.password
    }

    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      }, 
      body: JSON.stringify({newUser})
    }

    fetch("http://localhost:3000/api/v1/users", options)
    .then(response => response.json())
    .then(data => {
      localStorage.setItem("token", data.token)
      localStorage.setItem("userId", data.user.id)
      this.setState({ loggedIn: true, userId: data.user.id })
    })
    .catch(error => alert(error))
  }

  handleLogin = (data) => {
    console.log('data: ', data);
    localStorage.token = data.token;
    localStorage.current = data.user.id
    this.setState({
      loggedIn: true,
      current_user: data.user
    });
  }
 

  logOut = () => {
    localStorage.clear()
    this.setState({
      loggedIn: false,
      current_user: null
    })
  }

  logIn = (e) => {
    e.preventDefault()
    let options = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    }

    fetch("http://localhost:3000/api/v1/login", options)
    .then(response => response.json())
    .then(data => {
      localStorage.setItem("token", data.token)
      localStorage.setItem("userId", data.user.id)
      this.setState({loggedIn: true})
    })
  }

  logOut = (e) => {
    e.preventDefault()
    this.setState({
      username: "",
      password: "",
      loggedIn: false,
      userId: ""
    }, localStorage.clear(), alert("You have been logged out!"), <Redirect to="/" />)
  }

  showHeader = () => {
    if (this.state.loggedIn) {
      return (
        <Header logOut={this.logOut} />
      )
    } else {
      return (
        <Header loginCheck={this.loginCheck}/>
      )
    }
  }

  loginCheck = () => {
    alert("Sorry! You must be logged in.")
  }

  render(){
  return(
    <BrowserRouter>
      <div className="App">
      {/* <Header logOut={this.logOut} logIn={this.logIn} loggedIn={this.state.loggedIn} /> */}
        <CssBaseline/>
        {this.showHeader()}
        <Switch>

          <Route path="/login" render={(routeProps) => (this.state.loggedIn) ? <Redirect to="/" /> : 
          <Login setUsername={this.setUsername} setPassword={this.setPassword}
          {...routeProps} logIn={this.logIn} /> }/>

          <Route path="/register" render={(routeProps) => (this.state.loggedIn) ? <Redirect to="/" /> :
          <Register setUsername={this.setUsername} setPassword={this.setPassword}
          signUp={this.signUp} {...routeProps} /> } />

          <Route path="/home" render={(routeProps) => <UserHome {...routeProps}/>} />


          <Route path="/bpscreening" component={BloodPressureForm}/>
          <Route path="/index" component={HeroContainer}/>
          <Header />
          <MainContainer/> 
          <InformationContainer/>
          <Footer/>
        </Switch>
      </div>
    </BrowserRouter>
    )
  }
};

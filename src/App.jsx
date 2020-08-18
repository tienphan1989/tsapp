import React from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from "./components/Header/Header.jsx";
import HeroContainer from "./components/HeroContainer/HeroContainer";
import MainContainer from './components/MainContainer/MainContainer';
import InformationContainer from './components/InformationContainer/InformationContainer';
import BloodPressureForm from "./components/BloodPressureForm/BloodPressureForm"
import Footer from "./components/Footer/Footer";
import Form from './components/Login/Form';
//import { BrowserRouter, Router, Route } from "react-router-dom";

const App = () => {
  return(
    <div className="App">
      <CssBaseline/>
      <Header />
      <Form />
      <HeroContainer/>
      <MainContainer/> 
      <InformationContainer/>
      <BloodPressureForm/>
      <Footer/>
    </div>
  )
};

export default App;
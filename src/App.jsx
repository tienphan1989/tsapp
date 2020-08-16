import React from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from "./components/Header/Header";
import HeroContainer from "./components/HeroContainer/HeroContainer";
import MainContainer from './components/MainContainer/MainContainer';
import InformationContainer from './components/InformationContainer/InformationContainer';
import Footer from "./components/Footer/Footer";
//import {BrowserRouter, Route} from "react-router-dom";

const App = () => {
  return(
    // <BrowserRouter>
      <>
        <CssBaseline/>
        <Header/>
        <HeroContainer/>
        <MainContainer/> 
        <InformationContainer/>
        <Footer/>
      </>
    // </BrowserRouter>
  )
};

export default App;

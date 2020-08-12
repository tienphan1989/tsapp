import React from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from "./components/Header/Header";
import TitleBar from "./components/TitleBar/TitleBar";
import HeroContainer from "./components/HeroContainer/HeroContainer";
import MainContainer from './components/MainContainer/MainContainer';
import InformationContainer from './components/InformationContainer/InformationContainer';
import Footer from "./components/Footer/Footer";

const App = () => (
  <>
    <CssBaseline/>
    <Header/>
    <TitleBar/>
    <HeroContainer/>
    <MainContainer/> 
    <InformationContainer/>
    <Footer/>
  </>
);

export default App;

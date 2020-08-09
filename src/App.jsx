import React from "react";
import Header from "./components/Header/Header";
import TitleBar from "./components/TitleBar/TitleBar";
import Footer from "./components/Footer/Footer";
import MainContainer from './components/MainContainer/MainContainer';


const App = () => (
  <>
    <Header />
    <TitleBar />
    <MainContainer/> 
    <Footer />
  </>
);

export default App;

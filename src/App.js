import { Component } from "react";
import About from "./About/About";
import Contact from "./Contact/Contact";
import { Footer } from "./Footer/Footer";
import Home from "./Home/Home"
import Navbar from "./Navbar/Navbar";
import Portfolio from "./Portfolio/Portfolio";
export default class App extends Component{
  state = {};
  render(){
    return(
      <>
      <Navbar/>
      <Home/>
      <Portfolio/>
      <About/>
      <Contact/>
      <Footer/>
      </>
    )
  }
}
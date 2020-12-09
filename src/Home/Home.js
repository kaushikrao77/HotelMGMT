import React, { Component } from "react";
import Slider from "./Slider";
import Aboutus from "./Aboutus";
import Services from "./Services";
import Footer from "../Footer";
import "./Home.css";
class Home extends Component {
  render() {
    return (
      <div className="home">
        <Aboutus></Aboutus>
        <Slider></Slider>
        <Services></Services>
        <Footer />
      </div>
    );
  }
}

export default Home;

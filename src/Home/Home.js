import React, { Component } from "react";
import Slider from "./Slider";
import Aboutus from "./Aboutus";
import Services from "./Services";
import "./Home.css";
class Home extends Component {
	render() {
		return (
			<div className="home">
				<Aboutus></Aboutus>
				<Slider></Slider>
				<Services></Services>
			</div>
		);
	}
}

export default Home;

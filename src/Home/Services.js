import React, { Component } from "react";
import Serviceitem from "./Serviceitem";
import "./services.css";
import towel from "./servicesimg/towel.png";
import bed from "./servicesimg/bed.png";
import clock from "./servicesimg/clock.png";
import cocktail from "./servicesimg/cocktail.png";
import dinner from "./servicesimg/dinner.png";
import park from "./servicesimg/park.png";
export class Services extends Component {
	render() {
		return (
			<div className="service_container">
				<span className="service_title">What We Do</span>
				<h2 className="h2">Discover Our Services</h2>
				<div className="service_items">
					<Serviceitem simage={park} heading="Travel plan"></Serviceitem>
					<Serviceitem simage={dinner} heading="Catering service"></Serviceitem>
					<Serviceitem simage={bed} heading="Baby sitting"></Serviceitem>
					<Serviceitem simage={towel} heading="Laundry"></Serviceitem>
					<Serviceitem simage={clock} heading="Hire driver"></Serviceitem>
					<Serviceitem simage={cocktail} heading="Restobar"></Serviceitem>
				</div>
			</div>
		);
	}
}

export default Services;

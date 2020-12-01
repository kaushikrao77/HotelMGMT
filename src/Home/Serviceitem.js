import React, { Component } from "react";
import "./serviceitem.css";
export class Serviceitem extends Component {
	render() {
		return (
			<div className="service_item">
				<img
					className="service_item_img hoverimage"
					src={this.props.simage}
				></img>
				<h4 className="heading">{this.props.heading}</h4>
			</div>
		);
	}
}

export default Serviceitem;

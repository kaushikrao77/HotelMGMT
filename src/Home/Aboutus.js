import React, { Component } from "react";
import "./aboutus.css";
// import b4 from "./backgroundimg/b4.jpg";
export class Aboutus extends Component {
  render() {
    return (
      <div className="aboutus">
        <div className="aboutus_info">
          <span className="span">Welcome</span>

          <h6 className="aboutus_about">
            DSCE is a leading online accommodation site. We’re passionate about
            travel. Every day, we inspire and reach millions of travelers across
            90 local websites in 41 languages. So when it comes to booking the
            perfect hotel, vacation rental, resort, apartment, guest house, or
            tree house, we’ve got you covered.
          </h6>
        </div>
      </div>
    );
  }
}

export default Aboutus;

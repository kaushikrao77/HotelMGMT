import React from "react";
import { Router } from "react-router-dom";
import "./footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="col dsce">&copy;DSCE ALL RIGHTS RESERVED</div>

        <ul className="col list">
          <Link to="/">
            <li className="listitems">Home</li>
          </Link>
          <Link to="/room">
            <li className="listitems">Check Prices</li>
          </Link>
          <Link to="/userdetails">
            <li className="listitems">Book Rooms</li>
          </Link>
        </ul>

        <div className="col contact">contact info</div>
      </div>
    </div>
  );
}
export default Footer;

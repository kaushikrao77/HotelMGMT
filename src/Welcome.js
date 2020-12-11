import React from "react";
import { Link } from "react-router-dom";
import "./Projindex.css";

function Welcome() {
  return (
    <>
      <header>
        <div className="logo">
          <Link to="/">
            <img src="logo2.jpg" alt="img"></img>
          </Link>
        </div>
        <nav className="nav">
          <ul className="item2">
            <Link to="/">
              <li>
                <h1>Home</h1>
              </li>
            </Link>
            <Link to="/room">
              <li>
                <h1>Check Prices</h1>
              </li>
            </Link>
            <Link to="/userdetails">
              <li>
                <h1>Book Rooms</h1>
              </li>
            </Link>
            <Link to="/about">
              <li>
                <h1>About Us</h1>
              </li>
            </Link>
          </ul>
        </nav>
      </header>
    </>
  );
}
export default Welcome;

import "./RoomType.css";
import React from "react";
import { Link } from "react-router-dom";

function Roomtype(props) {
  return (
    <div className="maindiv">
      <div className="roomtype__container">
        <img alt="img" src={props.room} className="roomtype__img"></img>
        <div className="roomtype__details">
          <h4>{props.title}</h4>
          <div className="roomtype__price">
            <h3>{props.rate}$</h3>/
            <span>
              <h4>Per night</h4>
            </span>
          </div>

          <div className="alt">
            <h4> {props.capacity} persons, king size bed.</h4>
            <h4 className="book">
              {" "}
              <Link to="/userdetails">
                <button>Book</button>
              </Link>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Roomtype;

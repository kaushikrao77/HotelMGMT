import React, { useState } from "react";
import "./Projindex.css";
import "./mycss.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Footer from "./Footer";

function UserDetails() {
  const { register, handleSubmit, watch, errors } = useForm();
  const [formErr, setFormErr] = useState("");
  const [notAvail, setNotAvail] = useState("");
  const [orderId, setOrderId] = useState("");

  function isDateBefore(date1, date2) {
    return (
      new Date(new Date(date1).toDateString()) <
      new Date(new Date(date2).toDateString())
    );
  }

  const onSubmit = (data) => {
    setOrderId("");
    setNotAvail("");

    if (isDateBefore(data.checkOutDate, data.checkInDate)) {
      setNotAvail("Checkout date not valid");
      return;
    }

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    if (data.checkInDate) var urlencoded = new URLSearchParams();
    urlencoded.append("firstName", data.firstName);
    urlencoded.append("lastName", data.lastName);
    urlencoded.append("email", data.email);
    urlencoded.append("checkInDate", data.checkInDate);
    urlencoded.append("checkOutDate", data.checkOutDate);
    urlencoded.append("roomId", data.roomId);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    fetch(`https://hotel-mnmt.herokuapp.com/`, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        // console.log(JSON.parse(result));
        let result1 = JSON.parse(result);
        if (result1.roomFull) {
          setNotAvail(`This room is not available on ${result1.dateRoomFull}`);
        } else {
          setOrderId(`Order Successful: Your Order ID is :${result1.orderId}`);
        }
      })
      .catch((error) => console.log("error", error));
  };
  return (
    <>
      <section className="head">
        <h1>Thank You for choosing to stay at our hotel!</h1>
        <h3>Please Enter your details.</h3>
      </section>

      <form className="parent" onSubmit={handleSubmit(onSubmit)}>
        <div className="img"></div>

        <div className="details">
          <div className="name">
            <div>
              <input
                name="firstName"
                ref={register({ required: true })}
                type="text"
                placeholder="First Name"
              ></input>
              {errors.firstName && <span>This field is required</span>}
            </div>
            <div>
              <input
                name="lastName"
                ref={register({ required: true })}
                type="text"
                placeholder="Last Name"
              ></input>
              {errors.lastName && <span>This field is required</span>}
            </div>
          </div>
          <div className="email">
            <input
              name="email"
              type="email"
              placeholder="Email Address"
              ref={register({ required: true })}
            ></input>
            {errors.email && <span>This field is required</span>}
          </div>
          <div className="rooms">
            <select name="roomId" ref={register}>
              <option value="1">Premium King Room</option>
              <option value="2">Deluxe Room</option>
              <option value="3">Double Room</option>
              <option value="4">Luxury Room</option>
              <option value="5">Room With View</option>
              <option value="6">Small View</option>
            </select>
          </div>
          <label>Check-in date.</label>
          <input
            ref={register({ required: true })}
            name="checkInDate"
            type="date"
            className="dateInput"
          />
          {errors.checkInDate && <span>This field is required</span>}
          <label>Check-out date.</label>
          <input
            ref={register({ required: true })}
            name="checkOutDate"
            type="date"
            className="dateInput"
          />
          {errors.checkOutDate && <span>This field is required</span>}
          <div className="notAvail">{notAvail}</div>
          <button> Book </button>
          <div className="orderId">{orderId}</div>
        </div>
      </form>
      <Footer />
    </>
  );
}

export default UserDetails;

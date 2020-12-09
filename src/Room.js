import "./Room.css";
import React from "react";
import RoomType from "./Roomtype";
import room2 from "./rooms/room2.jpg";
import room3 from "./rooms/room3.jpg";
import room4 from "./rooms/room4.jpg";
import room5 from "./rooms/room5.jpg";
import room6 from "./rooms/room6.jpeg";
import room7 from "./rooms/room7.jpg";
import Footer from "./Footer";

function Room() {
  return (
    <div className="room">
      <div className="room__header">
        <h1>Our Rooms</h1>
      </div>
      <div className="room__type">
        <RoomType
          room={room2}
          rate={1000}
          capacity={4}
          title={"Premium King Room"}
        />
        <RoomType room={room3} rate={900} capacity={2} title={"Deluxe Room"} />
        <RoomType room={room4} rate={800} capacity={3} title={"Double Room"} />
        <RoomType room={room5} rate={700} capacity={3} title={"Luxury Room"} />
        <RoomType
          room={room6}
          rate={600}
          capacity={2}
          title={"Room With View"}
        />
        <RoomType room={room7} rate={500} capacity={4} title={"Small View"} />
      </div>
      <Footer />
    </div>
  );
}

export default Room;

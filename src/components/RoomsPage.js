import React from "react";
import { useNavigate } from 'react-router-dom';
import "./RoomPage.css" // Import CSS for styling

const roomsData = [
  {
    id: 1,
    name: "Cozy Apartment",
    price: "$80/night",
    image: "room1.jpg", // Ensure this image is in your public/images folder
  },
  {
    id: 2,
    name: "Modern Studio",
    price: "$120/night",
    image: "room2.jpg",
  },
  {
    id: 3,
    name: "Luxury Suite",
    price: "$200/night",
    image: "room3.jpg",
  },
  // Add more rooms as needed
];

const RoomsPage = () => {
  const navigate = useNavigate();

  const handleBookNowClick = () => {
    navigate('/book'); // Navigate to the booking page
  };
  return (
    <div className="rooms-page-container">
      <h1>Available Rooms</h1>
      <div className="rooms-grid">
        {roomsData.map((room) => (
          <div key={room.id} className="room-card">
            <img src={room.image} alt={room.name} className="room-image" />
            <h2>{room.name}</h2>
            <p>{room.price}</p>
            <button className="book-button" onClick={handleBookNowClick}>Book Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomsPage;

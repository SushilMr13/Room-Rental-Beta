import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css"; // Import the CSS file for styling

const HomePage = () => {
    const navigate = useNavigate();

  const handleExploreRooms = () => {
    navigate("/rooms");
  };
    const handleBookNowClick = () => {
        navigate('/book');
  };
  return (
    <div className="homepage-container">
      <header className="hero-section">
        <h1>Welcome to Room Rental Service</h1>
        <p>Find the perfect room for your stay.</p>
        <button className="cta-button" onClick={handleExploreRooms}>Explore Rooms</button>
      </header>

      <section className="features-section">
        <h2>Why Choose Us?</h2>
        <div className="features">
          <div className="feature">
            <h3>Affordable Prices</h3>
            <p>We offer competitive prices for all our rooms.</p>
          </div>
          <div className="feature">
            <h3>Convenient Locations</h3>
            <p>Our rooms are located in prime areas for easy access to local attractions.</p>
          </div>
          <div className="feature">
            <h3>Comfortable Stays</h3>
            <p>All rooms are equipped with modern amenities for a comfortable stay.</p>
          </div>
        </div>
      </section>

      <section className="rooms-section">
        <h2>Available Rooms</h2>
        <div className="rooms">
          <div className="room-card">
            <img src="room1.jpg" alt="Room 1" />
            <h3>Cozy Apartment</h3>
            <p>$80/night</p>
            <button className="book-button" onClick={handleBookNowClick}>Book Now</button>
          </div>
          <div className="room-card">
            <img src="room2.jpg" alt="Room 2" />
            <h3>Modern Studio</h3>
            <p>$120/night</p>
            <button className="book-button" onClick={handleBookNowClick}>Book Now</button>
          </div>
          <div className="room-card">
            <img src="room3.jpg" alt="Room 3" />
            <h3>Luxury Suite</h3>
            <p>$200/night</p>
            <button className="book-button" onClick={handleBookNowClick}>Book Now</button>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2024 Room Rental Service. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;

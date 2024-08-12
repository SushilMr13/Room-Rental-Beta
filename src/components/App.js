import React from 'react';
import './App.css';

// import Login from './Login';
import { Route, Routes,Link } from "react-router-dom";
import HomePage from './HomePage';
import RoomsPage from './RoomsPage';
import BookingPage from './BookingPage';


const App = () => {
  return (
    // {/* <Login/> */}
    <div className="App">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/rooms">Rooms</Link>
          <Link to="/book">Book Now</Link> {/* Link to Booking Page */}
        </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/rooms" element={<RoomsPage />} />
        <Route path="/book" element={<BookingPage />} />
      </Routes>
      </div>
  );
};

export default App;

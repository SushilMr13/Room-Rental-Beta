import React, { useState } from 'react';
import './BookingPage.css'; // Import your CSS file for styling

const BookingPage = () => {
  // State to manage form input values
  const [formData, setFormData] = useState({
    name: '',
    contactDetails: '',
    email: ''
  });

  // Handler for input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to a server)
    console.log('Form submitted:', formData);
  };

  return (
    <div className="booking-page">
      <h2>Book Your Stay</h2>
      <form className="booking-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="contactDetails">Contact Details:</label>
          <input
            type="text"
            id="contactDetails"
            name="contactDetails"
            value={formData.contactDetails}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BookingPage;

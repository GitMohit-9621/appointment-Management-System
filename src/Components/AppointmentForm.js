// src/components/AppointmentForm.js
import React, { useState, useEffect } from 'react';
import './AppointmentForm.css';

const suggestions = ["John Doe", "Jane Smith", "Michael Johnson", "Emily Davis", "Chris Brown"];

const AppointmentForm = ({ addAppointment, editAppointment, currentAppointment }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    state: '',
    services: '',
    date: '',
    time: '',
  });

  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    if (currentAppointment) {
      setFormData(currentAppointment);
    }
  }, [currentAppointment]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === 'firstName' || name === 'lastName') {
      const fullName = `${formData.firstName} ${formData.lastName}`.toLowerCase();
      const filtered = suggestions.filter(suggestion =>
        suggestion.toLowerCase().includes(fullName)
      );
      setFilteredSuggestions(filtered);
      setShowSuggestions(true);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    const [firstName, lastName] = suggestion.split(' ');
    setFormData({ ...formData, firstName, lastName });
    setShowSuggestions(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentAppointment) {
      editAppointment(formData);
    } else {
      addAppointment(formData);
    }
    setFormData({
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      address: '',
      city: '',
      state: '',
      services: '',
      date: '',
      time: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="appointment-form">
      <input 
        type="text" 
        name="firstName" 
        placeholder="First Name" 
        value={formData.firstName} 
        onChange={handleChange} 
        required 
      />
      <input 
        type="text" 
        name="lastName" 
        placeholder="Last Name" 
        value={formData.lastName} 
        onChange={handleChange} 
        required 
      />
      {showSuggestions && (
        <ul className="suggestions-list">
          {filteredSuggestions.map((suggestion, index) => (
            <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
              {suggestion}
            </li>
          ))}
        </ul>
      )}
      <input 
        type="text" 
        name="phone" 
        placeholder="Phone" 
        value={formData.phone} 
        onChange={handleChange} 
        required 
      />
      <input 
        type="email" 
        name="email" 
        placeholder="Email" 
        value={formData.email} 
        onChange={handleChange} 
        required 
      />
      <input 
        type="text" 
        name="address" 
        placeholder="Address" 
        value={formData.address} 
        onChange={handleChange} 
        required 
      />
      <input 
        type="text" 
        name="city" 
        placeholder="City" 
        value={formData.city} 
        onChange={handleChange} 
        required 
      />
      <input 
        type="text" 
        name="state" 
        placeholder="State" 
        value={formData.state} 
        onChange={handleChange} 
        required 
      />
      <textarea
        name="services"
        placeholder="Services"
        value={formData.services}
        onChange={handleChange}
        required
      />
      <input 
        type="date" 
        name="date" 
        value={formData.date} 
        onChange={handleChange} 
        required 
      />
      <input 
        type="time" 
        name="time" 
        value={formData.time} 
        onChange={handleChange} 
        required 
      />
      <button type="submit">{currentAppointment ? 'Save' : 'Add'} Appointment</button>
    </form>
  );
};

export default AppointmentForm;

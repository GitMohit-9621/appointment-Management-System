// src/components/Appointment.js
import React from 'react';

const Appointment = ({ appointment, deleteAppointment, openPopup }) => {
  return (
    <div className="appointment">
      <div>
        <p><strong>Name:</strong> {appointment.firstName} {appointment.lastName}</p>
        <p><strong>Phone:</strong> {appointment.phone}</p>
        <p><strong>Email:</strong> {appointment.email}</p>
        <p><strong>Address:</strong> {appointment.address}, {appointment.city}, {appointment.state}</p>
        <p><strong>Services:</strong> {appointment.services}</p>
        <p><strong>Date:</strong> {appointment.date}</p>
        <p><strong>Time:</strong> {appointment.time}</p>
      </div>
      <div>
        <button onClick={() => openPopup(appointment)}>Edit</button>
        <button onClick={() => deleteAppointment(appointment)}>Delete</button>
      </div>
    </div>
  );
};

export default Appointment;

import React, { useState } from 'react';
import Appointment from './Components/Appointment';
import Popup from './Components/Popup';
// import AppointmentForm from './Components/AppointmentForm';
import AppointmentForm from './Components/AppointmentForm';
import './App.css';

function App() {
  const [appointments, setAppointments] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [currentAppointment, setCurrentAppointment] = useState(null);

  const addAppointment = (appointment) => {
    setAppointments([...appointments, appointment]);
    setShowPopup(false);
  };

  const deleteAppointment = (appointment) => {
    setAppointments(appointments.filter(a => a !== appointment));
  };

  const editAppointment = (updatedAppointment) => {
    setAppointments(appointments.map(a => (a === currentAppointment ? updatedAppointment : a)));
    setShowPopup(false);
    setCurrentAppointment(null);
  };

  const openPopup = (appointment = null) => {
    setCurrentAppointment(appointment);
    setShowPopup(true);
  };

  return (
    <div className="App">
      <h1>Appointment Management System</h1>
      <button className="add-btn" onClick={() => openPopup()}>Add Appointment</button>
      {appointments.map((appointment, index) => (
        <Appointment 
          key={index} 
          appointment={appointment} 
          deleteAppointment={deleteAppointment} 
          openPopup={openPopup} 
        />
      ))}
      {showPopup && (
        <Popup onClose={() => setShowPopup(false)}>
          <AppointmentForm 
            addAppointment={addAppointment} 
            editAppointment={editAppointment} 
            currentAppointment={currentAppointment} 
          />
        </Popup>
      )}
    </div>
  );
}

export default App;

// src/components/Popup.js
import React from 'react';
import './Popup.css';

const Popup = ({ children, onClose }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <button className="close-btn" onClick={onClose}>Close</button>
        {children}
        <button className="print-btn" onClick={handlePrint}>Print</button>
      </div>
    </div>
  );
};

export default Popup;

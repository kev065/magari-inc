import React, { useState } from 'react';
import "./Leasing.css";

const LeaseComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    idNumber: '',
    duration: '',
  });

  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowConfirmation(true);
  };

  const handleConfirm = () => {

    console.log('Lease details submitted:', formData);
    alert("Your Details have been recorded a customer care agent will contact you with further details!")
    
    setFormData({
      name: '',
      phoneNumber: '',
      duration: '',
      carmake: '',
    });
    setShowConfirmation(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <br />
        <label>
          Phone Number:
          <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
        </label>
        <br />
        <label>
          Duration:
          <input type="text" name="duration" value={formData.duration} onChange={handleChange} />
        </label>
        <br />
        <label>
          Car Make:
          <input type="text" name="carmake" value={formData.carmake} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>

      {showConfirmation && (
        <div className="confirmation-popup">
          <p>Please confirm your lease request:</p>
          <p>Name: {formData.name}</p>
          <p>ID Number: {formData.phoneNumber}</p>
          <p>Duration: {formData.duration}</p>
          <p>Carmake: {formData.carmake}</p>
          <button onClick={handleConfirm}>Confirm</button>
        </div>
      )}
    </div>
  );
};

export default LeaseComponent;
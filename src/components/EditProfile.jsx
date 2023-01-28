import React, { useState, useEffect } from 'react';
import './EditProfile.css';

const EditProfile = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    Address: '',
  });

  



  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send updated form data to the server here
    alert('Profile updated!');
  };

  return (
    <div className="display-profile">
      <card1 onSubmit={handleSubmit}>
        <label>
          Update Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Update Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Update Address:
          <textarea
            name="adress"
            value={formData.Address}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Save Changes</button>
      </card1>
      
    </div>

     
  );
};

export default EditProfile;
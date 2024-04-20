// Modal.jsx
import React, { useState } from 'react';
import './CreateModal.css'; // Import the CSS file

const CreateModal = ({ isOpen, onClose, onCreateUser }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subsDate, setSubsDate] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name,
      email,
      subs_date: subsDate,
      description,
    };

    try {
      const response = await fetch('http://localhost:3001/api/subscribers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        credentials: 'include',
      });
      if (response.ok) {
        onCreateUser({ email });

        setName('');
        setEmail('');
        setSubsDate('');
        setDescription('');

        onClose();
      } else {
        console.error('Failed to create user');
      }
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content wrapper">
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ flexGrow: 1, marginBottom: '1rem' }}>
            <h2>Create New User</h2>
          </div>
          <span className="close" onClick={onClose}>
            &times;
          </span>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="input-box">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              required
            />
          </div>
          <div className="input-box">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
          </div>
          <div className="input-box">
            <input
              type="date"
              placeholder="Subs Date"
              value={subsDate}
              onChange={(e) => {
                setSubsDate(e.target.value);
              }}
              required
            />
          </div>
          <div className="input-box">
            <textarea
              value={description}
              placeholder="Description"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </div>
          <button type="submit">Create</button>
        </form>
      </div>
    </div>
  );
};

export default CreateModal;

// Modal.jsx
import React, { useState } from 'react';
import './CreateModal.css'; // Import the CSS file

const CreateModal = ({ isOpen, onClose, onCreateUser }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subsDate, setSubsDate] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreateUser({ name, email, subsDate, description });
    onClose(); // Close the modal
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Create New User</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div>
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div>
            <label>Subscription Date:</label>
            <input type="date" value={subsDate} onChange={(e) => setSubsDate(e.target.value)} required />
          </div>
          <div>
            <label>Description:</label>
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
          </div>
          <button type="submit">Create</button>
        </form>
      </div>
    </div>
  );
};

export default CreateModal;

import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import CreateModal from './CreateModal';

export const Dashboard = ({ onLogout }) => {
  const handleLogout = () => {
    fetch('http://localhost:3001/api/logout', {
      method: 'POST',
      credentials: 'include',
    })
      .then((response) => response.json())
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
    onLogout();
  };

  const [emails, setEmails] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCreateUser = (userData) => {
    setEmails([...emails, userData.email]);
  };

  useEffect(() => {
    fetch('http://localhost:3001/api/subscribers', {
      method: 'GET',
      credentials: 'include',
    })
      .then((response) => response.json())
      .then((data) => {
        const emailsData = data.data.map((data) => data.email);
        setEmails(emailsData);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <div className="wrapper">
        <h2>Welcome to the Dashboard</h2>

        <button onClick={() => setIsModalOpen(true)}>Create</button>
        <table className="email-table">
          <thead>
            <tr>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {emails.map((email, index) => (
              <tr key={index}>
                <td>{email}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <button onClick={handleLogout}>Logout</button>
      </div>
      <CreateModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onCreateUser={handleCreateUser}
      />
    </div>
  );
};

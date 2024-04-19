import React from 'react';
import Dashboard from '../Components/Dashboard/Dashboard';

const DashboardPage = () => {
  const handleLogout = () => {
    // Implement your logout logic here
    console.log('Logged out');
  };

  return (
    <div>
      <Dashboard onLogout={handleLogout} />
    </div>
  );
};

export default DashboardPage;

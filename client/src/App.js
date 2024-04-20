import React, { useState, useEffect } from 'react';
import { LoginForm } from './Components/LoginForm/LoginForm';
import { Dashboard } from './Components/Dashboard/Dashboard';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const sessionExists = sessionStorage.getItem('isLoggedIn') === 'true';

    setIsLoggedIn(sessionExists);
    setLoading(false);
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
    sessionStorage.setItem('isLoggedIn', 'true');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    sessionStorage.removeItem('isLoggedIn');
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {isLoggedIn ? (
        <Dashboard onLogout={handleLogout} />
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;

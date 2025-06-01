
import React, { useState, useEffect } from 'react';
import { LoginForm } from '../components/auth/LoginForm';
import { Dashboard } from '../components/dashboard/Dashboard';
import { UserProvider } from '../context/UserContext';

const Index = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    console.log('Index component mounted');
    console.log('Current URL:', window.location.href);
    console.log('Current pathname:', window.location.pathname);
  }, []);

  const handleLogin = (user: any) => {
    console.log('User logged in:', user);
    setCurrentUser(user);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    console.log('User logged out');
    setCurrentUser(null);
    setIsAuthenticated(false);
  };

  console.log('Index rendering, isAuthenticated:', isAuthenticated);

  return (
    <UserProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        {!isAuthenticated ? (
          <LoginForm onLogin={handleLogin} />
        ) : (
          <Dashboard user={currentUser} onLogout={handleLogout} />
        )}
      </div>
    </UserProvider>
  );
};

export default Index;

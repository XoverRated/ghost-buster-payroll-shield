
import React, { useState } from 'react';
import { LoginForm } from '../components/auth/LoginForm';
import { Dashboard } from '../components/dashboard/Dashboard';
import { UserProvider } from '../context/UserContext';

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
const Index = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const handleLogin = (user: any) => {
    setCurrentUser(user);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setIsAuthenticated(false);
  };

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

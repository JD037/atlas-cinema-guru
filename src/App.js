// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Authentication from './routes/auth/Authentication';
import Dashboard from './routes/dashboard/Dashboard';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userUsername, setUserUsername] = useState('');

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      axios.post('http://localhost:8000/api/auth/', {}, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
        .then(response => {
          setIsLoggedIn(true);
          setUserUsername(response.data.username);
        })
        .catch(error => {
          console.error('Error during authentication:', error);
        });
    }
  }, []);

  return (
    <div className="App">
      {isLoggedIn ? (
        <Dashboard username={userUsername} setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <Authentication setIsLoggedIn={setIsLoggedIn} setUserUsername={setUserUsername} />
      )}
    </div>
  );
}

export default App;

// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Input from './components/general/Input';
import SelectInput from './components/general/SelectInput';
import Button from './components/general/Button';
import SearchBar from './components/general/SearchBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Authentication from './components/auth/Authentication';
import Dashboard from './components/dashboard/Dashboard';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userUsername, setUserUsername] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [selectValue, setSelectValue] = useState('');
  const [searchTitle, setSearchTitle] = useState('');

  const options = [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
  ];

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      axios.post('/api/auth/', {}, {
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
        <Dashboard username={userUsername} />
      ) : (
        <Authentication />
      )}
      <h1>General Components Demo</h1>
      <Input
        label="Text Input"
        type="text"
        value={inputValue}
        setValue={setInputValue}
        icon={<FontAwesomeIcon icon={faSearch} />}
      />
      <SelectInput
        label="Select Input"
        options={options}
        value={selectValue}
        setValue={setSelectValue}
      />
      <Button
        label="Click Me"
        onClick={() => alert('Button clicked!')}
      />
      <SearchBar
        title={searchTitle}
        setTitle={setSearchTitle}
      />
    </div>
  );
}

export default App;

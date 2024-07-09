// src/App.js
import React, { useState } from 'react';
import Input from './components/general/Input';
import SelectInput from './components/general/SelectInput';
import Button from './components/general/Button';
import SearchBar from './components/general/SearchBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [selectValue, setSelectValue] = useState('');
  const [searchTitle, setSearchTitle] = useState('');

  const options = [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
  ];

  return (
    <div className="App">
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

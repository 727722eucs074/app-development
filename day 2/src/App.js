// src/App.js
import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';
import './App.css';

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const handleFormSwitch = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <div className="App">
      {currentForm === 'login' ? (
        <Login onFormSwitch={handleFormSwitch} />
      ) : (
        <Register onFormSwitch={handleFormSwitch} />
      )}
    </div>
  );
}

export default App;

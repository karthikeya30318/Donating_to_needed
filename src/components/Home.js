import React, { useState } from 'react';

const Home = () => {
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('');

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = () => {
    if (name.trim() !== '') {
      setGreeting(`Hello, ${name}! Welcome to the platform.`);
    } else {
      setGreeting('Please enter your name.');
    }
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f0f0f0',
  };

  const headingStyle = {
    color: '#333',
    marginBottom: '20px',
  };

  const paragraphStyle = {
    color: '#666',
    marginBottom: '15px',
  };

  const inputStyle = {
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    marginBottom: '15px',
    width: '250px',
  };

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  };

  const greetingStyle = {
    marginTop: '20px',
    color: '#28a745',
    fontWeight: 'bold',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Welcome to Our Platform</h1>
      <p style={paragraphStyle}>Please enter your name to get started:</p>
      <input 
        type="text" 
        value={name} 
        onChange={handleInputChange} 
        placeholder="Enter your name" 
        style={inputStyle}
      />
      <button 
        onClick={handleSubmit} 
        style={buttonStyle}
        onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'}
        onMouseOut={(e) => e.target.style.backgroundColor = '#007bff'}
      >
        Submit
      </button>
      <h2 style={greetingStyle}>{greeting}</h2>
    </div>
  );
};

export default Home;
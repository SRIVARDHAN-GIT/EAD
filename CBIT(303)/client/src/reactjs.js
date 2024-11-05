import React, { useState } from 'react';

const PasswordChecker = () => {
  const [password, setPassword] = useState('');
  const [strengthMessage, setStrengthMessage] = useState('');

  const checkPasswordStrength = (password) => {
    let strength = 0;

    // Check length
    if (password.length >= 8) strength += 1;
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength += 1;
    if (/\d/.test(password)) strength += 1;
    if (/[^A-Za-z0-9]/.test(password)) strength += 1;
    switch (strength) {
      case 0:
      case 1:
        setStrengthMessage('WEAK');
        break;
      case 2:
        setStrengthMessage('MODERATE');
        break;
      case 3:
        setStrengthMessage('STRONG');
        break;
      case 4:
        setStrengthMessage('VERY STRONG');
        break;
      default:
        setStrengthMessage('');
        break;
    }
  };

  const handleChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    checkPasswordStrength(newPassword);
  };

  return (
    <div style={{padding: '20px', maxWidth: '400px', margin: 'auto' }}>
      <h2>Password Strength Checker</h2>
      <input
        type="password"
        value={password}
        onChange={handleChange}
        placeholder="Enter your password"
        style={{
          padding: '10px',
          width: '100%',
          border: '1px solid #ccc',
          borderRadius: '4px',
          marginBottom: '10px',
        }}
      />
      <div
        style={{
          fontWeight: 'bold',
          color: strengthMessage === 'VERY STRONG' ? 'green' : strengthMessage === 'STRONG' ? 'blue' : 'red',
        }}
      >
        {strengthMessage && `Password Strength: ${strengthMessage}`}
      </div>
    </div>
  );
};

export default PasswordChecker;

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './forgotPassword.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/v1/auth/forgot-password', {
        email,
      });

      if (response.data.success) {
        setSuccess('Password reset link has been sent to your email address.');
        setError('');
      } else {
        setError(response.data.message);
        setSuccess('');
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError('An error occurred. Please try again later.');
      }

      console.error(error);
    }
  };

  const handleReturnToLogin = () => {
    navigate('/login'); // Navigate back to the login page
  };

  return (
    <div className="forgot-password-container">
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
      <p>
        <span onClick={handleReturnToLogin}>Return to Login</span>
      </p>
    </div>
  );
};

export default ForgotPassword;

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/v1/auth/login', {
        email,
        password,
      });

      if (response.data.success) {
        // Store user data in localStorage
        localStorage.setItem('user', JSON.stringify(response.data.user));

        console.log("status code",response.status);

        // Redirect to admin page after successful login
        navigate('/AdminPanel');
      } else {
        // Login failed, display error message
        console.log("status code",response.status);
        setErrorMessage(response.data.message);
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        setErrorMessage(error.response.data.message);
        console.log("status code: " + error.response.status);
      } else {
        setErrorMessage('An error occurred during login.');
      }

      console.error(error);
    }

    setPassword('');
    setEmail('');
  };

  const signup = () => navigate('/Register');

  const handleForgotPassword = () => {
    navigate('/forgot-password'); // Navigate to the forgot password page
  };

  return (
    <div className='Login_container'>
      <h2>Login</h2>
      {errorMessage && <p className='error-message'>{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type='submit'>SIGN IN</button>
        <p>
          Don't have an account? <span onClick={signup}>Sign-Up</span>
        </p>
        <p>
          <span onClick={handleForgotPassword}>Forgot Password?</span>
        </p>
      </form>
    </div>
  );
};

export default Login;

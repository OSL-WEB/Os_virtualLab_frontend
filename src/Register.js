import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './register.css';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const navigate = useNavigate();

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const isValidPhoneNumber = (phone) => {
    return /^\d{10}$/.test(phone); 
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name || !email || !phone || !address || !password ) {
      setError('All fields are required');
      return;
    }

    if (!isValidEmail(email)) {
      setError('Invalid email address');
      return;
    }

    if (!isValidPhoneNumber(phone)) {
      setError('Invalid phone number');
      return;
    }

    const formData = {
      name,
      email,
      phone,
      address,
      password,
    };

    
    axios.post("http://localhost:8080/api/v1/auth/register", formData)
      .then((response) => {
        if (response.data.success) {
          console.log("status code: ", response.status);
          setError('');
          setSuccessMessage('Registration successful! You can now check your email for verification.');
          setName('');
          setEmail('');
          setPhone('');
          setAddress('');
          setPassword('');
        } else {
          console.log("status code: ", response.status);
          setError(response.data.message);
          setSuccessMessage('');
        }
      })
      .catch((error) => {
        if (error.response && error.response.data && error.response.data.message) {
          setError(error.response.data.message);
        } else {
          setError('An error occurred. Please try again later.');
        }
        console.log(error);
        setSuccessMessage('');
      });
  };

  const login = () => navigate("/login");

  return (
    <div className="form-container">
      <h2>Sign-Up</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Phone:</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div>
          <label>Address:</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Sign Up</button>
        <p>
          Already have an account?{" "}
          <span onClick={login}>Login</span>
        </p>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
    </div>
  );
};

export default Register;

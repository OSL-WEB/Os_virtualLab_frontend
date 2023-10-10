import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const EmailVerify = () => {
  const [verificationStatus, setVerificationStatus] = useState('');
  const navigate = useNavigate();
  const { token } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:8080/api/v1/auth/verify/${token}`)
      .then((response) => {
        if (response.data.success) {
          setVerificationStatus('Email verified successfully. You can now log in.');
        } else {
          setVerificationStatus(response.data.message);
        }
      })
      .catch((error) => {
        console.error('Error verifying email:', error);
        setVerificationStatus('An error occurred while verifying your email.');
      });
  }, [token]);

  const goToLogin = () => {
    navigate('/login');
  };

  return (
    <div>
      <h2>Email Verification</h2>
      <p>{verificationStatus}</p>
      <button onClick={goToLogin}>Go to Login</button>
    </div>
  );
};

export default EmailVerify;

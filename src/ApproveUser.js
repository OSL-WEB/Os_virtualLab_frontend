import './ApproveUser.css';

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ApproveUser = () => {
  const [approvalStatus, setApprovalStatus] = useState('');
  const { token } = useParams();

  const handleApprove = () => {
    // Ensure that the token is defined
    if (!token) {
      console.error('Token is undefined');
      return;
    }

    axios.get(`http://localhost:8080/api/v1/auth/approve/${token}`)
      .then((response) => {
        if (response.data.success) {
          setApprovalStatus('User approved successfully.');
        } else {
          setApprovalStatus(response.data.message);
        }
      })
      .catch((error) => {
        console.error('Error approving user:', error);
        setApprovalStatus('An error occurred while approving the user.');
      });
  };

  return (
    <div>
      <h2>User Approval</h2>
      <p>{approvalStatus}</p>
      <button onClick={handleApprove}>Approve User</button>
    </div>
  );
};

export default ApproveUser;

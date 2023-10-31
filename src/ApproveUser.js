import React, { useState } from 'react';
import axios from 'axios';
import './ApproveUser.css';

const ApproveUser = ({ token }) => {
  const [approvalStatus, setApprovalStatus] = useState('');

  const handleApprove = () => {
    axios.put(`http://localhost:8080/api/v1/auth/approve/${token}`)
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
      <h2>Super Admin Approval</h2>
      <p>Do you want to approve this user's request?</p>
      <button onClick={handleApprove}>Approve User</button>
      <p>{approvalStatus}</p>
    </div>
  );
};

export default ApproveUser;

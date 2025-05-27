import React, { useEffect, useState } from 'react';
import API from '../services/api';

const RequestList = () => {
  const [requests, setRequests] = useState([]);

  const fetchRequests = async () => {
    try {
      const res = await API.get('/projects/me');
      console.log('Fetched requests:', res.data);
      setRequests(res.data || []);
      console.log('Fetched requests:', requests.title);
    } catch (error) {
      console.error('Error fetching requests:', error.response?.data?.message || error.message);
      setRequests([]);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  return (
    <div>
      <h3>Your Project Requests</h3>
      {requests.length === 0 ? (
        <p>No requests found.</p>
      ) : (
        <ul>
          {requests.map((req) => (
            <li key={req._id}>
              <strong>{req.title}</strong> - {req.status}
              {req.remarks && <p><i>Remarks: {req.remarks}</i></p>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RequestList;

// src/components/EmployeeDashboard.jsx
import React, { useState } from 'react';
import ProjectForm from './ProjectForm';
import RequestList from './RequestList';

const EmployeeDashboard = () => {
  const [refresh, setRefresh] = useState(false);

  // useEffect(() => {
  //   fetchRequests();
  // }, [refresh]); // re-fetch whenever refresh changes

  const handleRequestSubmit = () => {
    setRefresh(!refresh); // toggle to re-fetch requests
  };

  return (
    <div>
      <h2>Employee Dashboard</h2>
      <ProjectForm onRequestSubmit={handleRequestSubmit} />
      <RequestList key={refresh} />
    </div>
  );
};

export default EmployeeDashboard;

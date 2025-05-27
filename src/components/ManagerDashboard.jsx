import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';

const ManagerDashboard = () => {
  const [requests, setRequests] = useState([]);
  const [statusFilter, setStatusFilter] = useState('all');
  const [remarksMap, setRemarksMap] = useState({});

  const token = localStorage.getItem('token'); // JWT token

  useEffect(() => {
    fetchRequests();
  }, []);

  const fetchRequests = async () => {
    try {
      const res = await axios.get('/api/projects', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setRequests(res.data);
    } catch (error) {
      console.error('Error fetching requests:', error);
    }
  };

  const handleApprove = async (id) => {
    try {
      await axios.put(
        `/api/projects/${id}/approve`,
        { remarks: remarksMap[id] || '' },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      fetchRequests();
    } catch (error) {
      console.error('Error approving request:', error);
    }
  };

  const handleReject = async (id) => {
    try {
      await axios.put(
        `/api/projects/${id}/reject`,
        { remarks: remarksMap[id] || '' },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      fetchRequests();
    } catch (error) {
      console.error('Error rejecting request:', error);
    }
  };

  const filteredRequests =
    statusFilter === 'all'
      ? requests
      : requests.filter((r) => r.status === statusFilter);

  const handleRemarksChange = (id, value) => {
    setRemarksMap((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Manager Dashboard</h2>

      <div className="mb-3">
        <label className="form-label fw-bold">Filter by Status:</label>
        <select
          className="form-select w-auto d-inline ms-2"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="pending">Pending</option>
          <option value="approved">Approved</option>
          <option value="rejected">Rejected</option>
        </select>
      </div>

      <table className="table table-bordered">
        <thead className="table-light">
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Submitted By</th>
            <th>Status</th>
            <th>Remarks</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredRequests.map((req) => (
            <tr key={req._id}>
              <td>{req.title}</td>
              <td>{req.description}</td>
              <td>{req.submittedBy?.name || 'N/A'} <br /> ({req.submittedBy?.email || 'N/A'})</td>
              <td className="text-capitalize">{req.status}</td>
              <td>{req.remarks || '-'}</td>
              <td>
                {req.status === 'pending' && (
                  <>
                    <input
                      type="text"
                      placeholder="Remarks"
                      className="form-control mb-2"
                      value={remarksMap[req._id] || ''}
                      onChange={(e) => handleRemarksChange(req._id, e.target.value)}
                    />
                    <button
                      className="btn btn-success btn-sm me-2"
                      onClick={() => handleApprove(req._id)}
                    >
                      Approve
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleReject(req._id)}
                    >
                      Reject
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
          {filteredRequests.length === 0 && (
            <tr>
              <td colSpan="6" className="text-center">
                No project requests found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ManagerDashboard;

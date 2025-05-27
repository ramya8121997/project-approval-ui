import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import EmployeeDashboard from './components/EmployeeDashboard';
import ManagerDashboard from './components/ManagerDashboard';

import Navbar from './components/Navbar';
import getUserFromToken from './utils/getUserFromToken';


function App() {
  const user = getUserFromToken();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />

        {user?.role === 'employee' && (
          <Route path="/dashboard" element={<EmployeeDashboard />} />
        )}

        {user?.role === 'manager' && (
          <Route path="/dashboard" element={<ManagerDashboard />} />
        )}


        {/* Uncomment when AdminDashboard is ready */}
        {/* {user?.role === 'admin' && (
          <Route path="/dashboard" element={<AdminDashboard />} />
        )} */}

        {/* Fallback route: Redirect unknown URLs to login */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;

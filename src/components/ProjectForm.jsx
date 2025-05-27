// src/components/ProjectForm.jsx
import React, { useState } from 'react';
import API from '../services/api';

const ProjectForm = ({ onRequestSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post('/projects', { title, description });
      setTitle('');
      setDescription('');
      onRequestSubmit(); // refresh request list
    } catch (error) {
      console.error('Error submitting request:', error.response?.data?.message || error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Submit Project Request</h3>
      <input
        type="text"
        placeholder="Project Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Project Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ProjectForm;

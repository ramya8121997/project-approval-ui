const BASE_URL = 'http://localhost:5000/api';

// Helper function to get auth token from localStorage
const getAuthToken = () => localStorage.getItem('token');

// GET request with Authorization header if token exists
const get = async (endpoint) => {
  const token = getAuthToken();
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
    },
  });
  if (!res.ok) {
    // throw error with message from response
    const errorData = await res.json();
    throw new Error(errorData.message || 'Failed to fetch');
  }
  return res.json();
};

// POST request with Authorization header if token exists
const post = async (endpoint, data) => {
  const token = getAuthToken();
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
    },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || 'Failed to post');
  }
  return res.json();
};

// Login API call (no token needed here)
const login = async (credentials) => {
  const res = await fetch(`${BASE_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials),
  });
  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || 'Login failed');
  }
  return res.json();
};

// Signup API call (no token needed here)
const signup = async (data) => {
  const res = await fetch(`${BASE_URL}/auth/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || 'Signup failed');
  }
  return res.json();
};

const API = {
  get,
  post,
  login,
  signup,
};

export default API;


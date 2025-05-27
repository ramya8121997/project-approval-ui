import { jwtDecode } from 'jwt-decode';

const getUserFromToken = () => {
  const token = localStorage.getItem('token');
  if (!token) return null;
  try {
    const decoded = jwtDecode(token);
    return decoded;
  } catch (err) {
    return null;
  }
};

export default getUserFromToken;

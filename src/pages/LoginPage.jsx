// pages/LoginPage.jsx
import LoginForm from '../components/LoginForm';
import { login } from '../services/api';

export default function LoginPage() {
  const handleLogin = async (credentials) => {
    const data = await login(credentials);
    console.log('Login Response:', data);
  };

  return <LoginForm onSubmit={handleLogin} />;
}
